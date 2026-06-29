 async function getWeather() {
    const location = document.getElementById("locationInput").value.trim();

    if (!location) {
        alert("Enter a city name");
        return;
    }

    const apiKey = "3b29415d5278408d8f453302261302";

    // IMPORTANT: use HTTPS, not HTTP
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    console.log("Fetching:", url);

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("API Response:", data);

        if (data.error) {
            alert(data.error.message);
            return;
        }

        document.getElementById("city").innerText =
            data.location.name + ", " + data.location.country;

        document.getElementById("temp").innerText =
            data.current.temp_c + "°C";

        document.getElementById("condition").innerText =
            data.current.condition.text;

        document.getElementById("weatherCard").style.display = "block";

    } catch (error) {
        console.error(error);
        alert("Network or API error");
    }
}
