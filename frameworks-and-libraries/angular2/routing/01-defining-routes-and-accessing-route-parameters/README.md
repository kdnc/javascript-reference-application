# Defining routes and accessing route parameters
<br/>
## Table of Contents 
**[Resource location](#resource-location)**  
**[Overview](#overview)**        
**[Code Explanations](#code-explanations)**      
**[Development details](#development-details)**    
**[Deployment details](#deployment-details)**    
**[Tests](#tests)**     

## Resource location

Resources

- [http://blog.thoughtram.io/angular/2016/06/14/routing-in-angular-2-revisited.html](http://blog.thoughtram.io/angular/2016/06/14/routing-in-angular-2-revisited.html)
- [https://plnkr.co/edit/I9qFkO?p=info](https://plnkr.co/edit/I9qFkO?p=info)

## Overview

- Defining route parameters
- Linking to other routes
- Accessing route parameters

## Code Explanations

Search in the code for `CODE BLOCK EXPLANATION - #num` (e.g. CODE BLOCK EXPLANATION - 1) to find the code block explanations which are special to this project.

## Development details

1. `cd` into the project root folder where package.json file is located.
2. Install node modules

		npm install

3. Compile Angular code and put them in Scripts folder

	* Excecute following command on a separate terminal

			npm run dev-client

4. starts NodeJS server

	* Excecute following command on a separate terminal

			npm run dev-server

5. Navigate to `http://localhost:3000` in a web browser


## Tests

### Test scenario 1 - User should be able to navigate between links

1. Navigate to `http://localhost:3000` in a web browser
2. Click on `Pascal Precht` link.
3. `Pascal Precht` name should be displayed under `Contact Details` heading.
4. Click on `Contact List` link.
5. User should be navigated to the page with `Contacts` heading.