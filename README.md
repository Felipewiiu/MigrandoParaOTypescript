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

## 💡 Dicas de instalação do Typescript

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
- Habilite no `tsconfig.json` a propriedade `jsx: "react"` para poder reconhecer o jsx
- Para poder fazer o reconhecimento  de jsx sem precisar importar o `react`, habilite o `jsx: "react"` para `jsx: "react-jsx"`

Exemplo:

```
import { ReactElement } from 'react'
import './Botao.css'
import React from 'react'

interface BotaoProps {
    children: ReactElement
}

const Botao = (props: BotaoProps) => {
    return (<button className='botao'>
        {props.children}
    </button>)
}

export default Botao
```

## Eventos precisam ser definidos no argumento da função

É preciso dizer o que uma função deve receber como a chave e valor, olhe este exemplo:

```
const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        props.aoAlterado(evento.target.value)
    }
```


## Compartilhamento de interfaces

Quando se define tipos podemos se deparar com um tipo especial que é o caso de um array de objetos. A maneira de tipar esse array é criando uma nove interface e compartilhar ela com quem precisar usar. Olhe este exemplo:

```
export interface IColaborador{
    nome: string
    cargo: string
    imagem: string
}
```

## Inferências de tipos generics

????????//

## Ligando e desligando regras do TS

Neste projeto foi ligado as seguintes regras:

- "noUnusedLocals": true *Esse comando avisa quando uma variável é criada mas não atribuida*
- "strict": true, 
- "jsx": "react-jsx", 










