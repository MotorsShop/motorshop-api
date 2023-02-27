# **Motorshop API**

## Índice de Conteúdos

- [Instalando Dependências](#instalando-dependências)
- [Endpoints](#endpoints)

## Instalando Dependências

[ Voltar ao Índice de Conteúdos ](#índice-de-conteúdos)

Para iniciar a api é necessário instalar as dependências presentes no package.json, utilize o comando:

```
yarn install
```

**Atenção** é necessário utilizar o `yarn` pois o projeto foi inicializado com esse gerados de pacotes.

Verifique se já possui o gerenciador yarn instalado:

```
yarn --version
```

Caso precise instalar o gerenciador:

```
npm install --global yarn
```

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

Para executar o servidor localmente use:

```
yarn dev
```

Execute as migrations com o comando:

```
npx prisma migrate dev --name init
```

---

## Endpoints

[ Voltar ao Índice de Conteúdos ](#índice-de-conteúdos)

### Índice

**Atenção** as rotas referente ao `usuário` ainda não foram implementadas.

- [User](#1-users)
  - [POST - /users](#11-criação-de-usuário)
  - [GET - /users](#12-listando-todos-os-usuários)
  - [GET - /users/:id](#13-listar-usuário-por-id)
  - [PATCH - /users/:id](#14-atualizando-os-dados-do-usuário)
  - [DELETE - /users/:id](#15-deletar-usuário)
- [Login](#2-login)
  - [POST - /login](#21-login-do-user)
- [Anúncio](#3-anúncio)
  - [POST - /anouncement](#31-criação-de-anúncio)
  - [GET - /anouncement/](#32-lista-todos-os-anúncios)
  - [GET - /anouncement/:id](#33-listar-anúncios-por-id-do-usuário)
  - [PATCH - /anouncement/:id](#34-atualizando-os-dados-do-anúncio)
  - [DELETE - /anouncement/:id](#35-deletar-anúncio)

## 3. **Anúncio**

[ Voltar para os Endpoints ](#endpoints)

O objeto Anuncio é definido como:

| Campo        | Tipo    | Descrição                       |
| ------------ | ------- | ------------------------------- |
| id           | string  | Identificador único do anúncio  |
| title        | string  | Título do anúncio.              |
| description  | string  | Descrição detalhada do anúncio. |
| year         | number  | Ano do veículo.                 |
| km           | number  | Quilometragem do veículo.       |
| price        | number  | Preço do veículo.               |
| vehicle_type | string  | Tipo do veículo(carro/moto).    |
| ad_type      | string  | Tipo de anuncio(venda/leilão).  |
| published    | boolean | Se o anuncio já foi publicado.  |
| sold         | boolean | Se o anuncio já foi vendido.    |
| cover_img    | string  | imagem de capa.                 |
| created      | string  | Data de criação do anuncio.     |

### Endpoints

| Método | Rota           | Descrição                                                   |
| ------ | -------------- | ----------------------------------------------------------- |
| POST   | /announce      | Criação de um anúncio.                                      |
| GET    | /announce      | Lista todos os anúncios.                                    |
| GET    | /announce /:id | Lista um anúncio usando o ID do anúncio como parâmetro.     |
| PATCH  | /announce /:id | Atualiza os dados do anúncio usando seu ID como parâmetro.  |
| DELETE | /announce /:id | Deleta um anúncio através do seu ID passado como parâmetro. |

### 3.1. **Criação de Anúncio**

[ Voltar aos Endpoints ](#endpoints)

### `/anouncement`

### Exemplo de Request:

```
POST /anouncement
Host: https://testeapi-mu.vercel.app/
Authorization: none
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "title": "Bob, the carrão",
  "description": "carro preto 4 portas",
  "year": 2016,
  "km": 10000,
  "price": 50000,
  "vehicle_type": "moto",
  "ad_type": "leilao",
  "published": false,
  "sold": false,
  "cover_img": "SRD",
  "cover_img": "https://th.bing.com/th/id/OIP.6yGP84mJiq5657KIlIYOxQHaEK?pid=ImgDet&rs=1",
  "created": "10-10-2010"
}
```

### Exemplo de Response:

```
201 CREATED
```

```json
{
  "id": 9,
  "title": "Bob, the carrão",
  "year": 2016,
  "km": 10000,
  "price": 50000,
  "description": "carro preto 4 portas",
  "vehicle_type": "moto",
  "ad_type": "leilao",
  "published": false,
  "sold": false,
  "cover_img": "https://th.bing.com/th/id/OIP.6yGP84mJiq5657KIlIYOxQHaEK?pid=ImgDet&rs=1",
  "created": "2023-02-27T06:38:21.537Z"
}
```

### Possíveis Erros:

| Código do Erro | Descrição |
| -------------- | --------- |

### 3.2. **Lista todos os anúncios**

[ Voltar aos Endpoints ](#endpoints)

### `/anouncement`

### Exemplo de Request:

```
GET /anouncement
Host: https://testeapi-mu.vercel.app/
Authorization: none
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": 8,
    "title": "Nissan Frontier",
    "year": 2020,
    "km": 75000,
    "price": 90000,
    "description": "Picape com excelente desempenho off-road.",
    "vehicle_type": "Picape",
    "ad_type": "car",
    "published": true,
    "sold": true,
    "cover_img": "https://cdn.motor1.com/images/mgl/2NN6Mn/s1/nissan-frontier-platinum-2023-teste.webp",
    "created": "2023-02-26T20:07:57.288Z"
  },
  {
    "id": 9,
    "title": "Bob, the carrão",
    "year": 2016,
    "km": 10000,
    "price": 50000,
    "description": "carro preto 4 portas",
    "vehicle_type": "moto",
    "ad_type": "leilao",
    "published": false,
    "sold": false,
    "cover_img": "https://th.bing.com/th/id/OIP.6yGP84mJiq5657KIlIYOxQHaEK?pid=ImgDet&rs=1",
    "created": "2023-02-27T06:38:21.537Z"
  }
]
```

### Possíveis Erros:

| Código do Erro | Descrição |
| -------------- | --------- |

### 3.3. **Listar Anúncios por ID do usuário**

[ Voltar aos Endpoints ](#endpoints)

### `/anouncement/:id`

### Exemplo de Request:

```
GET /anouncement/8
Host: https://testeapi-mu.vercel.app/
Authorization: none
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único do anuncio |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": 8,
  "title": "Nissan Frontier",
  "year": 2020,
  "km": 75000,
  "price": 90000,
  "description": "Picape com excelente desempenho off-road.",
  "vehicle_type": "Picape",
  "ad_type": "car",
  "published": true,
  "sold": true,
  "cover_img": "https://cdn.motor1.com/images/mgl/2NN6Mn/s1/nissan-frontier-platinum-2023-teste.webp",
  "created": "2023-02-26T20:07:57.288Z"
}
```

### Possíveis Erros:

| Código do Erro | Descrição |
| -------------- | --------- |

### 3.4. **Atualizando os dados do anúncio**

[ Voltar aos Endpoints ](#endpoints)

### `/anouncement/:id`

O usuário que estiver devidamente autorizado (deve ser admin e ter token válido), poderá fazer atualizações nos dados de seus anúncios.

### Exemplo de Request:

```
PATCH /anouncement/9
Host: https://testeapi-mu.vercel.app/
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único do anúncio |

### Corpo da Requisição:

```json
{
  "title": "Bob, o carrão"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": 9,
  "title": "Bob, o carrão",
  "year": 2016,
  "km": 10000,
  "price": 50000,
  "description": "carro preto 4 portas",
  "vehicle_type": "moto",
  "ad_type": "leilao",
  "published": false,
  "sold": false,
  "cover_img": "https://th.bing.com/th/id/OIP.6yGP84mJiq5657KIlIYOxQHaEK?pid=ImgDet&rs=1",
  "created": "2023-02-27T06:48:10.054Z"
}
```

### Possíveis Erros:

| Código do Erro | Descrição |
| -------------- | --------- |

### 3.5. **Deletar Anúncio**

[ Voltar aos Endpoints ](#endpoints)

### `/anouncement/:id`

### Exemplo de Request:

```
PATCH /anouncement/9
Host: https://testeapi-mu.vercel.app/
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único do anúncio |

### Corpo da Requisição:

```json
vazio
```

### Exemplo de Response:

```
204 NOT CONTENT
```

```json
vazio
```

### Possíveis Erros:

| Código do Erro | Descrição |
| -------------- | --------- |
