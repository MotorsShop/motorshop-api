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
  - [GET - /users](#12-lista-todos-os-usuários)
  - [GET - /users/:id](#13-listar-usuário-por-id)
  - [PATCH - /users/:id](#14-atualizando-os-dados-do-usuário)
  - [DELETE - /users/:id](#15-deletar-usuário)
- [Login](#2-login)
  - [POST - /login](#21-login-de-usuário)
- [Anúncio](#3-anúncio)
  - [POST - /anouncement](#31-criação-de-anúncio)
  - [GET - /anouncement/](#32-lista-todos-os-anúncios)
  - [GET - /anouncement/:id](#33-listar-anúncios-por-id-do-usuário)
  - [PATCH - /anouncement/:id](#34-atualizando-os-dados-do-anúncio)
  - [DELETE - /anouncement/:id](#35-deletar-anúncio)
- [Comentários](#4-comentários)
  - [POST - /comments](#41-criação-de-comentário)
  - [GET - /comments](#42-listando-comentários)
  - [GET - /comments/anouncement/:id](#43-listando-comentários-de-um-anuncio)
  - [GET - /comments/:id](#44-listando-um-certo-comentário)
  - [PATCH - /comments/:id](#45-atualizando-os-dados-do-comentário)
  - [DELETE - /comments/:id](#46-deletar-comentário)

  ## 1. **Users**

[ Voltar para os Endpoints ](#endpoints)

O objeto User é definido como:

| Campo            | Tipo   | Descrição                                        |
| ---------------- | ------ | ------------------------------------------------ |
| id               | string | Identificador único do usuário.                  |
| email            | string | Email do usuário.                                |
| name             | string | Nome do usuário.                                 |
| cpf              | number | CPF do usuário.                                  |
| phone            | number | Número de celular do usuário.                    |
| description      | number | Descrição do usuário.                            |
| type             | string | Tipo do usuário(anunciante, admin ou comprador). |
| password         | string | Senha do usuário.                                |
| confirm_password | string | Confirmação de senha.                            |
| date_of_birth    | string | Data de nascimento do usuario                    |
| cover_img        | string | imagem de capa.                                  |
| created          | string | Data de criação do anuncio.                      |

### Endpoints

| Método | Rota       | Descrição                                                   |
| ------ | ---------- | ----------------------------------------------------------- |
| POST   | /user      | Criação de um usuário.                                      |
| GET    | /user      | Lista todos os usuários.                                    |
| GET    | /user /:id | Lista um usuário usando o ID do usuário como parâmetro.     |
| PATCH  | /user /:id | Atualiza os dados do usuário usando seu ID como parâmetro.  |
| DELETE | /user /:id | Deleta um usuário através do seu ID passado como parâmetro. |

### 1.1. **Criação de Usuário**

[ Voltar aos Endpoints ](#endpoints)

### `/user`

### Exemplo de Request:

```
POST /user
Host: https://testeapi-mu.vercel.app/
Authorization: none
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "anunciante1@gmail.com",
  "name": "anunciante",
  "cpf": "25433476213",
  "phone": "69989587748",
  "description": "anunciante",
  "type": "anunciante",
  "password": "1234",
  "confirm_password": "1234",
  "date_of_birth": "23/01/2004"
}
```

### Exemplo de Response:

```
201 CREATED
```

```json
{
  "id": "88748247-3036-446e-952d-687fd6b2aea5",
  "name": "anunciante",
  "email": "anunciante2@gmail.com",
  "cpf": "25433476217",
  "phone": "69989587748",
  "date_of_birth": "23/01/2004",
  "description": "anunciante",
  "type": "anunciante",
  "password": "$2a$10$dU/N51xZS7dvvx5lo.uAn.hDC.KM3xBZSVay921qtEWa3RGUldzfe",
  "anouncements": []
}
```

### Possíveis Erros:

| Código do Erro | Descrição |
| -------------- | --------- |

### 1.2. **Lista todos os usuários**

[ Voltar aos Endpoints ](#endpoints)

### `/user`

### Exemplo de Request:

```
GET /user
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
    "id": "c8e3dc9a-df46-4296-a937-9759d3573719",
    "name": "O vendedor",
    "email": "vendedor@hotmail.com",
    "cpf": "899.999.999",
    "phone": "8168-6666",
    "date_of_birth": "2020-20-10",
    "description": "Carros gerais",
    "type": "anunciante",
    "password": "$2a$10$ixnyRsbULXwaUBkwvgKVpe8Y86lzXsA.nDcsIMZxvI4gY.Eq6oF5C",
    "anouncements": [],
    "comments": []
  },
  {
    "id": "9abd2374-7c4a-4a48-bf7d-733c756c2d90",
    "name": "Naiane",
    "email": "naiane@hotmail.com",
    "cpf": "899.999.991",
    "phone": "8168-6666",
    "date_of_birth": "2020-20-10",
    "description": "Carros gerais",
    "type": "anunciante",
    "password": "$2a$10$1xuaIKKADUdteOBy5VV3BuSBnmwZtAQ4Dax6V4XlqNtIXb9BNxAoG",
    "anouncements": [],
    "comments": []
  }
]
```

### Possíveis Erros:

| Código do Erro | Descrição |
| -------------- | --------- |

### 1.3. **Listar usuário por ID**

[ Voltar aos Endpoints ](#endpoints)

### `/user/:id`

### Exemplo de Request:

```
GET /user/e5e05eb9-3c7c-4be1-9e09-5bf47524561b
Host: https://testeapi-mu.vercel.app/
Authorization: none
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único do usuario |

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
  "id": "e5e05eb9-3c7c-4be1-9e09-5bf47524561b",
  "name": "anunciante",
  "email": "anunciante@gmail.com",
  "cpf": "25433476213",
  "phone": "69989587748",
  "date_of_birth": "23/01/2004",
  "description": "anunciante",
  "type": "anunciante",
  "password": "$2a$10$2bqtsNXEmmf8I8Us6DW2QO.EnXO5LoMnUB2CUcKk.Mqi5Mnn3MlZe",
  "anouncements": [],
  "comments": []
}
```

### Possíveis Erros:

| Código do Erro | Descrição |
| -------------- | --------- |

### 1.4. **Atualizando os dados do usuário**

[ Voltar aos Endpoints ](#endpoints)

### `/user/:id`

O usuário que estiver devidamente autorizado (deve ser admin e ter token válido), poderá fazer atualizações nos dados de seu usuário.

### Exemplo de Request:

```
PATCH /user/e5e05eb9-3c7c-4be1-9e09-5bf47524561b
Host: https://testeapi-mu.vercel.app/
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único do usuário |

### Corpo da Requisição:

```json
{
  "name": "Bob"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "e5e05eb9-3c7c-4be1-9e09-5bf47524561b",
  "name": "Bob",
  "email": "anunciante@gmail.com",
  "cpf": "25433476213",
  "phone": "69989587748",
  "date_of_birth": "23/01/2004",
  "description": "anunciante",
  "type": "anunciante",
  "password": "$2a$10$2bqtsNXEmmf8I8Us6DW2QO.EnXO5LoMnUB2CUcKk.Mqi5Mnn3MlZe",
  "anouncements": [],
  "comments": []
}
```

### Possíveis Erros:

| Código do Erro | Descrição |
| -------------- | --------- |

### 1.5. **Deletar Usuário**

[ Voltar aos Endpoints ](#endpoints)

### `/anouncement/:id`

### Exemplo de Request:

```
DELETE /user/e5e05eb9-3c7c-4be1-9e09-5bf47524561b
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

## 2. **Login**

O objeto de usuário para fazer login é definido como:

| Campo    | Tipo   | Descrição         |
| -------- | ------ | ----------------- |
| email    | string | Email do usuário. |
| password | string | Senha do usuário. |

### Endpoints

| Método | Rota   | Descrição         |
| ------ | ------ | ----------------- |
| POST   | /login | Login do usuario. |

[ Voltar para os Endpoints ](#endpoints)

### 2.1. **Login de usuário**

[ Voltar aos Endpoints ](#endpoints)

### `/login`

### Exemplo de Request:

```
POST /login
Host: https://testeapi-mu.vercel.app/
Authorization: none
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "anunciante@gmail.com",
  "password": "1234"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "user": {
    "id": "e5e05eb9-3c7c-4be1-9e09-5bf47524561b",
    "name": "anunciante",
    "email": "anunciante@gmail.com",
    "cpf": "25433476213",
    "phone": "69989587748",
    "date_of_birth": "23/01/2004",
    "description": "anunciante",
    "type": "anunciante",
    "password": "$2a$10$2bqtsNXEmmf8I8Us6DW2QO.EnXO5LoMnUB2CUcKk.Mqi5Mnn3MlZe",
    "anouncements": [],
    "comments": []
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudW5jaWFudGVAZ21haWwuY29tIiwiaWQiOiJlNWUwNWViOS0zYzdjLTRiZTEtOWUwOS01YmY0NzUyNDU2MWIiLCJ0eXBlIjoiYW51bmNpYW50ZSIsImlhdCI6MTY3ODQ0OTg0MiwiZXhwIjoxNjc4NTAzODQyLCJzdWIiOiJlNWUwNWViOS0zYzdjLTRiZTEtOWUwOS01YmY0NzUyNDU2MWIifQ.v6tv4T2rD8psRGOycWxKTjK3Ay9a_X-3RHy4tmgPPV8"
}
```

### Possíveis Erros:

| Código do Erro | Descrição |
| -------------- | --------- |

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

## 4. **Comentários**

[ Voltar para os Endpoints ](#endpoints)

O objeto Comentário é definido como:

| Campo         | Tipo   | Descrição                          |
| ------------- | ------ | ---------------------------------- |
| id            | string | Identificador único do comentário. |
| comment       | string | Comentário.                        |
| authorId      | string | Identificador único do autor.      |
| anouncementId | number | Identificador único do anúncio.    |
| created       | number | Data de criação do comentário.     |

### Endpoints

| Método | Rota                      | Descrição                                                      |
| ------ | ------------------------- | -------------------------------------------------------------- |
| POST   | /comment /:id             | Criação de um comentário.                                      |
| GET    | /comment                  | Lista todos os comentários.                                    |
| GET    | /comment/anouncement /:id | Lista um comentário de um certo anúncio.                       |
| GET    | /comment /:id             | Lista um comentário usando o ID do comentário como parâmetro.  |
| PATCH  | /comment /:id             | Atualiza os dados do comentário usando seu ID como parâmetro.  |
| DELETE | /comment /:id             | Deleta um comentário através do seu ID passado como parâmetro. |

### 4.1. **Criação de comentário**

[ Voltar aos Endpoints ](#endpoints)

### `/comment/:id`

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                         |
| --------- | ------ | --------------------------------- |
| id        | string | Identificador único do anunciante |

### Exemplo de Request:

```
POST /comment/229a120f-68be-4256-8b95-2085722e8f5e
Host: https://testeapi-mu.vercel.app/
Authorization: none
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "comment": "Esse carro oferece um bom custo-benefício, com um conjunto de equipamentos e tecnologias que o colocam à frente de muitos concorrentes em sua faixa de preço. Além disso, seu design moderno e arrojado tem agradado muitos consumidores2.",
  "authorId": "9168fffb-1060-4f59-b10b-a0a4d76d0b5d"
}
```

### Exemplo de Response:

```
201 CREATED
```

```json
{
  "id": "a70c87ba-b356-4f82-a249-2912581d21e2",
  "comment": "alterado Esse carro dafadfa d oferece um bom custo-benefício, com um conjunto de equipamentos e tecnologias que o colocam à frente de muitos concorrentes em sua faixa de preço. Além disso, seu design moderno e arrojado tem agradado muitos consumidores.",
  "authorId": "229a120f-68be-4256-8b95-2085722e8f5e",
  "created": "2023-03-08T12:51:57.375Z",
  "anouncementId": "819778e5-db69-43bf-8e3b-3dc677789616"
}
```

| Código do Erro | Descrição |
| -------------- | --------- |

### 4.2. **Listando comentários**

[ Voltar aos Endpoints ](#endpoints)

### `/comment`

### Corpo da Requisição:

```json
  VAZIO
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "321c87ba-b356-4f82-a249-2912581d1e2",
  "comment": "alterado Esse carro dafadfa d oferece um bom custo-benefício, com um conjunto de equipamentos e tecnologias que o colocam à frente de muitos concorrentes em sua faixa de preço. Além disso, seu design moderno e arrojado tem agradado muitos consumidores.",
  "authorId": "229a120f-68be-4256-8b95-2085722e8f5e",
  "created": "2023-03-08T12:51:57.375Z",
  "anouncementId": "819778e5-db69-43bf-8e3b-3dc677789616"
},
{
  "id": "a70c87ba-b356-4f82-a249-2912581d29b6",
  "comment": "alterado Esse carro dafadfa d oferece um bom custo-benefício, com um conjunto de equipamentos e tecnologias que o colocam à frente de muitos concorrentes em sua faixa de preço. Além disso, seu design moderno e arrojado tem agradado muitos consumidores.",
  "authorId": "229a120f-68be-4256-8b95-2085722e8f5e",
  "created": "2023-03-08T12:51:57.375Z",
  "anouncementId": "819778e5-db69-43bf-8e3b-3dc677789616"
}
```

| Código do Erro | Descrição |
| -------------- | --------- |

### 4.3. **Listando comentários de um anuncio**

[ Voltar aos Endpoints ](#endpoints)

### `/comment/anouncements/:id`

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único do anuncio |

### Corpo da Requisição:

```json
  VAZIO
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "321c87ba-b356-4f82-a249-2912581d1e2",
  "comment": "alterado Esse carro dafadfa d oferece um bom custo-benefício, com um conjunto de equipamentos e tecnologias que o colocam à frente de muitos concorrentes em sua faixa de preço. Além disso, seu design moderno e arrojado tem agradado muitos consumidores.",
  "authorId": "229a120f-68be-4256-8b95-2085722e8f5e",
  "created": "2023-03-08T12:51:57.375Z",
  "anouncementId": "819778e5-db69-43bf-8e3b-3dc677789616"
},
{
  "id": "a70c87ba-b356-4f82-a249-2912581d29b6",
  "comment": "alterado Esse carro dafadfa d oferece um bom custo-benefício, com um conjunto de equipamentos e tecnologias que o colocam à frente de muitos concorrentes em sua faixa de preço. Além disso, seu design moderno e arrojado tem agradado muitos consumidores.",
  "authorId": "229a120f-68be-4256-8b95-2085722e8f5e",
  "created": "2023-03-08T12:51:57.375Z",
  "anouncementId": "819778e5-db69-43bf-8e3b-3dc677789616"
}
```

| Código do Erro | Descrição |
| -------------- | --------- |

### 4.4. **Listando um certo comentário**

[ Voltar aos Endpoints ](#endpoints)

### `/comment/:id`

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                         |
| --------- | ------ | --------------------------------- |
| id        | string | Identificador único do comentario |

### Corpo da Requisição:

```json
  VAZIO
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "321c87ba-b356-4f82-a249-2912581d1e2",
  "comment": "alterado Esse carro dafadfa d oferece um bom custo-benefício, com um conjunto de equipamentos e tecnologias que o colocam à frente de muitos concorrentes em sua faixa de preço. Além disso, seu design moderno e arrojado tem agradado muitos consumidores.",
  "authorId": "229a120f-68be-4256-8b95-2085722e8f5e",
  "created": "2023-03-08T12:51:57.375Z",
  "anouncementId": "819778e5-db69-43bf-8e3b-3dc677789616"
},
```

| Código do Erro | Descrição |
| -------------- | --------- |

### 4.5. **Atualizando os dados do comentário**

[ Voltar aos Endpoints ](#endpoints)

### `/comment/:id`

O usuário que estiver devidamente autorizado (deve ser admin e ter token válido), poderá fazer atualizações nos dados de seus comentários.

### Exemplo de Request:

```
PATCH /comment/321c87ba-b356-4f82-a249-2912581d1e2
Host: https://testeapi-mu.vercel.app/
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                         |
| --------- | ------ | --------------------------------- |
| id        | string | Identificador único do comentario |

### Corpo da Requisição:

```json
{
  "comment": "Comentario atualizado"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "321c87ba-b356-4f82-a249-2912581d1e2",
  "comment": "Comentario atualizado",
  "authorId": "229a120f-68be-4256-8b95-2085722e8f5e",
  "created": "2023-03-08T12:51:57.375Z",
  "anouncementId": "819778e5-db69-43bf-8e3b-3dc677789616"
},
```

### Possíveis Erros:

| Código do Erro | Descrição |
| -------------- | --------- |

### 4.6. **Deletar Comentário**

[ Voltar aos Endpoints ](#endpoints)

### `/comment/:id`

O usuário que estiver devidamente autorizado (deve ser admin e ter token válido), poderá deletar os seus comentários.

### Exemplo de Request:

```
DELETE /comment/321c87ba-b356-4f82-a249-2912581d1e2
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

## Autores

- [Ely Muniz](https://github.com/ElyMuniz)

- [Naiane Reis](https://github.com/NaianeReis27)

- [Erika Fábio](https://github.com/erikafabio)

- [José Henrique](https://github.com/zimwolfgang7k)

- [Julio Caputo](https://github.com/juliocaputo1)
