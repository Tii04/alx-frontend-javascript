# 0x00. ES6 Basics

<img src="meme.png">

## Resources
<b>Read or watch:</b>

<li>
    <a href ="https://www.w3schools.com/js/js_es6.asp">
        ECMAScript 6 - ECMAScript 2015
    </a>
</li>
<li>
    <a href ="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements">
        Statements and declarations
    </a>
</li>
<li>
    <a href ="https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4?gi=d2ae003e53e1">
        Javascript ES6 — Iterables and Iterators
    </a>
</li>
<li>
    <a href ="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">
        Rest parameter
    </a>
</li>
<li>
    <a href ="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters">
        Default parameters
    </a>
</li>
<li>
    <a href ="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">
        Arrow functions
    </a>
</li>

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

<li>What ES6 is</li>
<li>New features introduced in ES6</li>
<li>The difference between a constant and a variable</li>
<li>Block-scoped variables</li>
<li>Arrow functions and function parameters default to them</li>
<li>Rest and spread function parameters</li>
<li>String templating in ES6</li>
<li>Object creation and their properties in ES6</li>
<li>Iterators and for-of loops</li>

## Requirements



<ul>
    <li>Allowed editors: vi, vim, emacs, Visual Studio Code</li>
    <li>All your files will be interpreted/compiled on Ubuntu 14.04 LTS using python3 (version 3.4.3)</li>
    <li>All your files should end with a new line</li>
    <li>A README.md file, at the root of the folder of the project, is mandatory</li>
    <li>Your code should use the js extension</li>
    <li>Your code will be tested using Jest Testing Framework</li>
    <li>Your code will be verified against lint using ESLint</li>
    <li>Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test</li>
    <li>All of your functions must be exported</li>
</ul>

## Setup

### Install NodeJS 12.11.x

(in your home directory):

<pre><code>
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
</code></pre>

<pre><code>
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
</code></pre>

### Install Jest, Babel, and ESLint

in your project directory:

<li>Install Jest using:<span style="color: red; background-color: #E9E9E9;"> npm install --save-dev jest</span></li>
<li>Install Babel using: <span style="color: red; background-color: #E9E9E9;">npm install --save-dev babel-jest @babel/core @babel/preset-env</span></li>
<li>Install ESLint using: <span style="color: red; background-color: #E9E9E9;">npm install --save-dev eslint</span></li>

## Configuration Files

#### <a href="https://github.com/Tii04/alx-frontend-javascript/blob/master/0x02-ES6_classes/package.json" style="color: #E43F26; background-color: #E9E9E9;">package.json</a>

#### <a href="https://github.com/Tii04/alx-frontend-javascript/blob/master/0x02-ES6_classes/babel.config.js" style="color: #E43F26; background-color: #E9E9E9;">babel.config.js</a>

#### <a href="https://github.com/Tii04/alx-frontend-javascript/blob/master/0x02-ES6_classes/.eslintrc.js" style="color: #E43F26; background-color: #E9E9E9;">.eslintrc.js</a>

<br>

### And ...

Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.
