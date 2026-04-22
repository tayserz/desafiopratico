# Desafio Prático - API REST Todo List

API REST de lista de tarefas desenvolvida em Node.js com banco de dados MySQL.

## Tecnologias
- Node.js
- Express
- MySQL
- Railway (banco de dados na nuvem)
- Render (deploy da API)

## Links
- API em produção: https://desafiopratico-api.onrender.com
- Frontend em produção: https://desafiopraticofront.vercel.app

## Funcionalidades
- Listar todas as tarefas
- Buscar tarefa por ID
- Criar nova tarefa
- Atualizar tarefa completa (PUT)
- Atualizar campos específicos (PATCH)
- Deletar tarefa

## Arquitetura
O projeto segue a arquitetura em camadas:
- Controller: recebe as requisições HTTP
- Service: lógica de negócio
- Repository: comunicação com o banco de dados

## Como rodar localmente
1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure o banco de dados no arquivo `src/database/connection.js`
4. Rode o servidor: `node src/app.js`
5. Acesse: `http://localhost:3000/tasks`

## Endpoints
- GET /tasks — lista todas as tarefas
- GET /tasks/:id — busca tarefa por ID
- POST /tasks — cria nova tarefa
- PUT /tasks/:id — atualiza tarefa completa
- PATCH /tasks/:id — atualiza campos específicos
- DELETE /tasks/:id — deleta tarefa

## Exemplo de uso
### Criar tarefa
```json
POST /tasks
{
  "title": "Minha tarefa",
  "status": "pendente",
  "category": "estudos"
}
```