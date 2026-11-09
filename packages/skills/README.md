# aitrainingdatabroker-skills

Twelve agent skills (`SKILL.md`) from [AI Training Data Broker](https://aitrainingdatabroker.com) that teach an agent
to answer questions about licensing company data to AI labs from the public blog MCP server.

```
npx aitrainingdatabroker-skills install
npx aitrainingdatabroker-skills list
```

`install` copies the skills into `.claude/skills` (use `--dir` for another folder) and skips any that already exist.
Skills: licensing overview, de-identification, exclusive vs non-exclusive licenses, pricing, legality, call prep,
workflow data, RL data, RL environment value, call center recordings, security data, and buying licensed data.

Add the MCP server `https://aitrainingdatabroker.com/api/mcp` (read-only, no key) to your agent so the skills have
something to read. Articles are the broker's guidance, not legal advice.

- Home: https://aitrainingdatabroker.com
- Check if your company's data qualifies: https://aitrainingdatabroker.com/sell/
- Blog: https://aitrainingdatabroker.com/blog/
- Source: https://github.com/aitrainingdatabroker/blog-mcp-server
