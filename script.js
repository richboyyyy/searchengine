document.getElementById("search-btn").addEventListener("click", async function () {
    const searchQuery = document.getElementById("search-input").value;
    const aiResponseDiv = document.getElementById("ai-response");

    if (searchQuery) {
        aiResponseDiv.innerHTML = "Fetching AI response...";
        aiResponseDiv.style.display = "block";

        try {
            const response = await fetch("http://localhost:3000/ai-query", { // Update this URL to your server URL
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query: searchQuery })
            });

            const data = await response.json();
            if (data.choices && data.choices[0]) {
                aiResponseDiv.innerHTML = data.choices[0].text.trim();
            } else {
                aiResponseDiv.innerHTML = "No response from AI.";
            }
        } catch (error) {
            aiResponseDiv.innerHTML = "Sorry, something went wrong. Please try again.";
        }
    } else {
        aiResponseDiv.innerHTML = "Please enter a question!";
        aiResponseDiv.style.display = "block";
    }
});
