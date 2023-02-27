const mensaje = document.querySelector('.encriptar__entrada');
const imprimir = document.querySelector('.mensaje__salida');

const vocales = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat'],];
let copy='';

function encriptar(string){
    
    string = string.toLowerCase();

    for (let i = 0; i < vocales.length; i++) {
        
        if(string.includes(vocales[i][0])) {
            string = string.replaceAll(vocales[i][0], vocales[i][1]);
        }
    }
    return string;
}

function btnEncriptar() {
    const encriptado = encriptar(mensaje.value);
    imprimir.innerHTML= encriptado;
    mensaje.value = '';
    copy = encriptado;
    document.querySelector('.mensaje__en-espera').style.display = "none";
    document.querySelector('.mensaje__mostrar').style.display = "flex";
}

function desencriptar(string){
    
    string = string.toLowerCase();

    for (let i = 0; i < vocales.length; i++) {
        
        if(string.includes(vocales[i][1])) {
            string = string.replaceAll(vocales[i][1], vocales[i][0]);
        }
    }
    return string;
}

function btnDesencriptar() {
    const encriptado = desencriptar(mensaje.value);
    imprimir.innerHTML= encriptado;
    mensaje.value = '';
    copy = encriptado;
    document.querySelector('.mensaje__en-espera').style.display = "none";
    document.querySelector('.mensaje__mostrar').style.display = "flex";
}

function copiar() {
    navigator.clipboard.writeText(copy);
}