# 0x03. ES6 data manipulation

<img src="meme.jpg">

## Resources
<b>Read or watch:</b>

<li>
    <a href ="https://intranet.alxswe.com/rltoken/KDAVab6oKKsFBXJc2-ll-A">
        Array
    </a>
</li>
<li>
    <a href ="https://intranet.alxswe.com/rltoken/kpoPupbBdDmukQkcKlvwnw">
        Typed Array
    </a>
</li>
<li>
    <a href ="https://intranet.alxswe.com/rltoken/C8x3dhHo0p3uE7S9-EyP9Q">
        Set Data Structure
    </a>
</li>
<li>
    <a href ="https://intranet.alxswe.com/rltoken/XR-ql9v9-PWcXnvTc749gw">
        Map Data Structure
    </a>
</li>
<li>
    <a href ="https://intranet.alxswe.com/rltoken/NEy8fk2QRytajR8hgXkCog">
        WeakMap
    </a>
</li>

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

<li>How to use map, filter and reduce on array</li>
<li>Typed Arrays</li>
<li>The Set, Map and Weak link data structures</li>

## Requirements



<ul>
    <li>Allowed editors: vi, vim, emacs, Visual Studio Code</li>
    <li>All your files will be interpreted/compiled on Ubuntu 14.04 LTS using python3 (version 3.4.3)</li>
    <li>All your files should end with a new line</li>
    <li>A README.md file, at the root of the folder of the project, is mandatory</li>
    <li>Your code should use the js extension</li>
    <li>Your code will be tested using Jest and the command npm run test</li>
    <li>Your code will be verified against lint using ESLint</li>
    <li>Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test</li>
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

#### <a href="https://github.com/Tii04/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/package.json">package.json</a>

#### <a href="https://github.com/Tii04/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/babel.config.js">babel.config.js</a>

#### <a href="https://github.com/Tii04/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/.eslintrc.js">.eslintrc.js</a>

<br>

### And ...

Don’t forget to run <span style="color: red; background-color: #E9E9E9;">$ npm install</span> when you have the <span style="color: red; background-color: #E9E9E9;">package.json</span>
