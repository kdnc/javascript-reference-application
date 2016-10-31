# Node, Angular 2, Express, Typescript, angular-cli boilerplate project
<br/>
## Table of Contents
**[Resource location](#resource-location)**  
**[Overview](#overview)**  
**[Development details](#development-details)**     
**[Deployment details](#deployment-details)**    	

## Resource location

Repository URL 

- [https://github.com/vladotesanovic/angular2-express-starter](https://github.com/vladotesanovic/angular2-express-starter)

## Overview

- Boilerplate project developed with following technologies
	- Angular 2 (2.1 release)
	- Node
	- ExpressJS (with compression)
	- jwt (JSON Web Tokens)
	- Webpack (angular-cli)
	- Typescript

## Development details

1. `cd` into the project root folder where package.json file is located.
2. Install node modules

		npm install

3. Start client and server

		npm run start

4. Client will be available in following URL.

		http://localhost:4200

4. Server will be available in following URL.

		http://localhost:4300

## Deployment details

1. `cd` into the project root folder where package.json file is located.
2. Install node modules

		npm install

3. Build the code for production deployment

		npm run build

4. Following folder structure will be created in `dist` folder:

		/server <-- expressjs
		/client <-- angular2

5. Deploy `dist` folder
