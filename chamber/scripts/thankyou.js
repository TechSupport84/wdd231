        // Retrieve form data from the URL
        const params = new URLSearchParams(window.location.search);
        document.getElementById("first-name").textContent = params.get("first-name") || "N/A";
        document.getElementById("last-name").textContent = params.get("last-name") || "N/A";
        document.getElementById("email").textContent = params.get("email") || "N/A";
        document.getElementById("phone").textContent = params.get("phone") || "N/A";
        document.getElementById("business").textContent = params.get("business") || "N/A";
        document.getElementById("timestamp").textContent = params.get("timestamp") || "N/A";