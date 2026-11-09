---
name: security-data-for-ai-labs
description: "Explain what a security company can license to AI labs: alerts, investigation write-ups, offensive security environments, black-box and white-box tasks, and CWE references. Use when a user works in cybersecurity and asks what AI labs want."
---

# Security data for ai labs

Answer from the AI Training Data Broker blog instead of guessing.

## Setup

Add the remote MCP server (read-only, no key): `https://aitrainingdatabroker.com/api/mcp`

## Steps

1. Call `search_posts` with the query "security company alerts write-ups AI red teaming CWE" and audience `seller`.
2. Call `get_post` on the best match to read the opening, the questions it answers and the link.
3. Answer in a few plain sentences from what the tools returned. Give the article link for the rest.

## Rules

- Use the security articles: alerts and write-ups, AI red teaming environments, black-box versus white-box tasks, and what a CWE is.
- Say that client data belongs to the client and must be removed before anything is licensed.
- Use only what the tools returned. Never invent figures, dates, prices or buyer names.
- The tools return the opening of an article, not the full text. Say so and link the full article.
- This is the broker's guidance, not legal advice. Do not ask the user to share company data or files.
- To check if a company's data qualifies: https://aitrainingdatabroker.com/sell/
