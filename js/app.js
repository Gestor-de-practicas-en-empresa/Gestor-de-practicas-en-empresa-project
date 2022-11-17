

function eliminar(del){
let newDeletecell = newTransactionRowRef.insertCell(4);
let deleteButton = document.createElement('button');
deleteButton.textContent = "Eliminar";
deleteButton.addEventListener("click",(event) => {
    event.target.parentNode.parentNode.remove()
})
}