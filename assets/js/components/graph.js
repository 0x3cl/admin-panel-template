export function site_visitor_graph() {
    const ctx = $('canvas#site-visitor');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              label: 'Total Visitors',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)', 
              borderWidth: 1 
            }]
        },
        options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
        }
    })
}