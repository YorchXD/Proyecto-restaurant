function verFormComuniquemonos() {
    $('#comuniquemonos').show()
    $('#reserva').hide()
}

function verFormReserva() {
    $('#comuniquemonos').hide()
    $('#reserva').show()
}

/*-------------Validacion formulario comuniquemonos-------------*/

$('#comuniquemonos').on('submit',function (event) {
    let validated = false
    event.preventDefault()// evita que el formulario se envíe automáticamente
    if (!this.checkValidity()) {

        // Validación de nombre
        if ($('#nombreCom').val() === '') {
            alert('Por favor, ingrese su nombre.')
        }

        // Validación de correo electrónico
        else if ($('#correoCom').val() === '') {
            alert('Por favor, ingrese su correo electrónico.')
        }

        // Validación de telefono
        else if ($('#telefonoCom').val() === '') {
            alert('Por favor, ingrese su teléfono.')
        }

        // Validación de motivo
        else if ($('#motivoCom').val() === '') {
            alert('Por favor, seleccione el motivo.')
        }
        // Validación de descripcion del motivo
        else if ($('#descripcionMotivoCom').val() === '') {
            alert('Por favor, ingrese la descripción del motivo.')
        }
    }
    else
    {
        // Si todo está bien, enviar el formulario
        alert(`Muchas gracias ${$('#nombreCom').val()}, hemos recibido tu sugerencia y enviaremos una pronta respuesta al correo ${$('#correoCom').val()}.`)
        validated = true
    }

    $('#comuniquemonos').addClass('was-validated')
    return validated
})


/*-------------Validacion formulario reserva-------------*/


$('#reserva').on('submit', function (event) {
    let validated = false
    event.preventDefault()// evita que el formulario se envíe automáticamente
    if (!this.checkValidity()) 
    {
        // Validación de nombre
        if ($('#nombreReserva').val() === '') {
            alert('Por favor, ingrese su nombre.')
        }

        // Validación de correo electrónico
        else if ($('#correoReserva').val() === '') {
            alert('Por favor, ingrese su correo electrónico.')
        }

        // Validación de telefono
        else if ($('#telefonoReserva').val() === '') {
            alert('Por favor, ingrese su teléfono.')
        }

        // Validación de motivo
        else if ($('#fechaReserva').val() === '') {
            alert('Por favor, seleccione la fecha de la reserva.')
        }
        // Validación de descripcion del motivo
        else if ($('#horaReserva').val() === '') {
            alert('Por favor, ingrese la hora de la reserva.')
        }
        // Validación de descripcion del motivo
        else if ($('#asistentesReserva').val() === '') {
            alert('Por favor, ingrese la cantidad de asistente de la reserva.')
        }
    }
    else
    {
        // Si todo está bien, enviar el formulario
        alert(`Estimado/a ${$('#nombreReserva').val()} agradecemos su reserva con nosotros. Hemos registrado ${$('#asistentesReserva').val()} asistentes. Se ha enviado un código de confirmación al correo ${$('#correoReserva').val()}.\nGracias por preferirnos.`)
        validated = true
    }

    $('#reserva').addClass('was-validated')
    return validated
})


const hoy = new Date()
const maniana = new Date(hoy.getTime() + 24 * 60 * 60 * 1000)
const manianaFormateado = maniana.toISOString().split('T')[0]
$('#fechaReserva').attr('min', manianaFormateado);



$('#bebidas').click(function() {
    const titulo = $('#titulo-gaseosa').text();
    const texto = $('#texto-gaseosa').text();
    // Muestra la imagen en la ventana modal
    $('#image-modal-content').attr('src', $(this).attr('src'));
    $('#image-modal-title').text(titulo);
    $('#image-modal-text').text(texto);
    $('#image-modal').show();
  });

$('#tablas').click(function() {
    const titulo = $('#titulo-tablas').text();
    const texto = $('#texto-tablas').text();
    // Muestra la imagen en la ventana modal
    $('#image-modal-content').attr('src', $(this).attr('src'));
    $('#image-modal-title').text(titulo);
    $('#image-modal-text').text(texto);
    $('#image-modal').show();
  });

$('#shop').click(function() {
    const titulo = $('#titulo-shop').text();
    const texto = $('#texto-shop').text();
    // Muestra la imagen en la ventana modal
    $('#image-modal-content').attr('src', $(this).attr('src'));
    $('#image-modal-title').text(titulo);
    $('#image-modal-text').text(texto);
    $('#image-modal').show();
  });

  $('#close-modal').click(function() {
    $('#image-modal').hide();
  });

  $(document).ready(function() {
    $('#image-modal').hide();
  });