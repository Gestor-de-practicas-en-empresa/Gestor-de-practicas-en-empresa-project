let listaAlumnos=[]; //creamos array
const objAlumno={ //creamos objeto alumno
    id:'',
    nombre:'',
    apellido:''
}

let editando=false; //cuando tiene q agregar y cuando tiene q actualizar la info

const formulario=document.querySelector('#formulario');
const nombreImput=document.querySelector('#nombre');
const apellidoImput=document.querySelector('#apellido');
const btnAgregar=document.querySelector('#btnAgregar');

formulario.addEventListener('submit',validarFormulario); 

function validarFormulario(e){ // 
    e.preventDefault(); // para q no se ejecute de forma automatica

    if(nombreImput.value== '' || apellidoImput.value== ''){
        alert('todos los campos son obligatorios');
        return;
    }

    if(editando){ // true 
       editarAlumno();
       editando=false;
    }else{
        objAlumno.id=Date.now(); //tiempo en milisegundos
        objAlumno.nombre=nombreImput.value;
        objAlumno.apellido=apellidoImput.value;

        agregarAlumno();
    }
}

function agregarAlumno(){

    listaAlumnos.push({...objAlumno}); // para copiar el objeto Alumno
    mostrarAlumnos();
    formulario.reset(); //limpia los imputs
    limpiarObjeto();
   
    }
    function limpiarObjeto(){ // limpia formulario 
        objAlumno.id='';
        objAlumno.nombre='';
        objAlumno.apellido='';
}

function mostrarAlumnos(){
    limpiarHTML();
    const divAlumnos=document.querySelector('.div-alumnos');
  // recorrer la lista 
    listaAlumnos.forEach(alumno=> {
        const{id,nombre,apellido} = alumno;
        const parrafo=document.createElement('p');
        parrafo.textContent= `${id} - ${nombre} - ${apellido} -`;
        parrafo.dataset.id= id; //identificar el parrafo q hay q eliminiar o actualizar
        //botones
        //boton editar
        const editarBoton=document.createElement('button');
        editarBoton.onclick=()=>cargarAlumno(alumno); 
        editarBoton.textContent='Editar';
        editarBoton.classList.add('btn','btn-editar');
        parrafo.append(editarBoton);

        //boton eliminar 
        const eliminarBoton=document.createElement('button');
        eliminarBoton.onclick=()=>eliminarAlumno(id);
        eliminarBoton.textContent='Eliminar';
        eliminarBoton.classList.add('btn','btn-eliminar');
        parrafo.append(eliminarBoton);
        const hr=document.createElement('hr');
        divAlumnos.appendChild(parrafo);
        divAlumnos.appendChild(hr);
    });
}



function cargarAlumno(alumno){
    const {id,nombre,apellido}=alumno;
    nombreImput.value=nombre;
    apellidoImput.value=apellido;
    objAlumno.id=id;
    formulario.querySelector('button[type="submit"]').textContent='Actualizar';
    editando=true;
}

function editarAlumno(){
    objAlumno.nombre=nombreImput.value;
    objAlumno.apellido=apellidoImput.value;

    listaAlumnos.map(alumno =>{
        if(alumno.id == objAlumno.id){
            alumno.id=objAlumno.id;
            alumno.nombre=objAlumno.nombre;
            alumno.apellido=objAlumno.apellido;

        }
    });
    limpiarHTML();
    mostrarAlumnos();
    formulario.reset();
    formulario.querySelector('button[type="submit"]').textContent='Agregar';
    editando=false;
}

function eliminarAlumno(id){
    listaAlumnos=listaAlumnos.filter(alumno =>alumno.id !== id);

    limpiarHTML();
    mostrarAlumnos();
}

function limpiarHTML(){
    const divAlumnos=document.querySelector('.div-alumnos');
    while(divAlumnos.firstChild){
        divAlumnos.removeChild(divAlumnos.firstChild); // mientras el contenedor tenga hijos los va a ir eliminando de 1 en 1 
    }
}

