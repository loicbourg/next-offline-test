const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// TODO: delete in production
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/posts/:id", (req, res) => {
      console.log('coucou1', req.url, req.params);

      const actualPage = "/post";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      console.log('coucou2', req.url);

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
