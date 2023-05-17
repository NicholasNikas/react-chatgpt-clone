function App() {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>Bruh</li>
          <li>Bright</li>
        </ul>
        <nav>
          <p>Made by Nicholas Nikas</p>
        </nav>
      </section>
      <section className="main">
        <h1>NikasGPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">➢</div>
          </div>
          <p className="info">
            NikasGPT is a model using ChatGPT which interacts in a
            conversational way. The dialogue format makes it possible for
            NikasGPT to answer followup questions, admit its mistakes, challenge
            incorrect premises, and reject inappropriate requests.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
