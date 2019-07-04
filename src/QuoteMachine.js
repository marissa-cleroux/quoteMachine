import React from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Quotes from Sci-Fi Ladies</h1>
    </header>
  );
}
function Quote(props) {
  return <div id="text">{props.Quote}</div>;
}

function Author(props) {
  return <div id="author">{props.Author}</div>;
}

function Actions() {
  return (
    <div>
      <button id="tweet-quote" href="twitter.com/intent/tweet">
        Tweet Quote
      </button>
      <button id="new-quote">Get a new Quote</button>
    </div>
  );
}
function QuoteMachine(props) {
  return (
    <div id="quote-box">
      <Header />
      <article id="quote-box">
        <Quote Quote={props.Quote} />
        <Author Author={props.Author} />
        <Actions />
      </article>
    </div>
  );
}

export default QuoteMachine;
