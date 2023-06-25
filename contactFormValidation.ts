function validateForm() {
    const phoneInput = document.querySelector('input[name="phone"]') as HTMLInputElement;
    const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
    const messageInput = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
  
    const phoneRegex = /^[0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    let isValid = true;
  
    if (!phoneRegex.test(phoneInput.value)) {
      phoneInput.classList.add('error');
      isValid = false;
    } else {
      phoneInput.classList.remove('error');
    }
  
    if (!emailRegex.test(emailInput.value)) {
      emailInput.classList.add('error');
      isValid = false;
    } else {
      emailInput.classList.remove('error');
    }
  
    if (messageInput.value.trim().length < 10) {
        messageInput.classList.add('error');
        isValid = false;
      } else {
        messageInput.classList.remove('error');
      }
  
    return isValid;
  }
  