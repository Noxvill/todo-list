// capturando elementos del dom

const spantotal = document.querySelector(".spantotal")
const spanrealizadas = document.querySelector(".spanrealizadas")
const ultask = document.querySelector(".ultask")
// const totaltaskdone = document.querySelector(".totaltaskdone")
const tarea = document.querySelector(".tarea")
const btnadd = document.querySelector(".btnadd")
const chkbx = document.querySelector(".chkbx")


// Función para crear número aleatorio

function randomnumberint(min, max) {
    min = Math.ceil(1);
    max = Math.floor(100);
    return Math.floor(Math.random() * (100 - 1) + 1);
  }

// Definiendo Array

let tareas = [

{

    id:"01",
    name:"Silvar",
    done:false

},

{

    id:"02",
    name:"Correr",
    done:true

},
{

    id:"03",
    name:"Dormir",
    done:false

},

]

// Función para renderizar el Li con los datos del objeto

const renderlitask = (id, name, done) => (

`<li>
<pan>${id}</pan>,
<pan>${name}</pan>,
<pan>${done}</pan>,

<input id="chkbx" type="checkbox" onclick="markasdonetask('${id}')">${done ? "Marcar como no realizada":"Marcar como Realizada" }</input>
<button type="button" class="btn-close text-danger" aria-label="Close" onclick="deletetask('${id}')"></button>

</li>`
)

// Función para agregar tarea al arreglo

const addtask = () => {

if (tarea.value != ""){
     tareas.push(
{
    id: randomnumberint(),
    name: tarea.value,
    done: false
}
  )

  alert("La tarea: " + "'" + tarea.value + "'" + " fue agregada con éxito")
  tarea.value=''
  rendertask()

} else{

alert("El campo está vacío")

}}

// Agregando addEventListener al botón "Agregar" del formulario
btnadd.addEventListener('click', addtask)

// Función para eliminar tarea
const deletetask =(idtaskdelete)=>{
    if(confirm("Está seguro que desea eliminar esta tarea?")){
tareas = tareas.filter((tarea) => tarea.id != idtaskdelete) 
rendertask()
    }

}

// Función para marcar una tarea como realizada
const markasdonetask=(idtaskdone)=>{

const tasktomark = tareas.filter((tarea)=> tarea.id == idtaskdone)
const tasknotmarked = tareas.filter((tarea)=> tarea.id != idtaskdone)

if(idtaskdone.length>0){

tasktomark[0].done=!tasktomark[0].done
tareas=[...tasktomark,...tasknotmarked]

}

rendertask()

}

// Función para renderizar tareas en form

const rendertask = () =>{
// alert("estiy dentro de rendeertask")
tareas = tareas.sort((a,b) => a.name.localeCompare(b.name));
ultask.innerHTML=""
for (mytask in tareas){

ultask.innerHTML+=renderlitask(


    tareas[mytask].id,
    tareas[mytask].name,
    tareas[mytask].done 
    
    // alert("estoy dentro de li")
)

}

spantotal.innerHTML = tareas.length
spanrealizadas.innerHTML= tareas.filter((mytask) => mytask.done==true).length

};

rendertask()