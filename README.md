![Integrando seu projeto React com APIs](thumbnail.png)

# Organo

O Organo é aplicação desenvolvida no curso <a href="https://cursos.alura.com.br/course/react-desenvolvendo-javascript" target="_blank">React: desenvolvendo com JavaScript</a>. 
Foi pensado e idealizado para ser o primeiro projeto em contato com o React.

<img src="screencapture.png" alt="Imagem do Organo" width="50%">


## 🔨 Funcionalidades do projeto

Você pode passear <a href="https://cursos.alura.com.br/course/react-desenvolvendo-javascript" target="_blank">no figma</a> para entender a arte conceitual do projeto.

## ✔️ Técnicas e tecnologias utilizadas

Se liga nessa lista de tudo que usaremos nessa formação:

- `React`
- `React Hooks`
- `TypeScript`

E muito mais!

## 🛠️ Abrir e rodar o projeto

Para abrir e rodar o projeto, execute `npm i` para instalar as dependências e `npm start` para inicar o projeto.

Depois, acesse <a href="http://localhost:3000/">http://localhost:3000/</a> no seu navegador.

## Dicas de instalação do Typescript

- Primeiro deve-se começar com um `npm istall` 
- depois o `--save` que serve para salvar no packge.json onde ele controla as dependências
- Seguido de `typescript` que é a biblioteca
- `@types/node` para trazer a tipágem do node
- `@types/react` para trazer a tipágem do react
- `@types/react-dom` para trazer a tipágem do react-dom
- `@types/jest` é uma biblioteca de testes

Comando completo fica assim : `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

- Próximo passo é fazer a configuração do comportamento do typescript com o comando `npx tsc --init`

## Criando a tipagem para o elemento botão

- Primeiro crie uma interface com as propriedades que o elemento botão  deve receber
- No caso ele recebe um `ReactElement`
- Habilite no `tsconfig.json` a propriedade `jsx: "react"` para poder retornar jsx


