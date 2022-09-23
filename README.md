# ![rocket](https://user-images.githubusercontent.com/45273884/192048729-f2052e29-739a-43d0-9617-a25a523bca30.svg) todo

![firefox_H7psbaPaak](https://user-images.githubusercontent.com/45273884/192048763-03a5bc7d-b420-49ec-be6d-32ba78b4232a.gif)

## Descrição

Este é todo, você pode acessá-lo por este [link](https://masas-todo-app.vercel.app/), ele é um projeto desafio feito após finalizar o primeiro módulo do curso Ignite React da Rocketseat visando usar, fixar e avaliar todos os conhecimentos do primeiro módulo, a função dessa aplicação é permitir ao usuário adicionar, marcar como concluído e remover "todos", uma lista de tarefas que deseje concluir e ter uma lista com seu progresso.

### Como o que foi pedido para o desafio foi bem simples, por isso resolvi incrementar com algumas coisas que irei citar abaixo:
- Adicionei redux para gerenciar os estados da aplicação de forma mais centralizada e fácil entre os componentes;
- Também tornei os dados persistentes, assim caso atualize ou saia do navegador a sua lista de tarefas continuará lá;
- Criei um botão que reorganizava a lista, de acordo com as posições da lista;
- Fiz algumas melhorias nas regras de como os todos eram adicionados e marcados como concluídos;
- Durante a criação da tarefa é verificado se a lista está invertida ou não para assim adicionar a nova tarefa na posição correta;
- Quando atualizado o estado de concluída ou não, também é checado para entender se a lista está invertida, além disso, as novas tarefas concluídas são colocadas no começo das concluídas ao fim da lista.

## Como iniciar o projeto

Instale as dependências do projeto com:
```
npm i
```

Para iniciar a aplicação use:
```
npm run dev
```

## Tecnologias usadas

 - O projeto foi escrito usando Typescript;
 - React com Vite;
 - Redux com Redux Toolkit e persistência de dados com Redux Persist;
 - Usei SASS como pre processador de css para me dar mais liberdade na escrita das folhas de estilo.
 - Ícones com Phosphor;
 - Gerenciamento de classes usando a biblioteca clsx;
 - Componentes primitivos usando Radix Ui;

## Possíveis problemas
  Não foi detectado nenhum até o momento.

## Possíveis melhorias
 Acredito que para o escopo do projeto não tenha nada em mente para melhoria além de pequenos "tweaks" em alguns visuais como o modal de confirmação de remoção de tarefa no mobile e no focus em alguns botões que não seguem o formato correto.

## Autor
Marcelo "Masa" Alves
- <img src="https://user-images.githubusercontent.com/45273884/192056758-d7c1995b-4459-4acf-bb20-c4e19ee5daf3.svg" alt="twitter-logo" style="width: 20px; height: 20px;"> [@masamarux](https://twitter.com/masamarux)
- <img src="https://user-images.githubusercontent.com/45273884/192056770-fa5b48e0-a216-4f55-86fc-83cc6dd3590a.svg" alt="linkedin-logo" style="width: 20px; height: 20px;"> [Marcelo Alves](https://www.linkedin.com/in/marceloalves-/)


## Histórico de versões
* 1.0 - (23/09/2022)
    * Lançamento inicial
