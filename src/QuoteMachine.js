import React from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Sci-Fi Ladies</h1>
    </header>
  );
}
function Quote(props) {
  return <div id="text">{props.quote}</div>;
}

function Author(props) {
  return <div id="author">{props.author}</div>;
}

function Actions(props) {
  return (
    <div className="action">
      <a
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        className="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./images/twitter.png" alt="twitter symbol" className="icon" />
      </a>
      <button
        id="new-quote"
        onClick={() => {
          props.newQuote();
        }}
        className="button"
      >
        <img src="./images/next.png" alt="next quote" className="icon" />
      </button>
    </div>
  );
}
function QuoteMachine(props) {
  return (
    <div>
      <Header />
      <main id="quote-box">
        <Quote quote={props.quote} />
        <Author author={props.author} />
        <Actions newQuote={props.newQuote} />
      </main>
    </div>
  );
}

export default QuoteMachine;
