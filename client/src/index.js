// @flow

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./c3jscustom.css";

import App from "./App.react";
import {client} from "./repository/repository";
import {CATEGORIES} from "./repository/queries";

const main = async () => {
    const { data: { categories } } = await client.query({ query: CATEGORIES })
    console.log('categories', categories)
    const rootElement = document.getElementById("root");
    if (rootElement) {
        ReactDOM.render(<App categories={categories}/>, rootElement);
    } else {
        throw new Error("Could not find root element to mount to!");
    }
}

main()