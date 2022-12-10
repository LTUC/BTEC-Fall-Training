'use strict';

//  Normal alert:
// alert("Hello it's Satuerday")


//  sweetalert library:
// swal("Hello world!");
// swal("Here's the title!", "...and here's the text!");
// swal("Good job!", "You clicked the button!", "error");

// sweetalert2 library:
// Swal.fire({
//     title: 'Info!',
//     text: 'Do you want to continue',
//     icon: 'info',
//     confirmButtonText: 'Cool'
// })

// Chart JS library:
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});