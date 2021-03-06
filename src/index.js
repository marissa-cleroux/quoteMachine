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
      state.Author = data[0].author;
      state.Quote = data[0].quote;
      console.log("DATA: ", data);
      render();
    })
    .catch(e => {
      console.log("ERROR: ", e);
    });
}

function render() {
  ReactDOM.render(
    <QuoteMachine
      author={state.Author}
      quote={state.Quote}
      newQuote={getRandomQuote}
    />,
    document.getElementById("root")
  );
}

getRandomQuote();
serviceWorker.unregister();
