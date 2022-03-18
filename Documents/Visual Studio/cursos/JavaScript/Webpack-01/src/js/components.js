import'../css/componentes.css'
import pokemon from '../assets/img/06aa1120133831.562e61496d778.png'

export const saludar =(nombre)=>{

    console.log('Creando etiquetah1');

    const h1 =document.createElement('h1');
    h1.innerText = `hola, ${nombre}!!!!!!`;

    document.body.append(h1);
}

// img 
console.log(pokemon);
const img = document.createElement('img');
img.sc = pokemon;
document.body.append(img);