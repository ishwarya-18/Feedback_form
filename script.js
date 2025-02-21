document.getElementById("feedbackForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    const comments = document.getElementById("feedback").value.trim();
    const submitButton = document.getElementById("submitBtn");

    if (!rating) {
        alert("Please select a rating.");
        return;
    }

    submitButton.disabled = true;
    submitButton.innerText = "Submitting...";

    try {
        const response = await fetch("/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, rating, comments }),
        });

        const data = await response.json();

        if (data.success) {
            alert("Feedback submitted successfully!");
            document.getElementById("feedbackForm").reset();
        } else {
            alert("Error submitting feedback.");
        }
    } catch (error) {
        alert("Server error. Try again later.");
    }

    submitButton.disabled = false;
    submitButton.innerText = "Submit Feedback";
});
