---
name: prepare-for-a-data-broker-call
description: "Give a checklist of what a company owner should have ready before talking to a data broker about licensing data to AI labs: counts, years of records and one complete sample. Use when a user is about to sell or license company data and asks how to prepare."
---

# Prepare for a data broker call

Answer from the AI Training Data Broker blog instead of guessing.

## Setup

Add the remote MCP server (read-only, no key): `https://aitrainingdatabroker.com/api/mcp`

## Steps

1. Call `search_posts` with the query "what to have ready before you talk to a data broker" and audience `seller`.
2. Call `get_post` on the best match to read the opening, the questions it answers and the link.
3. Answer in a few plain sentences from what the tools returned. Give the article link for the rest.

## Rules

- Give the checklist from the article: what to count, how to describe the data and why one complete sample helps.
- Do not ask the user to paste data or customer details into the chat. Describe, count and stop there.
- Use only what the tools returned. Never invent figures, dates, prices or buyer names.
- The tools return the opening of an article, not the full text. Say so and link the full article.
- This is the broker's guidance, not legal advice. Do not ask the user to share company data or files.
- To check if a company's data qualifies: https://aitrainingdatabroker.com/sell/
