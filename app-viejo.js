const http = require ('http');

http.createServer((request,response)=>{

    response.writeHead(200,{'Content-Type':'application/json'});

    //response.write ('Hola Mundo'); fue cambiado por json

    let salidaApagina ={
        nombre:'Daniel',
        edad: 38,
        url: request.url
    }

    response.write( JSON.stringify(salidaApagina) );
    response.end();
})
.listen(8080);

console.log('escuchando puerto 8080');