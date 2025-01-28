document.addEventListener('DOMContentLoaded', () => {
    // Sample data
    const trafficData = [50, 60, 70, 80, 90, 100, 110];
    const weatherData = [22, 23, 21, 24, 25, 26, 27];
    const airQualityData = [40, 50, 60, 70, 80, 90, 100];
    const energyData = [100, 200, 300, 400, 500, 600, 700];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

    // Traffic Update Chart
    new Chart(document.getElementById('trafficChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Traffic Volume',
                data: trafficData,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false
            }]
        }
    });

    // Weather Condition Chart
    new Chart(document.getElementById('weatherChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature (°C)',
                data: weatherData,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        }
    });

    // Air Quality Chart
    new Chart(document.getElementById('airQualityChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Air Quality Index',
                data: airQualityData,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        }
    });

    // Energy Consumption Chart
    new Chart(document.getElementById('energyChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Energy Consumption (kWh)',
                data: energyData,
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        }
    });
});
