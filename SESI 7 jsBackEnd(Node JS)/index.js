const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');

const host = 'localhost';
const port = 3002;

// requests adalah objek yang merepresentasikan dari laur
// response adalah data keluar dari sistem

 const server = http.createServer(function (requests, response) {
     const nama = 'nabil gusfermanto';
     let uang = 200000
     let jajan = 10000;
     let sisa = uang - jajan;
     
     uang = rupiah.convert(uang);
     jajan = rupiah.convert(jajan);
     sisa = rupiah.convert(sisa);
     fs.appendFile('sisaunag.txt', sisa, () =>{
        console.log('sisa unggulan sudah di tulis di file')
     })

     const sisaRam = os.freemem();
     const jumlahCpu = os.cpus();

     const hasil = `
     <head>
        <title>${nama}</title>
     </head>
     <body>
     <h1 style="background-color:black; color:white; padding:20px; text-align:center">NODE JS UANG JAJAN</h1>
     <p>Halo nama saya ${nama}. Saya jajan sebanyak ${jajan}, uang saya tadi adalah ${uang} dan sisa uang saya adalah ${sisa}.</p>
     <h5>sisa ram ${sisaRam}</h5>
     </body>
     `    
     

     response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, '', function() {
    console.log(`Server is running on ${host}:${port} 😀`);
});