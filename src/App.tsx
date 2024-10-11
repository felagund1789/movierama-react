import "./App.css";
import SearchInput from "./components/searchInput/SearchInput";

function App() {
  return (
    <>
      <header className="header">
        <h1>Movierama</h1>
        <SearchInput onSearch={(searchTerm) => console.log(searchTerm)} />
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
