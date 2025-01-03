document.getElementById("search-btn").addEventListener("click", async function () {
    const searchQuery = document.getElementById("search-input").value;
    const aiResponseDiv = document.getElementById("ai-response");

    if (searchQuery) {
        // Display a loading message while waiting for the response
        aiResponseDiv.innerHTML = "Fetching AI response...";
        aiResponseDiv.style.display = "block";

        // Call the OpenAI API
        const apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your OpenAI API key
        const endpoint = "https://api.openai.com/v1/completions";

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "text-davinci-003", // Or another GPT model
                    prompt: searchQuery,
                    max_tokens: 100,
                }),
            });

            const data = await response.json();
            const aiText = data.choices[0].text.trim();

            // Display the AI response
            aiResponseDiv.innerHTML = aiText;
        } catch (error) {
            aiResponseDiv.innerHTML = "Sorry, something went wrong. Please try again.";
        }
    } else {
        aiResponseDiv.innerHTML = "Please enter a question!";
        aiResponseDiv.style.display = "block";
    }
});
