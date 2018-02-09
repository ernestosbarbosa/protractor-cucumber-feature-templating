### Protractor + Cucumber feature templating ###

Projeto para automação de testes utilizando protractor e Cucumber, utilizando templates para criar features em tempo de execução. Dessa forma é possível executar os testes em múltiplos ambientes (desenvolvimento, homologação, produção ou atá ambientes com mock).

#### Iniciando
Use o comando `npm i` para instalar as dependências do projeto. Depois de clonado, `npm run test` para executá-lo. Nenhuma outra configuração deve ser necessária para iniciar.

#### Para iniciantes
Este projeto é feito com [protractor](http://www.protractortest.org/), e para utilizá-lo será necessário instalar o [node](https://nodejs.org/en/).  
Depois de instalado você utilizará linhas de comando para gerenciar o projeto e usar o nodejs. Para isso você tem algumas opções como [gitbash](https://git-for-windows.github.io/) ou o [powershell](https://github.com/PowerShell/PowerShell), sendo que minha preferência é com gitbash.  
Depois de instalar o nodejs e o gitbash/powershell, inicie seu programa de linha de comando escolhido e execute o comando `node -v`. Esse comando deverá mostrar a versão do nodejs instalada, caso apresente erro verifique se o nodejs foi instalado corretamente.

#### Clonando o projeto
Para ter o projeto na sua máquina é necessário clonar ele usando o comando `git clone`. Siga os seguintes passos para clonar o projeto:
1. Abra o gitbash
2. Navegue até o local onde deseja que o projete fique
3. Cole o comando `git clone projeto.git`  
  
Pronto, o projeto agora está clonado.

#### IDE
Como IDE está sendo utilizado o [VSCode](https://code.visualstudio.com/) com as seguintes extensões:
- vscode-icons
- TSLint
- Path Autocomplete
- Git: Common Commands Suite
- JavaScript (ES6) code snippets
- TODO Highlight

#### PageObjects
Os arquivos com o mapeamento das telas devem ser estruturados a partir da pasta `src/page-objects/`.

#### Features
Os arquivos `.feature` devem ser estruturados a partir da pasta `templates/`. Os mesmos serão compilados de acordo com o ambiente desejado para a pasta `dist/features`.

#### Passos
Os arquivos com os passos para os testes devem ser estruturados a partir da pasta `test/steps`. Os arquivos devem terminar com `.steps.ts`.