# DigiAPI mockup Node server

This constantly updated mockup server is for developers of the spec and for others to test API locally. Server will be used until we (developers/API -consumers/customer) are happy with the design. After that backend connections are created. 
You can run the API locally and develop API Swagger 2.0 spec with ready-made tools. You will need: 
* npm
* node
* Swagger module

**Instructions:** 
* [How to run local copy of API?](https://github.com/APIOps/Digiapi/blob/master/node-mockup-api/README.md#how-to-run-mockup-digiapi-server) 
* [How to edit API spec locally?](https://github.com/APIOps/Digiapi/blob/master/node-mockup-api/README.md#how-to-edit-digiapi-swagger-20-spec) 
* [How to read API docs locally?](https://github.com/APIOps/Digiapi/blob/master/node-mockup-api/README.md#how-to-read-api-documentation)
* How to contribute?


## 1. Install npm and node
* [How to install npm and node with package manager](https://nodejs.org/en/download/package-manager/)
* [How to install node](https://docs.npmjs.com/getting-started/installing-node)

## 2. Install swagger module

We utilize Swagger node module in development. It bundles node server and Swagger editor in one package. The swagger module is designed for Node.js and is available through npm.

### Installing on Linux / Mac

Here's how you install with `sudo`.

1. Open a terminal. 
2. Run the install:

    `sudo npm install -g swagger`

**Note**: `sudo` may or may not be required with the `-g` option depending on your configuration. If you do not use `-g`, you may need to add the `swagger/bin` directory to your PATH manually. On Unix-based machines 
the bin directory will often be found here: `/usr/local/lib/node_modules/swagger/bin`.

### Installing on Windows

1. Open a terminal.
2. Run the install:

    `npm install -g swagger`

## How to run mockup DigiAPI server

We use express API framework in our server.

1. Open terminal 

2. Get local copy of your DigiAPI
 
    `git clone git@github.com:APIOps/Digiapi.git`

3. Go to project folder `Digiapi`

    `cd Digiapi`

4. Run the project server.

    `swagger project start -m` Option '-m' stands for mockup mode.  

5. Now, call the API!

Easiest test is to use `curl` via command line:

    `curl http://localhost:10010/api/newspapers`

Response will be: 
    `[{"id":1,"title":"Sample text","logo_url":"Sample text","publisher_name":"Sample text","tag":"Sample text"}]`

Or you can use browser and go to above address (`http://localhost:10010/api/newspapers`) to see same mockup response.

## How to read API Documentation

To see all endpoints documentation, open project in edit mode with following actions. Make sure you have installed node, npm and swagger module. You also need [local copy of project](https://github.com/APIOps/Digiapi/blob/master/node-mockup-api/README.md#how-to-run-mockup-digiapi-server). Instructions above. 

1. Open terminal
2. Go to project folder

    `cd [path/in/your/computer]/Digiapi/node-mockup-api/`

3. Start project in edit mode

    `swagger project edit`

Command should open DigiAPI Swagger 2.0 spec in browser (`http://127.0.0.1:39146/#/`). In the browser window you'll find documentation on the **right** side. 

![digiapi docs](https://raw.githubusercontent.com/APIOps/Digiapi/master/node-mockup-api/images/digiapi-docs.png)


## How to edit DigiAPI Swagger 2.0 spec
Here's how. **Note!** Any changes in the spec will be saved in your local copy of the DigiAPI spec file in `api/swagger/swagger.yaml`. 

Make sure you have [installed node, npm](https://github.com/APIOps/Digiapi/tree/master/node-mockup-api#1-install-npm-and-node) and [swagger module](https://github.com/APIOps/Digiapi/tree/master/node-mockup-api#2-install-swagger-module). You will also need [local copy of DigiAPI repository](https://github.com/APIOps/Digiapi/blob/master/node-mockup-api/README.md#how-to-run-mockup-digiapi-server). 

1. Open terminal
2. Go to project folder

    `cd [path/in/your/computer]/Digiapi/node-mockup-api/`

3. Start project in edit mode

    `swagger project edit`

Command should open DigiAPI Swagger 2.0 spec in browser (`http://127.0.0.1:39146/#/`). In the browser window you'll find editable API spec on the **left** side.  

![digiapi docs](https://raw.githubusercontent.com/APIOps/Digiapi/master/node-mockup-api/images/digiapi-spec.png)

**Note!** Any changes in the spec will be saved in your local copy of the DigiAPI spec file in `api/swagger/swagger.yaml`. 

## How to contribute 

If you want to contribute to the project, you'll need to use branches. 
* Create feature branch for contribution. [Create branch in Github ](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)
* 
