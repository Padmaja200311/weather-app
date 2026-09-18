function SearchBar({ city, setCity, onSearch, loading }) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!city.trim()) {
      return;
    }

    onSearch();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="search-container"
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search-input"
      />

      <button
        type="submit"
        disabled={loading}
        className="search-button"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default SearchBar;