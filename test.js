function changeBorderColor(clickedButton) {
    var buttons = document.querySelectorAll('.button');
  
    // Remove 'active' class from all buttons
    buttons.forEach(button => {
      button.classList.remove('active');
    });
  
    // Add 'active' class to the clicked button
    clickedButton.classList.add('active');
  }
  