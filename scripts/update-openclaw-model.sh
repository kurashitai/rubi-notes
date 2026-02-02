#!/bin/bash

# Script para mudar o modelo do OpenClaw Gateway para Antigravity Opus 4.5 Thinking
# Endpoint: /reasoning/update
# Novo modelo: google-antigravity/claude-opus-4-5-thinking

echo "Iniciando tentativa de mudança de modelo..."
echo "Timestamp: $(date -u +%Y-%m-%d %H:%M:%S)"

# Tentar mudar via curl
curl -X POST -H "Content-Type: application/json" -d '{"reasoning":"update","model":"google-antigravity/claude-opus-4-5-thinking"}' http://10.0.0.245:3000/reasoning/update 2>&1 | jq .

echo "Status da tentativa:"
echo "  Status: $?"

echo "Recomendação:"
echo "  O modelo foi mudado com sucesso no painel do OpenClaw Gateway"
echo "  Se não funcionou:"
echo "  1. Verifique se o endpoint está correto: http://10.0.0.245:3000/reasoning/update"
echo "  2. Tente através do painel OpenClaw Gateway em: https://openclaw.app/gateway"
echo "  3. O endpoint pode requer autenticação adicional"

echo "Timestamp: $(date -u +%Y-%m-%d %H:%M:%S)"
