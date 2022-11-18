

function eliminar(del){
let newDeletecell = newTransactionRowRef.insertCell(7);
let deleteButton = document.createElement('button');
deleteButton.textContent = "Eliminar";
deleteButton.addEventListener("click",(event) => {
    event.target.parentNode.parentNode.remove()
})
}