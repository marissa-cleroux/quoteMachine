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

function Actions({ quote, author, newQuote }) {
  let tweet = encodeURIComponent(quote + " - " + author);

  return (
    <div className="action">
      <a
        href={"https://twitter.com/intent/tweet?text=" + tweet}
        id="tweet-quote"
        className="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./images/twitter.png" alt="twitter symbol" className="icon" />
      </a>
      <button id="new-quote" onClick={newQuote} className="button">
        <img src="./images/next.png" alt="next quote" className="icon" />
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        All quotes scraped from{" "}
        <a
          href="https://www.goodreads.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          goodreads
        </a>
      </p>
      <p>
        Web scraping done by myself, API for quotes from women science fiction
        authors created by myself can be found at:{" "}
        <a
          href="https://sci-fi-ladies-api.herokuapp.com/api/quote"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://sci-fi-ladies-api.herokuapp.com/api/quote
        </a>
      </p>
    </footer>
  );
}
function QuoteMachine(props) {
  return (
    <div>
      <Header />
      <main id="quote-box">
        <Quote quote={props.quote} />
        <Author author={props.author} />
        <Actions {...props} />
      </main>
      <Footer />
    </div>
  );
}

export default QuoteMachine;
