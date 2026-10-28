document.getElementById("testButton").addEventListener("click", async () => {
    const result = document.getElementById("testResult");

    result.textContent = "Checking application...";

    try {
        const response = await fetch("/health");

        if (!response.ok) {
            throw new Error("Health check failed");
        }

        const data = await response.json();
        result.textContent = `Application status: ${data.status}`;
    } catch (error) {
        result.textContent = "Unable to check application status.";
    }
});
