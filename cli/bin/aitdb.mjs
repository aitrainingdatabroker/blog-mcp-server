#!/usr/bin/env node
// aitdb: command line for the AI Training Data Broker blog. Talks to the public, read-only MCP server.
// No login and no API key: the server is public.
const URL_ = process.env.AITDB_URL || 'https://aitrainingdatabroker.com/api/mcp'
const HELP = `aitdb: AI Training Data Broker blog from the command line

Usage:
  aitdb latest [--audience seller|buyer] [--limit N]
  aitdb search <words> [--audience seller|buyer] [--limit N]
  aitdb get <slug or url>
  aitdb help

Examples:
  aitdb search "de-identification"
  aitdb latest --audience buyer
  aitdb get is-it-legal-to-sell-company-data-to-ai-labs

Read-only. No key needed. Articles are the broker's guidance, not legal advice.
More: https://aitrainingdatabroker.com`

function parse(argv) {
  const words = []
  const opt = {}
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--audience' || a === '-a') opt.audience = argv[++i]
    else if (a === '--limit' || a === '-n') opt.limit = Number(argv[++i])
    else words.push(a)
  }
  return { words, opt }
}

async function call(name, args) {
  const res = await fetch(URL_, {
    method: 'POST',
    headers: { 'content-type': 'application/json', accept: 'application/json, text/event-stream' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name, arguments: args } }),
  })
  if (!res.ok) throw new Error(`server answered ${res.status}`)
  const j = await res.json()
  if (j.error) throw new Error(j.error.message || 'server error')
  const text = (j.result?.content || []).map((c) => c.text).join('\n')
  return text.replaceAll('utm_source=chatgpt', 'utm_source=cli').replaceAll('utm_medium=app', 'utm_medium=cli')
}

const [cmd, ...rest] = process.argv.slice(2)
const { words, opt } = parse(rest)
const args = {}
if (opt.audience) args.audience = opt.audience
if (opt.limit) args.limit = opt.limit

try {
  if (!cmd || cmd === 'help' || cmd === '--help' || cmd === '-h') console.log(HELP)
  else if (cmd === 'latest') console.log(await call('latest_posts', args))
  else if (cmd === 'search') {
    if (!words.length) throw new Error('give some words to search for')
    console.log(await call('search_posts', { query: words.join(' '), ...args }))
  } else if (cmd === 'get') {
    if (!words.length) throw new Error('give a slug or URL')
    console.log(await call('get_post', { slug: words[0] }))
  } else {
    console.error(`unknown command: ${cmd}\n`)
    console.error(HELP)
    process.exitCode = 1
  }
} catch (e) {
  console.error(`aitdb: ${e.message}`)
  process.exitCode = 1
}
