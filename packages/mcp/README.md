# aitrainingdatabroker-mcp

The [AI Training Data Broker](https://aitrainingdatabroker.com) blog MCP server, run over stdio. Some desktop clients
only start local MCP servers; this package is that local server. It forwards every request to the public, read-only
server at `https://aitrainingdatabroker.com/api/mcp`. No key, no sign-in, nothing written.

Tools: `latest_posts`, `search_posts`, `get_post`, `search`, `fetch`. Ask how much AI labs pay for company data,
whether it is legal to sell, how de-identification and exclusivity work, or what RL data is.

Add it to a client config (for example Claude Desktop):

```json
{
  "mcpServers": {
    "aitrainingdatabroker": { "command": "npx", "args": ["-y", "aitrainingdatabroker-mcp"] }
  }
}
```

Clients that support remote servers can use the URL directly. Set `AITDB_URL` to point at a different server.
Articles are the broker's guidance, not legal advice.

- Home: https://aitrainingdatabroker.com
- Check if your company's data qualifies: https://aitrainingdatabroker.com/sell/
- Blog: https://aitrainingdatabroker.com/blog/
- Source: https://github.com/aitrainingdatabroker/blog-mcp-server
