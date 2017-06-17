# Angular 2 general project
<br/>
## Table of Contents
**[Resource location](#resource-location)**  
**[Overview](#overview)**  
**[Tested environment](#tested-environment)**    
**[Additional development steps followed](#additional-development-steps-followed)**   
**[Deployment details](#deployment-details)**  

## Resource location

Resource - [Lynda] Angular 2 Essential Training (Oct 31, 2016)

Repository URL - [https://github.com/LyndaExerciseFiles/angular2-essential-training](https://github.com/LyndaExerciseFiles/angular2-essential-training)

## Overview

JavaScript frameworks help you code more quickly, by providing special functionality for developing specific types of web projects. Angular was designed by Google to address challenges programmers face building single-page applications. This course introduces you to the essentials of this "superheroic" framework, including declarative templates, two-way data binding, and dependency injection. Justin Schwartzenberger steps through the framework one feature at a time, focusing on the new component-based architecture of Angular 2. After completing this training, you'll be able to tackle the other project-based courses in our library and create your own Angular app.

Topics include:
- What is Angular?
- Setting up an Angular template
- Creating a component
- Displaying data
- Working with events
- Using two-way data binding
- Creating a subcomponent
- Using the built-in HTTP module
- Using the built-in router module

1. Make sure you have these installed
  - [node.js](http://nodejs.org/)
  - [git](http://git-scm.com/)

2. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC) 

    `git clone https://github.com/LyndaExerciseFiles/angular2-essential-training.git`
    
3. CD to the folder

    `cd angular2-essential-training`
    
4. Run the following to install the project dependencies:

    `npm install`
    
5. Run the npm start command to build the code, watch for file changes, and serve up the site locally:

    `npm start`

The repository has a branch for each video starting point. For example, the branch **02-01b** is used as the starting code for the video *02-01 NgModule and the root module*. You can checkout branches using `git checkout <branchname>` and not have to re-run `npm install` each time since you will remain in the same root folder.

Note that the site will run using `lite-server` and will be served up at the following local address:  
    http://localhost:3000

*If you use a code editor that launches its own web server please note that it may run on a different port number. 
You will want to use `npm start` for this project.*
  
