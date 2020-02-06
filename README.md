# codaisseur-week5-day3-AdvanceAPI-RouterClass

The Router Class
Express exports a class called Router.

Exercise: Instantiate a Router

1. Create a new project named router-class.
   in Terminal:
   -mkdir router-class
   -npm init
   -git init
   -touch .gitignore -> add node_modules inside the file and save
2. Install express. terminal: npm install express
3. Create a file named server.js. terminal: touch server.js; code .
   : to open vscode
4. Inside the file:
   4.1. Import express.
   4.2. Destructure its Router class.
   4.3. Create a new Router instance named router.
   4.4. Register an endpoint with router.get that listens on the / route
   4.5. Add a route handler that sends 'test' as the response.
   4.6. Create an new express server named app.
   4.7. Register the router as middleware with app.use.
   4.8. Tell the server to listen on port 4000.
5. Run node server.js. - to start the server
6. In another terminal, test your server with httpie like: http :4000

---

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 4
Content-Type: text/html; charset=utf-8
Date: Tue, 30 Jul 2019 15:42:28 GMT
ETag: W/"4-qUqP5cyxm6YcTAhz05Hph5gvu9M"
X-Powered-By: Express
test
Make sure you see the response test in your terminal.
