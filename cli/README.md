# aitdb: AI Training Data Broker from the command line

Search and read the [AI Training Data Broker](https://aitrainingdatabroker.com) blog without leaving the terminal.
It answers questions about licensing company data to AI labs: what it pays, whether it is legal, how de-identification
and exclusivity work, and what RL data is.

```
npx aitrainingdatabroker latest
npm install -g aitrainingdatabroker
aitdb search "de-identification"
aitdb latest --audience buyer
aitdb get is-it-legal-to-sell-company-data-to-ai-labs
```

- Reads the public, read-only MCP server at `https://aitrainingdatabroker.com/api/mcp`.
- No login and no API key. Nothing is written anywhere.
- Each result is a summary or the opening of an article with a link to the full page.
- Articles are the broker's guidance, not legal advice.

## Links

- Home: https://aitrainingdatabroker.com
- Check if your company's data qualifies: https://aitrainingdatabroker.com/sell/
- Free data value calculator: https://aitrainingdatabroker.com/tools/data-value-calculator/
- Blog: https://aitrainingdatabroker.com/blog/
- MCP server and agent skills: https://github.com/aitrainingdatabroker/blog-mcp-server
