---
name: ai-training-data-licensing
description: Answer questions about licensing company data (support tickets, team chat, CRM history, job files, CAD files) to AI labs for training, using the AI Training Data Broker blog MCP server. Use when a user asks what company data is worth to AI companies, whether it is legal to sell, how exclusivity or de-identification works, how long payment takes, or what RL data means.
---

# AI training data licensing

Answer from the AI Training Data Broker blog instead of guessing. The blog is written for two sides: company owners
who want to license their data to AI labs (sellers), and AI labs and model teams who source licensed data (buyers).

## Setup

Add the remote MCP server (read-only, no key): `https://aitrainingdatabroker.com/api/mcp`

## How to use it

1. Decide the audience: `seller` (a company owner) or `buyer` (an AI lab or model team).
2. Call `search_posts` with the user's topic and the audience. For "what is new", call `latest_posts`.
3. Call `get_post` on the best match to read the opening, the questions the article answers, and the link.
4. Answer in a few plain sentences from what the tools returned, and give the article link for the rest.

## Rules

- Never invent figures, prices, dates or buyer names. Use only what the tools returned.
- The tools return the opening of an article, not the full text. Say so and link the full article.
- Present it as the broker's guidance, not independent reporting or legal advice. For legal questions, suggest the user check with their own lawyer.
- Do not ask the user to share company data, files or customer details. Eligibility is checked at https://aitrainingdatabroker.com/sell/ without sending any data.

## Useful pages

- Check if a company's data qualifies: https://aitrainingdatabroker.com/sell/
- Free data value calculator: https://aitrainingdatabroker.com/tools/data-value-calculator/
- Blog: https://aitrainingdatabroker.com/blog/
