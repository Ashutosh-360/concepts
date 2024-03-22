// Modules in node
// Core Modules: These are modules provided by Node.js itself and are built-in to the Node.js runtime.
// Examples include modules like fs (File System), http, util, path, events, etc.
//  Core modules can be directly imported into your application without the need for installation via npm.

const fs = require("fs");

// Local Modules:
// These are modules created by developers within their own projects.
// Local modules typically reside in separate files within the project directory and can be imported into other files using relative paths.

// In a file named myModule.js
module.exports = {
  myFunction: function () {
    // Function implementation
  },
  myVariable: "Hello",
};

// In another file
const myModule = require("./myModule");

// Third-party Modules:
//  These are modules created by third-party developers and are available through npm, the Node.js package manager.
//  These modules can be easily installed into your project using npm and then imported into your code.

// npm install express
const express = require("express");

// Built-in Modules:
// Similar to core modules, these modules are shipped with Node.js but are not loaded by default.
// They can be loaded explicitly using the require() function.
const http2 = require("http2");
