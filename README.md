## Rotas da API

### POST /cars

**Descrição**: Rota para inserção de carros.

**Corpo da Requisição**:
```json
{
    "name": "Car name",
    "description": "Car description",
    "brand": "Car brand",
    "year": 2023,
    "km": 10000
}
```
**Resposta**:
```json
{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name",
    "description": "Car description",
    "brand": "Car brand",
    "year": 2023,
    "km": 10000
}
```
**Erros**:
- Status 400: Corpo da requisição inválido.

### GET /cars

**Descrição**: Rota para listar todos os carros.

**Resposta**:
```json
[
   {
      "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
      "name": "Car name",
      "description": "Car description",
      "brand": "Car brand",
      "year": 2023,
      "km": 10000
   }
]
```

### GET /cars/:id

**Descrição**: Rota para obter informações de um carro específico.

**Resposta**:
```json
{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name",
    "description": "Car description",
    "brand": "Car brand",
    "year": 2023,
    "km": 10000
}
```
**Erros**:
- Status 404: Carro não encontrado.

### PATCH /cars/:id

**Descrição**: Rota para atualização de informações de um carro.

**Corpo da Requisição**:
```json
{
    "name": "Car name updated",
    "description": "Car description updated",
    "brand": "Car brand updated",
    "year": 2022,
    "km": 20000
}
```
**Resposta**:
```json
{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name updated",
    "description": "Car description updated",
    "brand": "Car brand updated",
    "year": 2022,
    "km": 20000
}
```
**Erros**:
- Status 400: Corpo da requisição inválido.
- Status 404: Carro não encontrado.

### DELETE /cars/:id

**Descrição**: Rota para exclusão de um carro.

**Resposta**:
- Status 204, sem corpo de resposta.
**Erros**:
- Status 404: Carro não encontrado.

## Como Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone <URL-do-repositório>
    ```

2. Acesse o diretório do projeto:
    ```bash
    cd nome-do-projeto
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Configure as variáveis de ambiente conforme o `.env.example`.

5. Execute as migrações do banco de dados:
    ```bash
    npm migrate:dev
    
    npm migrate:test
    ```

6. Inicie o servidor:
    ```bash
    npm run dev
    ```

## Testes

Os testes de todas as rotas e serviços foram implementados, cobrindo todos os casos previstos de sucesso e erro. Para executar os testes, utilize o comando:
    ```bash
    npm test:unit
     ```
      ```bash
    npm test:integration
    ```



