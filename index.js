import fs from 'fs/promises';
import http from "http"

const PORT = 8000
const localhost = 'localhost'
const file='test.html'
const content= 'test'

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World</h1>');
   });
   server.listen(PORT, localhost, () => {
    console.log(`Server is running on port ${PORT}`);
   })
const writeAndRead=async ()=>{
try{
    await fs.writeFile(file, content)
    const data = await fs.readFile(file, 'utf8');
  console.log(data);
    }catch (err) {
    console.log(err);
  }
}

writeAndRead()