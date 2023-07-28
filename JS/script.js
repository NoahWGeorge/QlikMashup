

  
  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const sidebar = document.getElementById('sidebar');
    const navItems = document.querySelectorAll('.nav-item');
  
    toggleButton.addEventListener('click', function() {
      sidebar.classList.toggle('active');
      document.body.classList.toggle('sidebar-active');
  
      // Remove the 'active' class from all navigation items when the button is clicked
      navItems.forEach(item => item.classList.remove('active'));
    });
  
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        // Remove the 'active' class from all navigation items
        navItems.forEach(item => item.classList.remove('active'));
  
        // Add the 'active' class to the clicked item
        this.classList.add('active');
  
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
  


  