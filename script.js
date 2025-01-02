document.getElementById("search-btn").addEventListener("click", function () {
    const searchQuery = document.getElementById("search-input").value;
    if (searchQuery) {
        alert(`You searched for: ${searchQuery}`);
    } else {
        alert("Please enter a search term!");
    }
});
