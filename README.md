# teste_salvus
Repositório do teste de uma aplicação para uma API do teste da Salvus.

########################## Instruções para a execução da API ##########################

- Utilizou-se o Node.js como plataforma para criação do servidor dessa API;

- Utilizou-se como banco de dados o MongoDB;

- Utilizou-se o Visual Studio Code para codificação e gerenciamento de dependências da plataforma Node.js;

- Se não possuir outra IDE, instale o Visual Studio Code no Windows seguindo esse tutorial: https://www.youtube.com/watch?v=49K-Zxc8A7A;

- Para instalar o mesmo MongoDB utilizado na elaboração dessa API no Windows acesse https://www.mongodb.com/try/download/community e baixe a versão corrente mais atual. Durante a instalação, instale também o MongoDBCompass para o auxiliar na gestão do BD;

- Instale o Node.js no Windows seguindo esse tutorial: https://www.youtube.com/watch?v=jqrKQEJ6DpY;

- Para dar início a execução da API, deve-se criar uma pasta chamada "teste_salvus" acessada pelo Workspace do Visual Studio Code;

- Insira nessa pasta os arquivos deste repositório;

- Apontando para a pasta teste_salvus executa-se pelo terminal no Visual Studio Code o comando "npm install" para instalar todas as dependências utilizadas nessa API;

- Entre as dependências, se encontra o "nodemon" que é ideal para não haver a necessidade de se reiniciar manualmente o servidor após alterações no código fonte da API. No caso de apenas realizar requisições para a API não será necessário o uso do nodemon, mas se o objetivo for realizar alterações no código fonte, o nodemon pode auxiliar;

- A seguir, segue a descrição de cada arquivo deste repositório:

**models/Patient.js:** Na pasta models encontra-se o arquivo Patient.js com o código do model da entidade (Coleção no MongoDB) Patient, a qual possui os seguintes atributos:
- _id: Identificador único do registro; (Não está definido no model e sim pelo próprio MongoDB)
- nome: Nome do paciente do tipo string e tamanho máximo de 200 caracteres;
- data_de_nascimento: Data de nascimento do paciente do tipo date;
- doenca: Descrição da doença do paciente do tipo string e tamanho máximo de 400 caracteres;
- tratamento: Descrição do tratamento do paciente com tipo string e tamanho máximo de 400 caracteres;
- timestamps: Indica a data e a hora de criação e edição do registro. Na coleção se apresenta em dois registros: createdAt e updatedAt.

**app.js:** Nesse arquivo encontra-se a conexão com o MongoDB e as cinco rotas solicitadas para esse teste:
- 
