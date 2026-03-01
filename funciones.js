console.log("esta conectado el JS")
//document.querySelector(Button).addEventListener("click", calcularIMC);

document.getElementById("calcular-IMC").addEventListener("click", calcularIMC);

function calcularIMC() {
    
     let peso = document.getElementById('peso').value; // 80;
     let altura = document.getElementById('altura').value; // 1.72

    let resultadoImc = 0;
    let caracteristica = "";
    let mensaje = "";

     //calculo IMC = peso / (altura**2)

    resultadoImc = peso / (altura**2);

    if(resultadoImc < 18.5){
        caracteristica="BAJO PESO";
        imagen = "img/bajopeso.jpg"
    }else if (resultadoImc < 25) {
        caracteristica="NORMAL";
        imagen = "img/normal.jpg"

    }else if (resultadoImc < 30) {
        caracteristica="SOBREPESO";
        imagen = "img/sobrepeso.jpg"

    }else{
        caracteristica = "OBESIDAD";
        imagen = "img/obesidad.jpg"

    }

    console.log("su caracteristica es: "+caracteristica + " su resultado IMC:"+resultadoImc);

    document.getElementById("valorIMC").textContent = resultadoImc.toFixed(2);
    document.getElementById("categoriaIMC").textContent = caracteristica;
    document.getElementById("imagenIMC").src = imagen;
}

alert("hola soy un mensaje")