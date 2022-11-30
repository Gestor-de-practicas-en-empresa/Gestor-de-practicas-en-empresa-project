/*Login*/
// Clickear en Profesor o alumno para cambiar y ver el efecto
    function cambiar_login() {
        document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
    document.querySelector('.cont_form_login').style.display = "block";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";               
    
    setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
        
    setTimeout(function(){    
    document.querySelector('.cont_form_sign_up').style.display = "none";
    },200);  
        }
    
    function cambiar_sign_up(at) {
        document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
        document.querySelector('.cont_form_sign_up').style.display = "block";
    document.querySelector('.cont_form_login').style.opacity = "0";
        
    setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
    },100);  
    
    setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
    },400);  
    
    
    }    
    
    function ocultar_login_sign_up() {
    
    document.querySelector('.cont_forms').className = "cont_forms";  
    document.querySelector('.cont_form_sign_up').style.opacity = "0";               
    document.querySelector('.cont_form_login').style.opacity = "0"; 
    
    setTimeout(function(){
    document.querySelector('.cont_form_sign_up').style.display = "none";
    document.querySelector('.cont_form_login').style.display = "none";
    },500);  
        
        }


//Validación del formulario profesores
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    //Show input error messages
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }

    //show success colour
    function showSucces(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    //check email is valid
    function checkEmail(input) {
        const re = /profesor.com/;
        if(re.test(input.value.trim())) {
            showSucces(input)
        }else {
            showError(input,'El correo no es valido');
        }
    }

    //checkRequired fields
    function checkRequired(inputArr) {
        inputArr.forEach(function(input){
            if(input.value.trim() === ''){
                showError(input,`${getFieldName(input)} es obligatorio`)
            }else {
                showSucces(input);
            }
        });
    }


    //check input Length
    function checkLength(input, min ,max) {
        if(input.value.length < min) {
            showError(input, `${getFieldName(input)} tiene que contener ${min} caracteres`);
        }else if(input.value.length > max) {
            showError(input, `${getFieldName(input)} tiene que contener ${max} caracteres`);
        }else {
            showSucces(input);
        }
    }

    //get FieldName
    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    //Event Listeners
    form.addEventListener('submit',function(e) {
        //e.preventDefault();
        checkRequired([email, password]);
        checkLength(password,6,25);
        checkEmail(email);
        checkPasswordMatch(password);
        window.open('../listadoprofesor.html');
    });

//Validación del formulario alumnos
    const form1 = document.getElementById('form1');
    const email1 = document.getElementById('email1');
    const password1 = document.getElementById('password1');

    //Show input error messages
    function showError(input, message) {
        const formControl1 = input.parentElement;
        formControl1.className = 'form-control error';
        const small = formControl1.querySelector('small');
        small.innerText = message;
    }

    //show success colour
    function showSucces(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    //check email is valid
    function checkEmail1(input) {
        const re = /alumno.com/;
        if(re.test(input.value.trim())) {
            showSucces(input)
        }else {
            showError(input,'El correo no es valido');
        }
    }


    //checkRequired fields
    function checkRequired1(inputArrr) {
        inputArrr.forEach(function(input){
            if(input.value.trim() === ''){
                showError(input,`${getFieldName(input)} es obligatorio`)
            }else {
                showSucces(input);
            }
        });
    }


    //check input Length
    function checkLength1(input, min ,max) {
        if(input.value.length < min) {
            showError(input, `${getFieldName(input)} tiene que contener ${min} caracteres`);
        }else if(input.value.length > max) {
            showError(input, `${getFieldName(input)} tiene que contener ${max} caracteres`);
        }else {
            showSucces(input);
        }
    }

    //get FieldName
    function getFieldName1(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    //Validación
    function validar() {
        checkRequired1([email1, password1]);
        checkLength1(password1,6,25);
        checkEmail1(email1);
        checkPasswordMatch1(password1);
        window.open('../indexalumno.html');
    };

/*Login*/

/*Tabla seguimiento Alumno*/
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var date=document.getElementById("date_row"+no);
 var pract=document.getElementById("pract_row"+no);
 var hour=document.getElementById("hour_row"+no);
 var act=document.getElementById("act_row"+no);
 var obser=document.getElementById("obser_row"+no);
	
 var date_data=date.innerHTML;
 var pract_data=pract.innerHTML;
 var hour_data=hour.innerHTML;
 var act_data=act.innerHTML;
 var obser_data=obser.innerHTML;
	
 date.innerHTML="<input type='text' id='date_text"+no+"' value='"+date_data+"'>";
 pract.innerHTML="<input type='text' id='pract_text"+no+"' value='"+pract_data+"'>";
 hour.innerHTML="<input type='text' id='hour_text"+no+"' value='"+hour_data+"'>";
 act.innerHTML="<input type='text' id='act_text"+no+"' value='"+act_data+"'>";
 obser.innerHTML="<input type='text' id='obser_text"+no+"' value='"+obser_data+"'>";
}


function save_row(no)
{
 var date_val=document.getElementById("date_text"+no).value;
 var pract_val=document.getElementById("pract_text"+no).value;
 var hour_val=document.getElementById("hour_text"+no).value;
 var act_val=document.getElementById("act_text"+no).value;
 var obser_val=document.getElementById("obser_text"+no).value;

 document.getElementById("date_row"+no).innerHTML=date_val;
 document.getElementById("pract_row"+no).innerHTML=pract_val;
 document.getElementById("hour_row"+no).innerHTML=hour_val;
 document.getElementById("act_row"+no).innerHTML=act_val;
 document.getElementById("obser_row"+no).innerHTML=obser_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}
/*Tabla seguimiento Alumno*/

/*Menu*/
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else
    sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}

let buttons = document.querySelectorAll(".button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    e.preventDefault();

    let overlay = document.createElement('span');
    overlay.classList.add("overlay");
    e.target.appendChild(overlay);

    let xValue = e.clientX - e.target.offsetLeft;
    let yValue = e.clientY - e.target.offsetTop;

    overlay.style.left = xValue + "px";
    overlay.style.top = yValue + "px";
  });
}
/*Menu*/

/*Añadir alumno a profesor*/
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
const idImput=document.querySelector('#dni');
const btnAgregar=document.querySelector('#btnAgregar');

formulario.addEventListener('submit',validarFormulario); 

function validarFormulario(e){ // 
    e.preventDefault(); // para q no se ejecute de forma automatica

    if(nombreImput.value== '' || apellidoImput.value== '' || idImput.value==''){
        alert('todos los campos son obligatorios');
        return;
    }

    if(editando){ // true 
       editarAlumno();
       editando=false;
    }else{
        objAlumno.id=Date.now(); //tiempo en milisegundos
        objAlumno.nombre=nombreImput.value;
        objAlumno.id=idImput.value;
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
/*Añadir alumno a profesor*/
