
const fos = document.getElementById('fos')

fos.addEventListener('show.bs.modal', function(event){
    console.log('Se esta abriendo el modal');

    let boton = event.relatedTarget

    let mensaje = boton.getAttribute('data-titulo')
    let contenido = boton.getAttribute('data-contenido')

    document.getElementById('exampleModalLabel').innerHTML = mensaje
    document.querySelector('.modal-body').innerHTML = contenido
})