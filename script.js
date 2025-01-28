document.addEventListener('DOMContentLoaded', () => {
    // Fetch pollution data
    fetch('/api/pollution')
        .then(response => response.json())
        .then(data => {
            document.getElementById('pollution-data').innerText = JSON.stringify(data);
        });

    // Fetch road management data
    fetch('/api/road')
        .then(response => response.json())
        .then(data => {
            document.getElementById('road-data').innerText = JSON.stringify(data);
        });

    // Real-time data visualization (example using Chart.js)
    const ctx = document.getElementById('data-chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
                label: 'Sample Data',
                data: [10, 20, 30, 40],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
    
});
