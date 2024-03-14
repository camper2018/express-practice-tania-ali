const express = require("express");
const wiki = require("./routes/wiki.js");
const logger = require("morgan");
const app = express();
const port = 3000;
app.use(logger("dev"));

const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
// console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
const s1 = new square();
console.log(`The area of a square with a width of 4 is ${s1.area(4)}`);

// An example middleware function
const a_middleware_function = function (req, res, next) {
    // Perform some operations
    console.log("middleware executed")
    next(); // Call next() so Express will call the next middleware function in the chain.
};
// Middleware Function added with use() for a specific route
app.use("/wiki", a_middleware_function, wiki);

// Function added with use() for all routes and verbs
app.use(a_middleware_function);
// to serve images, CSS files, and JavaScript files from a directory named 'public' at the same level as where you call node:
// app.use(express.static("public"));
// You can call static() multiple times to serve multiple directories. 
// If a file cannot be found by one middleware function then it will be passed on to the subsequent middleware (the order that middleware is called is based on your declaration order).
app.use(express.static("media"));
app.use(express.static("public"));
// Any files in the public directory are served by adding their filename (relative to the base "public" directory) to the base URL. So for example:
// http://localhost:3000/images/background.webp // try this url to get image
// http://localhost:3000/images/dog.jpg
// http://localhost:3000/css/style.css
// http://localhost:3000/js/app.js
// http://localhost:3000/about.html

// You can also create a virtual prefix for your static URLs, rather than having the files added to the base URL. For example, here we specify a mount path so that the files are loaded with the prefix "/media":

app.use("/media", express.static("public"));
// Now, you can load the files that are in the public directory from the /media path prefix.
// http://localhost:3000/media/images/dog.jpg
// http://localhost:3000/media/video/cat.mp4
// http://localhost:3000/media/cry.mp3


// A middleware function added for a specific HTTP verb and route
app.get("/home", a_middleware_function, (req, res)=> {
    res.send("Hello World!");
})

//Error Handling:
// Errors are handled by one or more special middleware functions that have four arguments, instead of the usual three: (err, req, res, next). For example:
// These can return any content required, but must be called after all other app.use() and routes calls so that they are the last middleware in the request handling process!
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});



app.listen(port,()=> {
    console.log(`Example app listening on port ${port}!`);
});

