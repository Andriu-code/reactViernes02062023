function revisarPalabra() {
 var palabra = document.getElementById('palabra').value;
 var expresion = /[^A-Za-z0-9]/g;
 palabra = palabra.toLowerCase().replace(expresion, '');
 var longitudPalabra = palabra.length;
 for (var i = 0; i < longitudPalabra/2; i++) {
   if (palabra[i] !== palabra[longitudPalabra - 1 - i]) {
       return resultado.textContent = 'La palabra no es palindromo'
   }
 }
 return resultado.textContent = 'La palabra es palindromo';
}

function sustituirVocal() {
 var nombre = document.getElementById('nombre').value;
 var caracter = document.getElementById('caracter').value;
     let regex = /[aeiou]/gi;
     let result = nombre.replace(regex, caracter);
     resultadoSustituir.textContent = result;   
}

function calcularFecha() {
    var fechaNac  = document.getElementById('fecha').value;
    var nombre= document.getElementById('nombreC').value;
    var birth = new Date(fechaNac);
    var check = new Date();
    var milliDay = 1000 * 60 * 60 * 24;
    var ageInDays = (check - birth) / milliDay;
    var ageInYears =  Math.floor(ageInDays / 365 );
    resultadoFecha.textContent = "Tu nombre es " + nombre + " y tu edad es " + ageInYears + " años";
}

function isPrime(n) 
   {
    if (n <= 1)
        return false;
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
    return true;
  }

  function calculaPrimos()
  {
          let para = document.createElement('p');
          para.innerText =  "1";
          document.getElementById('listadoPrimos').appendChild(para);   
     for (let i = 2; i < 101; i++) 
     {
        if (isPrime(i)) 
        {
          let para = document.createElement('p');
          para.innerText = i + " ";
          document.getElementById('listadoPrimos').appendChild(para);   

        }
        else
        {
          let div = document.createElement('div');
          div.innerText = i + " ";
          document.getElementById('listadoPrimos').appendChild(div);   
        }
       
     }   
  }

