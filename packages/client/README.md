# @aitrainingdatabroker/client

Zero-dependency JavaScript client (with TypeScript types) for the public, read-only blog MCP server of
[AI Training Data Broker](https://aitrainingdatabroker.com). Use it in an agent or app that needs answers on
licensing company data to AI labs: pricing, legality, de-identification, exclusivity, RL data.

```js
import { createClient } from '@aitrainingdatabroker/client'

const blog = createClient()
console.log(await blog.searchPosts('de-identification', { audience: 'seller', limit: 3 }))
console.log(await blog.latestPosts({ audience: 'buyer' }))
console.log(await blog.getPost('is-it-legal-to-sell-company-data-to-ai-labs'))
```

Each call returns text: a summary or the opening of an article with a link to the full page. Node 18 or newer (uses
`fetch`). No key, nothing written. Articles are the broker's guidance, not legal advice.

- Home: https://aitrainingdatabroker.com
- Check if your company's data qualifies: https://aitrainingdatabroker.com/sell/
- Blog: https://aitrainingdatabroker.com/blog/
- Source: https://github.com/aitrainingdatabroker/blog-mcp-server
