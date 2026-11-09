// Client for the AI Training Data Broker blog MCP server (public, read-only, no key).
const DEFAULT_URL = 'https://aitrainingdatabroker.com/api/mcp'

export class BlogClient {
  constructor({ url = DEFAULT_URL, fetch: f = globalThis.fetch } = {}) {
    this.url = url
    this.fetch = f
    this.n = 0
  }

  async rpc(method, params) {
    const res = await this.fetch(this.url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json, text/event-stream' },
      body: JSON.stringify({ jsonrpc: '2.0', id: ++this.n, method, params }),
    })
    if (!res.ok) throw new Error(`AI Training Data Broker server answered ${res.status}`)
    const j = await res.json()
    if (j.error) throw new Error(j.error.message || 'server error')
    return j.result
  }

  async call(name, args = {}) {
    const r = await this.rpc('tools/call', { name, arguments: args })
    return (r.content || []).map((c) => c.text).join('\n')
  }

  async listTools() {
    return (await this.rpc('tools/list', {})).tools
  }

  /** Newest articles. audience: 'seller' | 'buyer'. */
  latestPosts({ audience, limit } = {}) {
    return this.call('latest_posts', { ...(audience && { audience }), ...(limit && { limit }) })
  }

  /** Word match on title, description and body. */
  searchPosts(query, { audience, limit } = {}) {
    return this.call('search_posts', { query, ...(audience && { audience }), ...(limit && { limit }) })
  }

  /** One article by slug or URL: the opening, its FAQ questions and a link to the full page. */
  getPost(slugOrUrl) {
    return this.call('get_post', { slug: slugOrUrl })
  }
}

export const createClient = (options) => new BlogClient(options)
