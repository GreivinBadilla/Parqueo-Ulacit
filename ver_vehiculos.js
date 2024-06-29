
function guardar_vehiculo(vehiculo) {
    
    const vehiculosGuardados = obtener_vehiculos_guardados();
    const placaExistente = vehiculosGuardados.some(v => v.placa === vehiculo.placa);

    if (placaExistente) {
        alert("Ya existe un vehículo registrado con esa placa.");
        return false; 
    }


    let id = parseInt(localStorage.getItem("ultimo_id_vehiculo")) || 0;
    id++;

    const key = "vehiculo_" + id;
    localStorage.setItem(key, JSON.stringify(vehiculo));

   
    localStorage.setItem("ultimo_id_vehiculo", id.toString());

    alert("Vehículo registrado correctamente.");
    return true; 
}


function obtener_vehiculos_guardados() {
    const vehiculos = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("vehiculo_")) {
            const vehiculo = JSON.parse(localStorage.getItem(key));
            vehiculos.push(vehiculo);
        }
    }
    return vehiculos;
}


function obtener_datos_vehiculo() {
    let marca = document.getElementById('marca').value;
    let color = document.getElementById('color').value;
    let placa = document.getElementById('placa').value;
    let tipo = document.getElementById('tipo').value;
    let dueño = document.getElementById('dueño').value;
    let utilizaEspacioLey7600 = document.getElementById('ley7600').checked;

    let vehiculo = {
        marca: marca,
        color: color,
        placa: placa,
        tipo: tipo,
        dueño: dueño,
        utilizaEspacioLey7600: utilizaEspacioLey7600
    };

    console.log(vehiculo);

    
    const guardadoExitoso = guardar_vehiculo(vehiculo);

    
    if (!guardadoExitoso) {
        
        console.log("No se pudo guardar el vehículo debido a placa duplicada.");
        return; 
    }


    console.log("El vehículo se guardó correctamente.");
    
}
