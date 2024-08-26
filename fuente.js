let datosJson;

fetch('ejercicio.json')
.then(response => response.json())
.then((salida) => { 
    datosJson = salida;

    let txtTitulo = document.getElementById("titulo");
    txtTitulo.textContent = datosJson.banco

    let txtSucursal = document.getElementById("corresponsal");
    txtSucursal.textContent = datosJson.sucursal

    let txtTitular = document.getElementById("titular");
    txtTitular.textContent = datosJson.titular

    let txtNoCuenta = document.getElementById("cuenta");
    txtNoCuenta.textContent = datosJson.nro_cuenta
    
    let txtUsa = document.getElementById("saldo1");
    txtUsa.textContent = datosJson.saldo[0].monto
        let Usas = document.getElementById("moneda");
        Usas.textContent = datosJson.saldo[0].moneda

    let txtEuro = document.getElementById("saldo2");
    txtEuro.textContent = datosJson.saldo[1].monto
        let Euro = document.getElementById("moneda2");
        Euro.textContent = datosJson.saldo[1].moneda

    let txtCBU = document.getElementById("banco");
    txtCBU.textContent = datosJson.nro_banco

    let abierto = document.getElementById("apertura");
    abierto.textContent = datosJson.abierto



})
.catch(function(error){
    alert(error);
})

