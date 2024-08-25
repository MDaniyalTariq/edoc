// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {
      container: "body",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var sidebarToggle = document.getElementById("sidebarToggle");
  var sidebar = document.getElementById("sidebarNav");
  var menuIcon = document.getElementById("menuIcon");
  var closeIcon = document.getElementById("closeIcon");

  function toggleSidebar() {
    var bsCollapse = new bootstrap.Collapse(sidebar, {
      toggle: false,
    });

    if (sidebar.classList.contains("show")) {
      bsCollapse.hide();
      menuIcon.classList.remove("d-none");
      closeIcon.classList.add("d-none");
    } else {
      bsCollapse.show();
      menuIcon.classList.add("d-none");
      closeIcon.classList.remove("d-none");
    }
  }

  sidebarToggle.addEventListener("click", toggleSidebar);

  // Optional: Close sidebar when clicking outside (if needed)
  document.addEventListener("click", function (event) {
    if (
      !sidebar.contains(event.target) &&
      !sidebarToggle.contains(event.target)
    ) {
      var bsCollapse = new bootstrap.Collapse(sidebar, {
        toggle: false,
      });
      bsCollapse.hide();
      menuIcon.classList.remove("d-none");
      closeIcon.classList.add("d-none");
    }
  });

  // Automatically hide/show sidebar on screen resize
  window.addEventListener("resize", function () {
    var bsCollapse = new bootstrap.Collapse(sidebar, {
      toggle: false,
    });

    if (window.innerWidth >= 992) {
      // Adjust the breakpoint based on your layout
      bsCollapse.hide();
      menuIcon.classList.remove("d-none");
      closeIcon.classList.add("d-none");
    } else {
      if (!sidebar.classList.contains("show")) {
        bsCollapse.show();
      }
    }
  });
});
