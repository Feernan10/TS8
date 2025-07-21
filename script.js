// Validación del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');
  
  let isValid = true;
  
  // Validar nombre
  if (nombre.value.trim() === '') {
    nombre.classList.add('is-invalid');
    isValid = false;
  } else {
    nombre.classList.remove('is-invalid');
  }
  
  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    email.classList.add('is-invalid');
    isValid = false;
  } else {
    email.classList.remove('is-invalid');
  }
  
  // Validar mensaje
  if (mensaje.value.trim() === '') {
    mensaje.classList.add('is-invalid');
    isValid = false;
  } else {
    mensaje.classList.remove('is-invalid');
  }
  
  // Si todo es válido
  if (isValid) {
    alert('Gracias por tu mensaje, ' + nombre.value.trim() + '. Nos pondremos en contacto contigo pronto.');
    this.reset();
  }
});

// Botón de alerta
document.getElementById('btnAlerta').addEventListener('click', function() {
  alert('¡Promoción especial! Martes y jueves 2x1 en todos nuestros cócteles de 6pm a 10pm.');
});

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});