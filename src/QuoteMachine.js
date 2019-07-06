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
    <div className="action">
      <a href="twitter.com/intent/tweet" id="tweet-quote">
        <i className="fab fa-twitter" title="tweet this quote" />
      </a>
      <button id="new-quote">New Quote</button>
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
