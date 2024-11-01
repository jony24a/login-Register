const form = document.getElementById('formRegister');

// Obtener referencias a los campos del formulario
const nameInput = document.getElementById('nameInput');
const apellidoInput = document.getElementById('apellidoInput');
const emailInput = document.getElementById('emailInput');
const telefonoInput = document.getElementById('telefonoInput');
const direccionInput = document.getElementById('direccionInput');
const ciudadInput = document.getElementById('ciudadInput');

// Obtener referencia al cuerpo de la tabla
const tableBody = document.getElementById('tableBody');

// Obtener datos almacenados o inicializar un array vacío
let data = JSON.parse(localStorage.getItem("formData")) || [];

// Agregar evento de envío al formulario
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener valores de los campos del formulario
    const name = nameInput.value;
    const apellido = apellidoInput.value;
    const email = emailInput.value;
    const telefono = telefonoInput.value;
    const direccion = direccionInput.value;
    const ciudad = ciudadInput.value;

    // Verificar que los campos no estén vacíos
    if (name && apellido && email && telefono && direccion && ciudad) {
        // Crear un objeto con los datos del turista
        const newData = { name, apellido, email, telefono, direccion, ciudad };
        // Agregar el nuevo objeto al array de datos
        data.push(newData);
        // Guardar los datos en el almacenamiento local
        saveDataLocalStorage();
        // Renderizar la tabla con los nuevos datos
        renderTable();
        // Limpiar el formulario
        form.reset();
    }else {
        alert("Todos los campos son obligatorios");
    }
});

// Función para guardar los datos en el almacenamiento local
function saveDataLocalStorage() {
    localStorage.setItem("formData", JSON.stringify(data));
}

// Función para renderizar la tabla con los datos
function renderTable() {
    tableBody.innerHTML = "";

    data.forEach(function (item, index) {
        // Crear elementos para cada fila y celda
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const apellidoCell = document.createElement("td");
        const emailCell = document.createElement("td");
        const telefonoCell = document.createElement("td");
        const direccionCell = document.createElement("td");
        const ciudadCell = document.createElement("td");
        const actionCell = document.createElement("td");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        // Asignar contenido a las celdas
        nameCell.textContent = item.name;
        apellidoCell.textContent = item.apellido;
        emailCell.textContent = item.email;
        telefonoCell.textContent = item.telefono;
        direccionCell.textContent = item.direccion;
        ciudadCell.textContent = item.ciudad;
        editButton.textContent = "Editar";
        deleteButton.textContent = "Borrar";

        editButton.classList.add("button", "button--secundary");
        deleteButton.classList.add("button", "button--terciary");

        editButton.addEventListener("click",function(e){
            editData(index);
        })

        deleteButton.addEventListener("click",function(e){
            deleteData(index);
        })

        // Agregar botones a la celda de acción
        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        // Agregar celdas a la fila
        row.appendChild(nameCell);
        row.appendChild(apellidoCell);
        row.appendChild(emailCell);
        row.appendChild(telefonoCell);
        row.appendChild(direccionCell);
        row.appendChild(ciudadCell);
        row.appendChild(actionCell);

        // Agregar fila a la tabla
        tableBody.appendChild(row);
    });
}

function editData(index){
    const item = data[index];
    nameInput.value = item.name;
    apellidoInput.value = item.apellido;
    emailInput.value = item.email;
    telefonoInput.value = item.telefono;
    direccionInput.value = item.direccion;
    ciudadInput.value = item.ciudad;
    data.splice(index, 1);
    saveDataLocalStorage();
    renderTable();   
}

function deleteData(index){
    data.splice(index, 1);
    saveDataLocalStorage();
    renderTable();
}

// Renderizar la tabla al cargar la página
renderTable();
