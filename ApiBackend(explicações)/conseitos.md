# Conceitos

## - API - (Application Programing Interface/ Interface de Programacao de aplicativos.)
```
- Um conjunto de especificaçõe que definem de que forma as aplicações irão se comunicar. 
- Regras e protocolos para que softwares interajam entre si. 
- Interface para que um sistema se comuniue com ooutro sistema. 
- Um exemplo é vc ser um cliente e o API ser um garçom te trazendo as informações(cardápio/interface).
```

## REST (Representation State Transfer/ Transferencia Representacional de Estado.)//Regras.
```
- É um estilo arquitetônico aplicado para fornecer padrões entre sistemas de computador na web, facilitando a comunicação entre eles.
-Restrição de arquitetura. 
-Conjunto de regras e convenções que permite que 2 sistemas se comuniquem pela internet.
-A Arquitetura REST separa o backend do frontend.  
```

## RESTFUL ()//Quem segue as regras.
```
-Utiliza metodos HTTP;
-Utiliza em nuvem;
-Capacidade de aplicar os principíos de REST.
-Quando segue todas as regras, criadas como padrões. Quando não seguem essas regras -não- é considerado RESTFUL/pode ser API mas -não- RESTFUL. 
```

## Maturidade de modelo RESTFUL. 
```
Nivel 0- A API precisa utilizar o protocolo HTTP para a comunicação. 
Nivel 1- A API deve possuir mapeamento de recursos bem definidos. Representando substantivos que fazem a correta utilização das URIs(<-O que construimos na programação.) para os recursos respectivos.
Nivel 2- A API deve utilizar o protocolo HTTP de forma semantica com seus verbos(get, put, delete, post,...) de acordo com a requisisção. 
Nivel 3- A API deve mostrar o seu estado atual de relacionamneto com os demais recursos de API. 
```

## JASON (Javascript Object Notation/ Notação de objetos JavaScript.)
```
-Padrão de dados. 
-Estrutura de dados em formato de texto.
-Transferi informações entre servidor e o cliente. 
```

## Requisições HTTP.
```
- O protocolo HTTP define um conjunto de métodos de requisição responsaveis por indicar a ação a ser executada para um dado recurso.
- GET, PUSH, DELETE, PUT, PATCH
```

## Headers HTTP.
```
- Campo para envio de informações adicionais (normalmente formatação ou autorização) que não tem relação com os dados em si: Autorization, Content Type, Accept. 
```

## HTTP Codes. 

- 100 - 199: Informativos. 
- 200 - 299: Sucesso. 
- 300 - 399: Rediricionamento. 
- 400 - 499: Erros do Cliente.
- 500 - 599: Erros de servidor. 


## Framework.
```
-Blibioteca. 
-Reune varios projetos provendo uma funcionalidade generica. (Assim não permitindo a repetição de informações). 
```

## ExpressJS.
```
- Framework para 'nodeJS'
-Fornece requisitos minimos para servidores web. 
```