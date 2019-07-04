import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import QuoteMachine from "./QuoteMachine";
import * as serviceWorker from "./serviceWorker";

let state = {};

function getRandomQuote() {
  var proxyUrl = "https://cors-anywhere.herokuapp.com/",
    targetUrl = "https://sci-fi-ladies-api.herokuapp.com/api/quote";
  fetch(proxyUrl + targetUrl)
    .then(blob => blob.json())
    .then(data => {
      state["Author"] = data[0].author;
      state["Quote"] = data[0].quote;
      console.log("DATA: ", data);
      console.log("STATE: ", state);

      render();
      return data;
    })
    .catch(e => {
      return e;
    });
}

function render() {
  ReactDOM.render(
    <QuoteMachine Author={state.Author} Quote={state.Quote} />,
    document.getElementById("root")
  );
}

getRandomQuote();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
