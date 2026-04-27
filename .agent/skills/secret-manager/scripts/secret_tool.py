#!/usr/bin/env python3
import os
import re
import sys
import argparse

# Padrões comuns de segredos
SECRET_PATTERNS = [
    r'(?i)(api_key|secret|password|token|access_token|auth_token)[\s]*[:=][\s]*["\']([a-zA-Z0-9_\-\.]{16,})["\']',
    r'["\'](sk-[a-zA-Z0-9]{20,})["\']', # OpenAI
    r'["\'](xox[pb]-[a-zA-Z0-9]{10,})["\']', # Slack
    r'["\'](ghp_[a-zA-Z0-9]{20,})["\']', # GitHub
    r'["\'](AIza[a-zA-Z0-9_\-]{20,})["\']', # Google
]

EXCLUDE_DIRS = ['node_modules', '.git', '.next', '.gemini', 'assets']
EXCLUDE_FILES = ['.env', 'package-lock.json', 'yarn.lock']

def scan_files(root_dir):
    found_secrets = []
    for root, dirs, files in os.walk(root_dir):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for file in files:
            if file in EXCLUDE_FILES or any(file.endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.pdf', '.zip']):
                continue
            
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    for pattern in SECRET_PATTERNS:
                        matches = re.finditer(pattern, content)
                        for match in matches:
                            found_secrets.append({
                                'file': path,
                                'line': content.count('\n', 0, match.start()) + 1,
                                'key': match.group(1),
                                'value': match.group(2)
                            })
            except Exception as e:
                pass
    return found_secrets

def main():
    parser = argparse.ArgumentParser(description="Secret Management Tool")
    subparsers = parser.add_subparsers(dest="command")
    
    scan_parser = subparsers.add_parser("scan", help="Scan for secrets")
    
    args = parser.parse_args()
    
    if args.command == "scan":
        print(f"Buscando segredos em {os.getcwd()}...")
        secrets = scan_files(".")
        if not secrets:
            print("Nenhum segredo óbvio encontrado.")
        else:
            print(f"Encontrado {len(secrets)} segredos potenciais:")
            for s in secrets:
                print(f"- {s['file']}:{s['line']} | {s['key']} = {'*' * len(s['value'])}")
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
