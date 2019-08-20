const hbs = require('hbs');

//helpers, son funciones que se disparan cando el temlate lo requiere
hbs.registerHelper('getAnio', ()=> {
    return new Date().getFullYear()
});
hbs.registerHelper('capitalizar',(texto)=>{ //esto es para ponerle mayusculas solo a lar primeras letras
    let palabras =texto.split(' ');

    palabras.forEach((palabra,idx)=>{
        palabras[idx]= palabra.charAt(0).toUpperCase()+palabra.slice(1).toLowerCase()
    });

    return palabras.join(' ');
});