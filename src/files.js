const fs = require('fs'); // file system

/* fs.writeFile('MyFile.txt', 'Hello', (err) => {
    if(err)
    {
        throw err;
    }
}); */

/* fs.readFile('MyFile.txt', (err, data) => {
    if(err)
    {
        throw err;
    }

    console.log(data.toString('utf8'));
}); */

/* fs.readdir('.', (err, files) => { // ponto vai pegar todos os arquivos
    if(err)
    {
        throw err;
    }

    for(var file in files) // in é chave e of é o valor
    {
        console.log(files[file]);
    }
}); */

fs.readdirSync('.')
    .filter((file) => { return (file.endsWith('.js'));})
    .forEach((file) => {console.log(file);});