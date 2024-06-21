$(document).ready(function () {

  $('#contactForm').submit(function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Get form input values
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var title = $('#title').val();
    var message = $('#message').val();

    // Display confirmation message
    $('#confirmationMessage').show();
    // Optionally, you can reset the form after submission
    // $('#contactForm').trigger('reset');
  });


  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    loop: true,
    effect: 'coverflow',
    autoplay: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      }
    }
  });

  ///////////////////////// WOW Animation ////////////////////////////////


  var wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: false,      // default
    }
  )
  wow.init();

// Chart Initialization
try {
  


  // Bar Chart
  const barCtx = document.getElementById('barChart');
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['A', 'B', 'AB', 'O'],
      datasets: [{
        label: ' Average Montly Registrations', 
        data: [20, 15, 25, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Dark Red
          'rgba(54, 162, 235, 0.6)', // Dark Blue
          'rgba(255, 206, 86, 0.6)', // Dark Orange
          'rgba(75, 192, 192, 0.6)' // Dark Green
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // Dark Red
          'rgba(54, 162, 235, 1)', // Dark Blue
          'rgba(255, 206, 86, 1)', // Dark Orange
          'rgba(75, 192, 192, 1)' // Dark Green
        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Donor Registrations',
          color: 'darkred', // Dark Red
          font: {
            family: '"Times New Roman", Times, serif',
            size: 24
          }
        },
        legend: {
          display: true,
          labels: {
            color: 'darkred', // Dark Red
            font: {
              family: '"Times New Roman", Times, serif',
              size: 16
            }
          }
        },
        tooltip: {
          enabled: true
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: 'darkred' // Dark Red
          }
        },
        x: {
          ticks: {
            color: 'darkred' // Dark Red
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });

  // Line Chart
  const lineCtx = document.getElementById('lineChart');
  new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Blood Donations',
        data: [50, 60, 70, 65, 75, 80],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)', // Dark Green
        tension: 0.1
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Monthly Blood Donations',
          color: 'darkred', // Dark Red
          font: {
            family: '"Times New Roman", Times, serif',
            size: 24
          }
        },
        legend: {
          display: true,
          labels: {
            color: 'darkred', // Dark Red
            font: {
              family: '"Times New Roman", Times, serif',
              size: 16
            }
          }
        },
        tooltip: {
          enabled: true
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            color: 'darkred' // Dark Red
          }
        },
        x: {
          ticks: {
            color: 'darkred' // Dark Red
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });

  // Pie Chart
  const pieCtx = document.getElementById('pieChart');
  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: ['A', 'B', 'AB', 'O'],
      datasets: [{
        label: 'Blood Bags Available',
        data: [30, 20, 25, 25],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Dark Red
          'rgba(54, 162, 235, 0.6)', // Dark Blue
          'rgba(255, 206, 86, 0.6)', // Dark Orange
          'rgba(75, 192, 192, 0.6)' // Dark Green
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // Dark Red
          'rgba(54, 162, 235, 1)', // Dark Blue
          'rgba(255, 206, 86, 1)', // Dark Orange
          'rgba(75, 192, 192, 1)' // Dark Green
        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Blood Bags Available',
          color: 'darkred', // Dark Red
          font: {
            family: '"Times New Roman", Times, serif',
            size: 24
          }
        },
        legend: {
          display: true,
          labels: {
            color: 'darkred', // Dark Red
            font: {
              family: '"Times New Roman", Times, serif',
              size: 16
            }
          }
        },
        tooltip: {
          enabled: true
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

catch (error) {
  console.error("An error occurred while initializing the chart:", error);
}

});
