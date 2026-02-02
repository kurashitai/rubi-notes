#!/bin/bash

echo "Iniciando tentativa de mudança de modelo..."
date --iso-seconds
echo "Status da tentativa:"
echo "  1. Verificar autenticação no OpenClaw Gateway"
echo ""
curl -s -w "\nHTTP Status: %{http_code}" -X POST "https://openclaw.app/gateway/api/v2/model/current" \
  -H "Content-Type: application/json" \
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0 Safari/537.36" \
  --cookie "OPENCLAW_SESSION=undefined" \
  --cookie "OPENCLAW_AUTHORIZATION=undefined" \
  --max-time 10 \
  https://openclaw.app/gateway/api/v2/model/current 2>&1 | grep -i "reasoning\|model\|unauthorized\|login_required"

echo ""
echo "  2. Verificar status da autenticação"
echo ""

if echo "$AUTH_RESPONSE" | grep -q "login_required"; then
  echo "ATENÇÃO: Você precisa fazer login no OpenClaw Gateway antes de mudar o modelo"
  echo "  1. Acesse: https://openclaw.app/gateway"
  echo "  2. Faça login com suas credenciais"
  echo ""
else
  echo "  3. Tentar mudar modelo (mesmo sem login, pode funcionar se você tiver autenticação passiva)"
  echo ""
fi

echo ""
echo "Status final:"
echo "  1. Autenticação: $(echo "$AUTH_RESPONSE" | grep -q "login_required" && echo "NECESSÁRIA" || echo "AUTENTICADO")"
echo "  2. Status da tentativa: Em processamento..."
echo ""
echo "Recomendação:"
echo "  1. Vá para o painel OpenClaw Gateway e faça login"
echo "  2. Se já tiver autenticação, prossiga para a próxima etapa"
echo ""
echo "FIM DA TENTATIVA"
echo "=================================================="
