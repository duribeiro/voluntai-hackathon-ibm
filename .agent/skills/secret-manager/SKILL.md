---
name: secret-manager
description: "Varrre o codebase em busca de credenciais expostas (API Keys, Tokens, Passwords) e as organiza em arquivos .env categorizados por serviço. Use quando precisar: escanear segredos, corrigir chaves expostas, organizar arquivos env, mover credenciais para env, limpar o código de segredos hardcoded."
---

# 🔐 Secret Manager

This skill automates the detection and organization of secrets in the project, ensuring no credentials remain exposed in the source code and that `.env` files are properly categorized.

## Operational Flow

1.  **Scan**: The agent scans the codebase for credential patterns (long random strings, variable names like `API_KEY`, `TOKEN`, etc.).
2.  **Classification**: Based on the context (variable prefix, surrounding comments, or file path), the agent determines the appropriate category (e.g., `ibm`, `supabase`, `openai`).
3.  **Confirmation**: The agent lists the findings and asks the user which ones should be moved and what the target file name should be (default: `{service_name}.env`).
4.  **Organization**: Move credentials to their respective files:
    -   `{service_name}.env`: Specific to each external service found.
    -   `.env`: Generic or global environment variables.
5.  **Cleanup**: Update source code to reference environment variables or remove the hardcoded value according to instructions.

## 🛠️ Tools

### Scan Script
The script `./scripts/secret_tool.py` performs heuristic searches.
Usage: `python ./scripts/secret_tool.py scan`

### Organization Script
Usage: `python ./scripts/secret_tool.py organize --target {filename}.env --var NAME=VALUE`

## When to Use

- Whenever exposed keys are suspected.
- When adding new external services to the project.
- To refactor a monolithic `.env` into modular, service-specific files.

## Output

All changes to `.env` files and source code must be summarized at the end.
Ensure all generated `{service}.env` files are covered by `.gitignore` (usually via `**/*.env`).
