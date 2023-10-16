// Initialize arrays to store selected options for both players
const player1Options = [];
const player2Options = [];

// Function to handle the behavior on the second page (Player 1's answers page)
function handlePlayer1Page() {
    // Add event listener to the submit button
    document.querySelector("#player1Form button").addEventListener("click", function () {
        // Collect selected options for Player 1
        const selectedOptions = document.querySelectorAll("#player1Form input[type=radio]:checked");
        
        // Store selected options in the player1Options array
        selectedOptions.forEach(function (option) {
            player1Options.push(option.value);
        });

        // Redirect to the next page (index3.html) when done
        window.location.href = "./index3.html";
    });
}

// Function to handle the behavior on the third page (Player 2's answers page)
function handlePlayer2Page() {
    // Add event listener to the submit button
    document.querySelector("#player2Form button").addEventListener("click", function () {
        // Collect selected options for Player 2
        const selectedOptions = document.querySelectorAll("#player2Form input[type=radio]:checked");

        // Store selected options in the player2Options array
        selectedOptions.forEach(function (option) {
            player2Options.push(option.value);
        });

        // Redirect to the next page (index4.html) when done
        window.location.href = "./index4.html";
    });
}

// Function to handle the behavior on the fourth page (Venn diagram page)
function handleVennDiagramPage(player1Options, player2Options) {
    // Create a Venn diagram dataset

    // Create a Venn diagram dataset
    const dataset = venn.venn(player1Options, player2Options);

    // Configure the Venn diagram
    const chart = venn.drawD3Diagram(d3.select("#venn-container"), dataset, 300, 300);

    // You can customize the appearance and labels of the Venn diagram as needed.
}

// Determine which page is currently loaded and call the appropriate function
window.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname;

    if (currentPage.includes("index2.html")) {
        handlePlayer1Page();
    } else if (currentPage.includes("index3.html")) {
        handlePlayer2Page();
    } else if (currentPage.includes("index4.html")) {
        handleVennDiagramPage(player1Options, player2Options);
    }
});

