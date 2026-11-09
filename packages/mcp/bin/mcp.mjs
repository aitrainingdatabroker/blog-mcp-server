#!/usr/bin/env node
// stdio MCP server that forwards each JSON-RPC message to the public blog MCP server over HTTP.
import readline from 'node:readline'

const URL_ = process.env.AITDB_URL || 'https://aitrainingdatabroker.com/api/mcp'
const out = (obj) => process.stdout.write(JSON.stringify(obj) + '\n')

async function forward(line) {
  let msg
  try {
    msg = JSON.parse(line)
  } catch {
    return out({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } })
  }
  const isNotification = msg.id === undefined
  try {
    const res = await fetch(URL_, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json, text/event-stream' },
      body: JSON.stringify(msg),
    })
    if (isNotification) return
    let text = (await res.text()).trim()
    const data = text.split('\n').find((l) => l.startsWith('data:'))
    if (data) text = data.slice(5).trim()
    out(JSON.parse(text))
  } catch (e) {
    if (!isNotification) out({ jsonrpc: '2.0', id: msg.id, error: { code: -32000, message: String(e.message || e) } })
  }
}

readline.createInterface({ input: process.stdin }).on('line', (l) => {
  if (l.trim()) forward(l)
})
