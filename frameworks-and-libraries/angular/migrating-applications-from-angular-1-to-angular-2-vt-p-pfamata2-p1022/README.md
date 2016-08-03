# Migrating applications from Angular 1 to Angular 2
<br/>
## Table of Contents
**[Resource location](#resource-location)**  
**[Overview](#overview)**  
**[Tested environment](#tested-environment)**    
**[Deployment details](#deployment-details)**    

## Resource location

Resource - [Pluralsight] Preparing for and Migrating Applications to Angular 2 (Jun 02, 2016)

Repository URL - [https://github.com/joeeames/lightning-voter-demo](https://github.com/joeeames/lightning-voter-demo)

## Overview

- Demonstrated how to migrate a demo app from Angular 1 to Angular 2

## Tested environment

### Development tools

- NodeJS 5.9.0

### Operating system

- Windows 10

## Deployment details

1. `cd` into the project root folder where package.json file is located.
2. Install node modules

		npm install
		npm install nodemon -g

4. Compile typescript code if any .ts files available. This would compile the .ts files to .js files in the `build\` folder

		npm run tsc

6. Start the server 
	
	- In dev mode
		
			npm run dev

	- In production mode
		
			npm run start


5. Run `karma` tests

		npm run test