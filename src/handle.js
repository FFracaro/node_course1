function handle(request, response){

    let html = '<!DOCTYPE "html"><html><head><title>App com http e nodejs.</title></head><body><h1>Olá, bem vindo.</h1></body></html>';

    response.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8'});

    response.write(html);

    response.end();
}


module.exports = handle; // necessário para indicar que o modulo será exportado

//outra forma

/* module.exports = (request, response) => {

    let html = '<!DOCTYPE "html"><html><head><title>App com http e nodejs.</title></head><body><h1>Olá, bem vindo.</h1></body></html>';

    response.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8'});

    response.write(html);

    response.end();
} */