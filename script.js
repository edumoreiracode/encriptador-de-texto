const entrada = document.querySelector(".text-area-input");
const salida = document.querySelector(".text-area-output");
const imgSalida = document.querySelector(".output-img");
const textSalida = document.querySelector(".output-container-text");
const copiarBtn = document.querySelector(".copiar-button");

function textoValido(texto) {
  // Utilizare esta expresión regular para verificar si el string está vacío.
  const regexVacio = /^\s*$/; 

  if(!regexVacio.test(texto)) {
    // Con esta expresión regular buscare cualquier carácter con tilde en el alfabeto
    const regexTilde = /[\u00C0-\u00FF]/g;
  
    // El método test() búsqueda una ocurrencia entre una expresión regular y una cadena. Devuelve true o false.
    if(regexTilde.test(texto)) {
      alert("Solo son permitidas letras minúsculas y sin acentos");
      location.reload();
      return false;
    } else return true;
  } else alert("Por favor, introduce un texto para encriptar");
}

function encriptarBtn() {
  let texto = entrada.value;

  if(textoValido(texto)) {
    let textoEncriptado = encriptar(texto);
    
    imgSalida.style.display = "none";
    textSalida.style.display = "none";
    salida.style.display = "inline-block";
    salida.value = textoEncriptado;
    copiarBtn.style.display = "initial";
  }
}

function encriptar(texto) {
  const matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

  texto = texto.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if(texto.includes(matrizCodigo[i][0])){
      texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  
  return texto;
}

// function desencriptar(textoEncriptado) {

// }

function copiar() {

  salida.select();
  // document.execCommand("copy");
  if(document.execCommand("copy")) {
    copiarBtn.style.backgroundColor = "#4da864";
    copiarBtn.textContent = "Copiado ✓";
    setTimeout(() => {copiarBtn.style.backgroundColor = "#2A5C58"; copiarBtn.textContent = "Copiar";}, 2000);
    salida.blur();
  }
}