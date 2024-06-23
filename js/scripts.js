/*function subscribe() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("phone").value;
  if (name == "" || email == "" || number == "") {
    swal({
      title: "Datos incompletos!",
      text: "Por favor, llena todos los campos para poder registrarte.",
      icon: "error",
    });
  } else {
    Email.send({
      SecureToken: "e572193b-3386-4062-b55e-d5ffc36f2061", // Genera un token de seguridad en smtpjs.com
      To: "diegovegaveguita@gmail.com",
      From: "diego.vega097@gmail.com",
      Subject: "Nuevo usuario registrado",
      Body: `Nombre: ${name} <br/> Email: ${email} <br/> Number: ${number}`,
    })
      .then(
        swal({
          title: "En hora buena!",
          text: "Gracias por registrar tus datos, pronto nos pondremos en contacto contigo.",
          icon: "success",
          button: "Aceptar",
        })
      )
      .catch(console.log("Error"));
    clear();
  }
}*/
function subscribe() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("phone").value;
  if (name == "" || email == "" || number == "") {
    swal({
      title: "Datos incompletos!",
      text: "Por favor, llena todos los campos para poder registrarte.",
      icon: "error",
    });
  } else {
    //var base_url = "https://api.whatsapp.com/send?phone=51970218907&text=";
    var base_url = "https://chat.whatsapp.com/KPE2cUH38msBx4K2MaldgL";
    //var mensaje = "Hola soy " + name + " Mi correo es: " + email + " CEL: " + number + ", me gustaría unirme al grupo de WhatsApp.";
    //var url_final = base_url + encodeURIComponent(mensaje);
    window.open(base_url, '_blank');
    swal({
      title: "En hora buena!",
      text: "Gracias por registrar tus datos, pronto nos pondremos en contacto contigo.",
      icon: "success",
      button: "Aceptar",
    });
    clear();
  }
  
}

function clear() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}


window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Activate SimpleLightbox plugin for portfolio items
  new SimpleLightbox({
    elements: "#portfolio a.portfolio-box",
  });
});
