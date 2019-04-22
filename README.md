# CEP App

Exemplo de aplicação react utilizando algumas das melhores pratica para grandes projetos

## Storybook
O Storybook nos permite visualizar os componentes do projeto

Instale as dependencias:
```
yarn install
```

Executando o Storybook:
```
yarn storybook
```

## Ambiente de desenvolvimento (Node.js)

Instale as dependencias:
```
yarn install
```

Executando o projeto:
```
yarn dev
```

## Rodando local com Docker (docker-compose)

Com o Docker e o Compose instalados em sua máquina execute apenas:
```
yarn dc:up
```

Para ver os logs:
```
yarn dc:tail
```

Para parar o servidor:
```
yarn dc:down
```

\* veja atalhos no arquivo package.json

## Ambiente de produção

Instale as dependencias:
```
yarn install
```

Buildando o projeto:
```
yarn build
```

Executando o projeto:
```
yarn start
```

## TO DO
- Testes funcionais dos elementos
- Teste E2E
- Dependencias externas com React Helmet
