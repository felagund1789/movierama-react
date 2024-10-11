import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <h1>Movierama</h1>
        <div className="search-container">
          <label htmlFor="search-input" className="search-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </label>
          <input
            type="text"
            className="search"
            id="search-input"
            placeholder="Search for movies"
          />
        </div>
      </header>
      <main className="content">
        <h3
          id="error-message"
          className="error-message"
          style={{ display: "none" }}
        >
          Error
        </h3>
        <h2 id="page-title" className="page-title">
          In Theaters
        </h2>
        <div className="results"></div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
