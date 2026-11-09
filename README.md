# AI Training Data Broker blog MCP server

A public, read-only [Model Context Protocol](https://modelcontextprotocol.io) server for the
[AI Training Data Broker](https://aitrainingdatabroker.com) blog. It answers the questions company owners and
AI teams ask about licensing company data for AI training: what support tickets, team chat and CRM history are
worth, whether licensing it is legal, how exclusivity and de-identification work, and what RL data means.

- **Server URL:** `https://aitrainingdatabroker.com/api/mcp`
- **Transport:** Streamable HTTP, stateless
- **Authentication:** none
- **Access:** read-only. No data is written anywhere.

## Tools

| Tool | What it does |
|---|---|
| `latest_posts` | Newest articles, optionally for sellers or for buyers (up to 10) |
| `search_posts` | Word match on article title, description and body (up to 10) |
| `get_post` | One article by slug or URL: date, who it is for, the opening, the questions its FAQ answers, and a link to read the rest |
| `search` / `fetch` | The standard connector pair used by ChatGPT and deep research |

Each result is a summary or the opening of an article with a link to the full page. Articles are the broker's
guidance, not legal advice.

## Add it to your client

Add the server URL `https://aitrainingdatabroker.com/api/mcp` as a remote MCP server (no key needed).

## Example questions

- How much do AI labs pay for company data?
- Is it legal to sell my company data to an AI lab?
- Show me the latest articles for buyers.

## Links

- Home: https://aitrainingdatabroker.com
- Check if your company's data qualifies: https://aitrainingdatabroker.com/sell/
- Free data value calculator: https://aitrainingdatabroker.com/calculator/
- Blog: https://aitrainingdatabroker.com/blog/
- Contact: https://aitrainingdatabroker.com/contact/
- Privacy: https://aitrainingdatabroker.com/privacy/
- Terms: https://aitrainingdatabroker.com/terms/
