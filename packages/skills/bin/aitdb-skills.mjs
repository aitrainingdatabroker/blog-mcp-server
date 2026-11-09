#!/usr/bin/env node
// Copies the AI Training Data Broker agent skills into a skills folder.
import { cpSync, existsSync, readdirSync, mkdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const src = join(dirname(fileURLToPath(import.meta.url)), '..', 'skills')
const args = process.argv.slice(2)
const HELP = `aitdb-skills: install the AI Training Data Broker agent skills

Usage:
  aitdb-skills list                 show the skills
  aitdb-skills install [--dir DIR]  copy them into DIR (default .claude/skills)

Each skill tells an agent to answer from the public blog MCP server:
https://aitrainingdatabroker.com/api/mcp   (read-only, no key)
More: https://aitrainingdatabroker.com`
const names = readdirSync(src).sort()
const cmd = args[0]
if (cmd === 'list') {
  for (const n of names) console.log(n)
} else if (cmd === 'install') {
  const i = args.indexOf('--dir')
  const dest = resolve(i >= 0 && args[i + 1] ? args[i + 1] : '.claude/skills')
  mkdirSync(dest, { recursive: true })
  for (const n of names) {
    const target = join(dest, n)
    if (existsSync(target)) {
      console.log(`skip ${n} (already there)`)
      continue
    }
    cpSync(join(src, n), target, { recursive: true })
    console.log(`added ${n}`)
  }
  console.log(`\nSkills are in ${dest}. Add the MCP server https://aitrainingdatabroker.com/api/mcp to your agent.`)
} else console.log(HELP)
