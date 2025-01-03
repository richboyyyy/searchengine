document.getElementById("search-btn").addEventListener("click", function () {
    const searchQuery = document.getElementById("search-input").value;
    if (searchQuery) {
        // Redirect to Google search with the query
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    } else {
        alert("Please enter a search term!");
    }
});
