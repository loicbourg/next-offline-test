const express = require("express");
const next = require("next");
const { join } = require('path');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/favicon.ico', (req, res) => {
      const filePath = join(__dirname, 'static', 'favicon.ico');
      app.serveStatic(req, res, filePath);
    });

      server.get('/service-worker.js', (req, res) => {
          console.log('ok');

          const filePath = join(__dirname, '.next', 'service-worker.js');
          app.serveStatic(req, res, filePath);
      });

    server.get("/posts/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
