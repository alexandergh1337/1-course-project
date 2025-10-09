document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var scrollBtn = document.getElementById('scrollBtn');
      if (document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.style.display = 'none';
      }
    });

    document.getElementById('scrollBtn').addEventListener('click', function() {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
});

if (localStorage.getItem('counter')) {
    var count = parseInt(localStorage.getItem('counter'));
    count += 1;
    localStorage.setItem('counter', count);
} else {
    localStorage.setItem('counter', 1);
}

document.write('ПОСЕЩЕНИЙ: ' + localStorage.getItem('counter'));

document.addEventListener("DOMContentLoaded", function () {
  function openModal() {
    document.getElementById("modal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    openModal();
    this.reset();
  });

  document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target.classList.contains("close")) {
      closeModal();
    }
  });
});

function openImage(imageUrl) {
  var modal = document.getElementById("image-modal1");
  var modalImage = document.getElementById("modal-image1");

  modal.style.display = "block";
  modalImage.src = imageUrl;
}

function closeImageModal() {
  var modal = document.getElementById("image-modal1");
  modal.style.display = "none";
}


