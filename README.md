# Pwlista 

Pwlista é um projeto desenvolvido para estudo em tecnologias de Progressive Web Applications. Foi desenvolvida para servir de modelo e guia para ensino dessa nova tecnologia.

## Conceito:

Pwa (Progressive Web App) é o conceito criado para definir a evolução das páginas estáticas da web, que cada vez mais se aproximam das características de uma aplicativo.

Com o advento dos aplicativos em celulares, uma pagina web com caracteristicas de Pwa consegue transmitir uma experiência mais cômoda ao usuário, sendo possível ser acessada até mesmo sem conexão com a internet - Sendo essa sua mais popular característica.

Nesse projeto, aplicamos o uso de uma aplicação Pwa seguindo o checklist definido pelo Google. [Veja aqui.](https://developers.google.com/web/progressive-web-apps/checklist)

## Criando o arquivo HTML e o manifest.json:

Nesse projeto, utilizamos [Bulma](https://bulma.io/), uma poderosa ferramenta CSS baseada em Flexbox, para a estilização do html. Como trabalhamos com o [IndexdedDB](https://developer.mozilla.org/pt-BR/docs/IndexedDB), usamos a biblioteca [PouchDB](https://pouchdb.com/) para uma rápida implementação. O PouchDB tem como sua principal caracterísica a sincronização em tempo real com o CouchDB, mas não usaremos isso agora.

O arquivo `manifest.json` , segundo a [Documentação do Google](https://developers.google.com/web/fundamentals/web-app-manifest/?hl=pt-br): "[...] é um arquivo JSON que permite controlar como o aplicativo web ou site é exibido para o usuário em áreas que normalmente se espera ver aplicativos".
Então, a partir dele, conseguimos definir detalhes importantes como:

* Nome da aplicação
* Ícone da aplicação
* Definir sua visualização (dentro ou fora do browser, ou até mesmo fullscreen)
* Pagina inicial e splash screen

## Service Worker. O que é e como criar:

breve..