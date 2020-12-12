# Starting a project

#   Project Name : eGC (Gestor de Contas Eletrônico)

#   Estrutura básica de todas as aplicações:

##  1  [] Criar o Servidor Node Express
##  2  [] Estruturar o projeto.
##  3  [] CRUD Usuário.
##  4  [] Trabalhar com Banco de dados.
##  5  [] Trabalhar com Autenticação JWT.

# Estrutura Específicas dessa aplicação:

##  1  [] CRUD Contas
##  2  [] CRUD Compras
##  3  [] CRUD Comprador
##  4  [] Validações
##  5  [] Exceções


#   Bibliotecas do Project

##  Express         (yarn add express)


#   Bibliotecas de Tipos && Development

##  Typescript      (yarn add typescript -D)
##  @Types/Express  (yarn add @types/express -D)
##  Ts-Node-Dev     (yarn add ts-node-dev -D)

#   Bibliotecas de Padronização de projeto (https://www.notion.so/Padr-es-de-projeto-com-ESLint-Prettier-e-EditorConfig-0b57b47a24724c859c0cf226aa0cc3a7)

##  EsLint              (yarn add eslint@6.8.0 -D)
##  EsLint/TS           (yarn add eslint-import-resolver-typescript -D)
##  EsLint/Plugins/TS   (yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest -D)
##  Prettier            (yarn add prettier eslint-config-prettier eslint-plugin-prettier -D)

#   Passos Criação do Projeto

##  Terminal


    yarn init -y
    yarn add express
    yarn add typescript -D
    yarn tsc --init (Cria o arquivo de configuração do TypeScript).

#   Configuração do padrão de projetos

##  1°  Gere o arquivo .editorconfig (Faça a seguinte  configuração, como mostra em : https://www.notion.so/EditorConfig-5f494ae4b47248c1b16681ff74d6766c)
##  2°  Faça a configuração conforme mostra no (https://www.notion.so/ESLint-7e455a7ac78b424892329ee064feaf99#c409582eaf2d4407af000437ac25082a).
##  3°
