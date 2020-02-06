const express = require("express"); //4.1. Import express.
const { Router } = express; //4.2. Destructure the express' Router class.
const router = new Router(); //4.3. Create a new Router instance named router.

console.log("hello");
const app = express(); //4.6. Create an new express server named app.
app.use(router); //4.7. Register the router as middleware with app.use.

router.get(
  "/",
  (request, response) =>
    //          ^---- 4.4. Register an endpoint with router.get that listens on the / route
    response.send("test")
  //                 ^---- 4.5. Add a route handler that sends 'test' as the response.
);

//4.8. Tell the server to listen on port 4000.
const port = 4000;
app.listen(port); //4.8. Tell the server to listen on port 4000.
