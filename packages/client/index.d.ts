export interface ClientOptions {
  /** MCP server URL. Default https://aitrainingdatabroker.com/api/mcp */
  url?: string
  fetch?: typeof fetch
}
export interface ListOptions {
  audience?: 'seller' | 'buyer'
  /** 1 to 10 */
  limit?: number
}
export interface Tool {
  name: string
  title?: string
  description: string
  inputSchema: unknown
}
export class BlogClient {
  constructor(options?: ClientOptions)
  call(name: string, args?: Record<string, unknown>): Promise<string>
  listTools(): Promise<Tool[]>
  latestPosts(options?: ListOptions): Promise<string>
  searchPosts(query: string, options?: ListOptions): Promise<string>
  getPost(slugOrUrl: string): Promise<string>
}
export function createClient(options?: ClientOptions): BlogClient
