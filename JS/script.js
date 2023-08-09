

  
  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const sidebar = document.getElementById('sidebar');
    const navItems = document.querySelectorAll('.nav-item');
    const toggleArrow = document.getElementById('navArrow');
  
    toggleButton.addEventListener('click', function() {
      sidebar.classList.toggle('active');
      toggleButton.classList.toggle('active');
      toggleArrow.classList.toggle('active');
      document.body.classList.toggle('sidebar-active');
  
      
    });
  
    navItems.forEach(item => {
      item.addEventListener('click', function() {
    
        // If the clicked item already has the 'active' class, remove it.
        // Otherwise, remove the 'active' class from all other items and add it to the clicked item.
        if (this.classList.contains('active')) {
          this.classList.remove('active');
        } else {
          navItems.forEach(item => item.classList.remove('active'));
          this.classList.add('active');
        }
    
        // Hide the sidebar when a navigation item is clicked (only for small screens)
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('active');
          document.body.classList.remove('sidebar-active');
        }
      });
    });
  
    // Hide the sidebar when the window is resized (only for small screens)
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-active');
      }
    });
  });
  


  