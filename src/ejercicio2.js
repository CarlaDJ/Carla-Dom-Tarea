function añadirFilas() {
    let table = document.getElementById("probandoTabla");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = "1";
    cell2.innerHTML = "2";
    cell3.innerHTML = "3";
    cell4.innerHTML = "4";
}





/*function agregarFila(){
    let tabla = document.getElementById("probandoTabla");
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");

    for (let i=0; i<=4; i++) {
        let td = document.createElement("td");
        tr.appendChild(td);               
    }          
    tbody.appendChild(tr);
    tabla.appendChild(tbody);	
}

document.getElementById("probandoTabla").addEventListener("click", agregarFila);*/

//FORMA MAS CORRECTA

/*let newRow = document.createElement("tr");
let newColumn;
for(i=0;i<=4; i++){
    newColumn = document.createElement("td");
    newRow.appendChild(newColumn);
}
*/



