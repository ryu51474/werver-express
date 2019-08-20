const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const puerto =process.env.PORT || 3000;


//esto se llama middlewhere

app.use(express.static(__dirname+'/public'))
 
//esto es el EXPRESS hbs engine
hbs.registerPartials(__dirname + '/views/parciales' );
app.set('view engine', 'hbs');

//helpers, son funciones que se disparan cando el temlate lo requiere
/* hbs.registerHelper('getAnio', ()=> {
    return new Date().getFullYear()
});
hbs.registerHelper('capitalizar',(texto)=>{ //esto es para ponerle mayusculas solo a lar primeras letras
    let palabras =texto.split(' ');

    palabras.forEach((palabra,idx)=>{
        palabras[idx]= palabra.charAt(0).toUpperCase()+palabra.slice(1).toLowerCase()
    });

    return palabras.join(' ');
}); */


app.get('/',  (req, res) => { //req=request o peticion, res=response o respuesta

    /* let salidaApagina = {
        nombre:'daNiel coRnejo',
        edad: 38,
        url: req.url
    } */
  //res.send('Hola Mundito')
    res.render ('home', {
        nombre: 'daNielito coRnejiTo',
        //anio: new Date().getFullYear()
    });
}); 

app.get('/about',(req,res)=>{
    res.render('about',{
    //anio: new Date().getFullYear()
    })
})

/* app.get('/data',  (req, res) => { //req=request o peticion, res=response o respuesta

    let salidaApagina = {
        nombre:'Daniel con pleca data',
        edad: 38,
        url: req.url
    }
  //res.send('Hola Mundito')
    res.send (salidaApagina);
}); */

/* 
CON ESTO CORRIA BIEN Y DABA EL MENSAJE
app.listen(3000); 

console.log('Servidor corriendo en puerto 3000'); 

*/

app.listen(puerto,()=>{
    console.log(`Servidor ahora esta corriendo en puerto ${puerto}`);
})