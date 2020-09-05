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

- Entre as dependências, se encontra o "nodemon" que é ideal para não haver a necessidade de se reiniciar manualmente o servidor após alterações no código fonte da API;

- O servidor está sendo iniciado na porta 8080 de localhost, conforme esta URL: http://localhost:8080;

- A seguir, segue a descrição de cada arquivo deste repositório:

**models/Patient.js:** Na pasta models encontra-se o arquivo Patient.js com o código do model da entidade (Coleção no MongoDB) Patient, a qual possui os seguintes atributos:
- _id: Identificador único do registro; (Não está definido no model e sim pelo próprio MongoDB)
- nome: Nome do paciente do tipo string e tamanho máximo de 200 caracteres;
- data_de_nascimento: Data de nascimento do paciente do tipo date;
- doenca: Descrição da doença do paciente do tipo string e tamanho máximo de 400 caracteres;
- tratamento: Descrição do tratamento do paciente com tipo string e tamanho máximo de 400 caracteres;
- timestamps: Indica a data e a hora de criação e edição do registro. Na coleção se apresenta em dois registros: createdAt e updatedAt.

**app.js:** Nesse arquivo encontra-se a conexão com o MongoDB e as cinco rotas solicitadas para esse teste:
- Método HTTP GET + /api/patients: A partir do método GET mais a URL /api/patients retorna-se com status 200 a lista de registros de pacientes no MongoDB ou acusa-se um erro com status 400 de nenhum paciente encontrado;
- Método HTTP GET + /api/patients/:id: A partir do método GET mais a URL /api/patients/:id retorna-se com status 200 o registro de um paciente especificado pelo id ou acusa-se um erro com status 400 de paciente não encontrado;
- Método HTTP POST + /api/patients: A partir do método POST mais a URL /api/patients realiza-se com status 200 a criação de um registro de um paciente no MongoDB ou acusa-se um erro com status 400 de paciente não cadastrado;
- Método HTTP PUT + /api/patients/:id: A partir do método PUT mais a URL /api/patients/:id realiza-se com status 200 a edição de um registro de um paciente especificado pelo id no MongoDB ou acusa-se um erro com status 400 de paciente não editado com sucesso;
- Método HTTP DELETE + /api/patients/:id: A partir do método DELETE mais a URL /api/patients/:id realiza-se com status 200 a exclusão de um registro de um paciente especificado pelo id no MongoDB ou acusa-se um erro com status 400 de paciente não excluído.

**package-lock.json e package.json:** Nesses arquivos encontra-se a indicação de quais dependências devem ser instaladas para alterações no código fonte dessa API ou mesmo para executá-la.

- Para realizar requisições para esta API utilize o Postman ou o Insomnia como uma representação de uma aplicação externa que realiza requisições HTTP para essa API;

- Para baixar o Postman: https://www.postman.com/downloads/ e para baixar o Insomnia Core: https://insomnia.rest/download/;

- Tanto no Postman como no Insomnia crie novas requests (new requests) indicando o método HTTP em questão e a URL (http://localhost:8080 + conforme indicado anteriormente), por exemplo, no caso do método PUT + /api/patients/:id deverá ser http://localhost:8080/api/patients/:id;

- No caso do método POST + /api/patients, deve-se inserir uma body JSON no formato JSON, por exemplo:

{
	"nome": "José de Arimatéia",
	"data_de_nascimento": "10.13.1968",
	"doenca": "COVID-19",
	"tratamento": "Entubação e coquetel de medicamentos X, Y e Z"
}

- No caso do método PUT + /api/patients/:id, além de se indicar o id do registro do paciente em questão na URL, deve-se inserir uma body JSON no formato JSON com as informações novas nos atributos específicos, por exemplo ao alterar o exemplo anterior:

{
	"data_de_nascimento": "10.13.1958",
	"tratamento": "Acompanhamento doméstico"
}

- Para o caso do método GET + /api/patients/:id, deve-se indicar o id do registro do paciente em questão na URL.
