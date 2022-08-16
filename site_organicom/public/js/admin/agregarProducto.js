let qs = (selector) => document.querySelector(selector)

window.addEventListener("load", ()=>{

    let form = qs("form"),
        nombre = qs("#nombre"),
        precio = qs("#precio"),
        categoria = qs("#categoria"),
        marca = qs("#marca"),
        origen =qs("#origen")
    
    nombre.addEventListener("blur", ()=>{
        switch (true) {

            case nombre.value.length === 0:
                errorNombre.innerHTML = "Este campo es OBLIGATORIO"  
                errores = true  
                break;

            case nombre.value.length <= 1:
                errorNombre.innerHTML = "Debes escribir 2 o más caracteres"   
                errores = true 
                break;
        
            default:
                errorNombre.innerHTML = '';
                errores = false
                break;
        }
    })
    precio.addEventListener("blur", ()=>{
        switch (true) {

            case precio.value.length === 0:
                errorPrecio.innerHTML = "Este campo es OBLIGATORIO"   
                errores = true 
                break;

            case precio.value.length <= 1:
                errorprecio.innerHTML = "Debes escribir 2 o más caracteres"   
                errores = true 
                break;
        
            default:
                errorPrecio.innerHTML = '';
                errores = false
                break;
        }
    })

    categoria.addEventListener("blur", ()=>{
        switch (true) {

            case categoria.value.length == "":
                errorCategoria.innerHTML = "Seleccione una categoria"  
                errores = true  
                break;
        
            default:
                errorCategoria.innerHTML = '';
                errores = false
                break;

        }
    })

    origen.addEventListener("blur", ()=>{
        switch (true) {

            case origen.value.length == "":
                errorOrigen.innerHTML = "Seleccione un origen"  
                errores = true  
                break;
        
            default:
                errorOrigen.innerHTML = '';
                errores = false
                break;
        }
    })

    marca.addEventListener("blur", ()=>{
        switch (true) {

            case marca.value.length == "":
                errorMarca.innerHTML = "Seleccione una marca"
                errores = true    
                break;
        
            default:
                errorMarca.innerHTML = '';
                errores = false
                break;
        }
    })

})
