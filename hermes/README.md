# AI Training Data Broker for Hermes

Adds the public, read-only [AI Training Data Broker](https://aitrainingdatabroker.com) blog MCP server and one skill
that tells the agent how to use it. Ask how much AI labs pay for company data, whether it is legal to sell, how
de-identification and exclusivity work, or what RL data is. Answers come from the blog with a link to the full article.

- **Server:** `https://aitrainingdatabroker.com/api/mcp` (Streamable HTTP, no key, no sign-in)
- **Disclosure:** every tool call goes to aitrainingdatabroker.com. The tools only read published blog posts and write nothing. No telemetry beyond ordinary server logs. Nothing else is installed or run locally: configuration and a skill only.
- **Skill:** `skills/ai-training-data-licensing`

More links: [home](https://aitrainingdatabroker.com), [check if your data qualifies](https://aitrainingdatabroker.com/sell/), [free calculator](https://aitrainingdatabroker.com/tools/data-value-calculator/), [blog](https://aitrainingdatabroker.com/blog/).
