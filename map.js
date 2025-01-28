document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 19.075984, lng: 72.877656 }, // Centered on Mumbai, India
        zoom: 12
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Sample data for city landmarks, parking, and public transportation
    const landmarks = [
        { name: 'Gateway of India', coords: [18.922, 72.834] },
        { name: 'Marine Drive', coords: [18.944, 72.823] }
    ];

    const parking = [
        { name: 'Parking Lot A', coords: [19.045, 72.876] },
        { name: 'Parking Lot B', coords: [19.030, 72.840] }
    ];

    const publicTransport = [
        { name: 'Bus Stop 1', coords: [19.015, 72.857] },
        { name: 'Metro Station 1', coords: [19.077, 72.885] }
    ];

    // Add markers for each category
    landmarks.forEach(landmark => {
        L.marker(landmark.coords).addTo(map)
            .bindPopup(`<b>${landmark.name}</b>`).openPopup();
    });

    parking.forEach(parkingLot => {
        L.marker(parkingLot.coords).addTo(map)
            .bindPopup(`<b>${parkingLot.name}</b>`);
    });

    publicTransport.forEach(transport => {
        L.marker(transport.coords).addTo(map)
            .bindPopup(`<b>${transport.name}</b>`);
    });

    // Add a filter UI
    const filterContainer = document.createElement('div');
    filterContainer.className = 'absolute top-4 left-4 bg-white p-4 rounded shadow-md';
    filterContainer.innerHTML = `
        <label class="block mb-2">
            <input type="checkbox" id="landmarks-checkbox" class="mr-2"> Landmarks
        </label>
        <label class="block mb-2">
            <input type="checkbox" id="parking-checkbox" class="mr-2"> Parking
        </label>
        <label class="block">
            <input type="checkbox" id="public-transport-checkbox" class="mr-2"> Public Transport
        </label>
    `;
    document.body.appendChild(filterContainer);

    // Filter markers based on checkbox
    const landmarksCheckbox = document.getElementById('landmarks-checkbox');
    const parkingCheckbox = document.getElementById('parking-checkbox');
    const publicTransportCheckbox = document.getElementById('public-transport-checkbox');

    const toggleMarkers = () => {
        landmarks.forEach(landmark => {
            const marker = L.marker(landmark.coords).addTo(map)
                .bindPopup(`<b>${landmark.name}</b>`);
            if (!landmarksCheckbox.checked) {
                map.removeLayer(marker);
            }
        });

        parking.forEach(parkingLot => {
            const marker = L.marker(parkingLot.coords).addTo(map)
                .bindPopup(`<b>${parkingLot.name}</b>`);
            if (!parkingCheckbox.checked) {
                map.removeLayer(marker);
            }
        });

        publicTransport.forEach(transport => {
            const marker = L.marker(transport.coords).addTo(map)
                .bindPopup(`<b>${transport.name}</b>`);
            if (!publicTransportCheckbox.checked) {
                map.removeLayer(marker);
            }
        });
    };

    landmarksCheckbox.addEventListener('change', toggleMarkers);
    parkingCheckbox.addEventListener('change', toggleMarkers);
    publicTransportCheckbox.addEventListener('change', toggleMarkers);
});
