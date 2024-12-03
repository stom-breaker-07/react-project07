navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Replace 'YOUR_API_KEY' with your actual Google Maps Geocoding API key
    const apiKey = 'AIzaSyAMzRDAiAkW3rucv3gENh7l9xSuQ4sUUoA';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                // The formatted address from the first result
                console.log("Location:", data.results[0].formatted_address);
            } else {
                console.log("No results found for this location.");
            }
        })
        .catch(error => console.error('Error with Geocoding API:', error));
});
