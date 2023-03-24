
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
            event.preventDefault()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Gracias por tu tiempo, nuestro equipo estará comunicandose contigo para brindarte información',
                showConfirmButton: false,
                timer: 3000
              }).then(function() {
                location.reload()
              });
        }
        form.classList.add('was-validated')
  
      }, false)
    })
    
    // const buttonSubmit = document.getElementById('btnSubmit')
    // buttonSubmit.addEventListener('click', event => {
    //       event.preventDefault()
    //       console.log("🚀 ~ file: index.js:23 ~ event:", event)
        //   Swal.fire({
        //       position: 'top-end',
        //       icon: 'success',
        //       title: 'Gracias por tu tiempo, nuestro equipo estará comunicandose contigo para brindarte información',
        //       showConfirmButton: false,
        //       timer: 1500
        //     })
    //   })

  })()

