
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //read file posts.json
    var err;
    var data;
    readWritePostsContent(err, res, data);
});

function readWritePostsContent(err, res, data){
    fs.readfile
    fs.readFile('./posts.json',(err, data) => {
        if(err) return writeError(err, res);

        console.log('Data read from disk is: ' + data);

        //write content of file into posts.html
        writeHtmlFromTemplate(data, res);
    });
}

function writeHtmlFromTemplate(data, res){
    console.log('Data to be written to html template is: ' + data);
    const dataPrint = JSON.parse(data.toString());
    fs.readFile('posts.html', (err, dataHtml) => {
        if(err) return writeError(err, res);
        
        const htmlResult = dataHtml.toString().replace('%', dataPrint.join('<li></li>'));
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(htmlResult);
    });
}

function writeError(err, res){
    console.log('Error occured: ' + err);
    res.writeHead(500, {'Content-Type': 'text/html'});
}

server.listen(8080, '127.0.0.1');

