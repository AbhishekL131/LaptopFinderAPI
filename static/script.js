document.getElementById("searchForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const company = document.getElementById("company").value;
    const budget = document.getElementById("budget").value;
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(`http://127.0.0.1:8000/search?company=${company}&budget=${budget}`);
        const data = await response.json();

        resultsDiv.innerHTML = ""; // Clear previous results

        if (data.results && Array.isArray(data.results)) {
            data.results.forEach((laptop, index) => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <h2>${index + 1}. ${laptop.name}</h2>
                    <p><strong>Processor:</strong> ${laptop.processor}</p>
                    <p><strong>RAM:</strong> ${laptop.RAM}</p>
                    <p><strong>Storage:</strong> ${laptop.storage}</p>
                    <p><strong>Display:</strong> ${laptop.display}</p>
                    <p><strong>Graphics:</strong> ${laptop.graphics}</p>
                    <p><strong>Battery:</strong> ${laptop.battery}</p>
                    <p><strong>Weight:</strong> ${laptop.weight}</p>
                    <p class="price"><strong>Price:</strong></p>
                    <p>- Amazon: ${laptop.price.Amazon}</p>
                    <p>- Flipkart: ${laptop.price.Flipkart}</p>
                `;
                resultsDiv.appendChild(card);
            });
        } else {
            resultsDiv.innerHTML = "<p style='color:red;'>No results found.</p>";
        }
    } catch (error) {
        resultsDiv.innerHTML = "<p style='color:red;'>Failed to fetch data. Please try again.</p>";
    }
});
