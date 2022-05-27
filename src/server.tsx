import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouterContext } from "react-router";
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import App from "./App";
import Provider from "./store/provider";
import createStore from "./store";

import type { State } from "./store";

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};

syncLoadAssets();

const cssLinksFromAssets = (assets, entrypoint) =>
  assets[entrypoint]
    ? assets[entrypoint].css
      ? assets[entrypoint].css
          .map((asset) => `<link rel="stylesheet" href="${asset}">`)
          .join("")
      : ""
    : "";

const jsScriptTagsFromAssets = (assets, entrypoint, extra = "") =>
  assets[entrypoint]
    ? assets[entrypoint].js
      ? assets[entrypoint].js
          .map((asset) => `<script src="${asset}"${extra}></script>`)
          .join("")
      : ""
    : "";

const getDefaultStateForDomain = (req: express.Request): State => {
  return {
    pages: [
      {
        id: 1,
        slug: "/",
        exact: true,
        components: [
          {
            id: 7,
            name: "PageMeta:One",
            props: {
              title: "My Awesome Title",
              description: "This is the description for this webpage",
            },
          },
          {
            id: 3,
            name: "Header:One",
            props: {
              name: "FooBar",
              navItems: [
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "About",
                  href: "/about",
                },
              ],
            },
          },
          {
            id: 5,
            name: "Footer:One",
            props: {
              name: "BAZBORP",
              navItems: [
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "About",
                  href: "/about",
                },
              ],
            },
          },
        ],
      },
      {
        id: 2,
        slug: "/about",
        components: [
          {
            id: 4,
            name: "Header:Two",
            props: {
              name: "BAZBORP",
              navItems: [
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "About",
                  href: "/about",
                },
              ],
            },
          },
        ],
      },
    ],
  };
};

export const renderApp = (req: express.Request, res: express.Response) => {
  const context: StaticRouterContext = {};
  const store = createStore(getDefaultStateForDomain(req));

  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const finalState = store.getState();

  if (context.url) {
    return { redirect: context.url };
  } else {
    const meta = Helmet.renderStatic();
    const html =
      // prettier-ignore
      `<!doctype html>
    <html lang="en" ${meta.htmlAttributes.toString()}>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        ${meta.title.toString() || "<title>Medusa</title>"}
        ${meta.meta.toString()} 
        ${meta.link.toString()} 
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${cssLinksFromAssets(assets, 'client')}
    </head>
    <body>
        <div id="root">${markup}</div>
        ${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(finalState)}
        </script>
    </body>
  </html>`;

    return { html };
  }
};

const server = express()
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get("/*", (req: express.Request, res: express.Response) => {
    const { html = "", redirect = false } = renderApp(req, res);
    if (redirect) {
      res.redirect(redirect);
    } else {
      res.send(html);
    }
  });

export default server;
