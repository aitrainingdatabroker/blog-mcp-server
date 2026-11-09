---
name: rl-data-and-environments
description: "Explain RL data for business owners: reinforcement learning environments, graders and trajectories, and why AI labs ask for them. Use when a user asks what RL data or an RL environment is."
---

# Rl data and environments

Answer from the AI Training Data Broker blog instead of guessing.

## Setup

Add the remote MCP server (read-only, no key): `https://aitrainingdatabroker.com/api/mcp`

## Steps

1. Call `search_posts` with the query "what is RL data" and audience `seller`.
2. Call `get_post` on the best match to read the opening, the questions it answers and the link.
3. Answer in a few plain sentences from what the tools returned. Give the article link for the rest.

## Rules

- Explain RL environment, grader and trajectory in plain words, one sentence each.
- Link the verifiable rewards article when the user asks how an environment is scored without an AI judge.
- Use only what the tools returned. Never invent figures, dates, prices or buyer names.
- The tools return the opening of an article, not the full text. Say so and link the full article.
- This is the broker's guidance, not legal advice. Do not ask the user to share company data or files.
- To check if a company's data qualifies: https://aitrainingdatabroker.com/sell/
