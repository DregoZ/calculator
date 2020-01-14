var pantalla = "";
window.onload = function() {

    // document.getElementById('pantalla').innerHTML = pantalla;

    // borrar
    /*
        document.getElementById("ce").addEventListener("click", function () {
            console.log("PULSANDO ce");
            document.getElementById('pantalla').innerHTML = 0;
            pantalla = document.getElementById('pantalla').innerHTML;
            console.log(pantalla);
        });

        document.getElementById("siete").addEventListener("click", function () {
            console.log("PULSANDO siete");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "7";
            console.log(pantalla);
        });

        document.getElementById("siete").addEventListener("click", function () {
            console.log("PULSANDO siete");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "7";
            console.log(pantalla);
        });

        document.getElementById("siete").addEventListener("click", function () {
            console.log("PULSANDO siete");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "7";
            console.log(pantalla);
        });

        document.getElementById("siete").addEventListener("click", function () {
            console.log("PULSANDO siete");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "7";
            console.log(pantalla);
        });

        document.getElementById("ocho").addEventListener("click", function () {
            console.log("PULSANDO ocho");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "8";
            console.log(pantalla);
        });

        document.getElementById("nueve").addEventListener("click", function () {
            console.log("PULSANDO nueve");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "9";
            console.log(pantalla);
        });

        // YA VEREMOS Q HACEMOS CON LOS SIGNOS
        document.getElementById("multiplicar").addEventListener("click", function () {
            console.log("PULSANDO multiplicar");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "x";
            console.log(pantalla);
        });

        document.getElementById("cuatro").addEventListener("click", function () {
            console.log("PULSANDO cuatro");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "4";
            console.log(pantalla);
        });

        document.getElementById("cinco").addEventListener("click", function () {
            console.log("PULSANDO cinco");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "5";
            console.log(pantalla);
        });

        document.getElementById("seis").addEventListener("click", function () {
            console.log("PULSANDO seis");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "6";
            console.log(pantalla);
        });

        document.getElementById("resta").addEventListener("click", function () {
            console.log("PULSANDO resta");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "-";
            console.log(pantalla);
        });

        document.getElementById("uno").addEventListener("click", function () {
            console.log("PULSANDO uno");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "1";
            console.log(pantalla);
        });
        
        document.getElementById("dos").addEventListener("click", function () {
            console.log("PULSANDO dos");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "2";
            console.log(pantalla);
        });
        
        document.getElementById("tres").addEventListener("click", function () {
            console.log("PULSANDO tres");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "3";
            console.log(pantalla);
        });
        
        document.getElementById("sumar").addEventListener("click", function () {
            console.log("PULSANDO sumar");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "+";
            console.log(pantalla);
        });
        
        //SIGNO, CAMBIAR a + o -
        document.getElementById("signo").addEventListener("click", function () {
            console.log("PULSANDO signo");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "9";
            console.log(pantalla);
        });
        
        // si ya hay un cero...
        document.getElementById("cero").addEventListener("click", function () {
            console.log("PULSANDO cero");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + "0";
            console.log(pantalla);
        });
        
        document.getElementById("coma").addEventListener("click", function () {
            console.log("PULSANDO coma");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = pantalla + ",";
            console.log(pantalla);
        });

        // hay q programar el =
        document.getElementById("igual").addEventListener("click", function () {
            console.log("PULSANDO igual");
            pantalla = document.getElementById('pantalla').innerHTML;
            document.getElementById('pantalla').innerHTML = "";
            console.log(pantalla);
        });*/

    var numeros = document.getElementsByClassName("numeros");
    console.log(numeros);
    for (let i = 0; i < numeros.length; i++) {
        numeros[i].addEventListener("click", function() {
            let operador = document.getElementById('pantalla2').innerHTML;
            if (operador.length <= 9) {
                if (document.getElementById('pantalla2').innerHTML == '0') {
                    console.log("añadir evento" + this.value);
                    document.getElementById('pantalla2').innerHTML = this.value;
                } else {
                    console.log("añadir evento" + this.value);
                    document.getElementById('pantalla2').innerHTML = operador + this.value;
                }
            }
        });
    }

    var operadores = document.getElementsByClassName("operadores");
    console.log(operadores);

}