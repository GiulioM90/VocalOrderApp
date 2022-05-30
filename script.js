const express = require('express');
const fs = require('fs'); 
const app = express();
const http = require("http").createServer(app);
const path = require('path');
const { stringify } = require('querystring');
const PORT = 3000;
const io = require("socket.io")(http);

app.use(express.static('public'));
app.get('/', (req,res)=> {
   res.sendFile(path.join(__dirname,'public','index.html'))
})
io.on("connection", function(socket) {
   console.log(socket.id);
   io.emit(console.log('socket: connected'));
   socket.on('name', function(msg) {
      console.log(msg);
      
      fs.writeFile('./list.json', msg, (err) => {  
         if (err) throw err;
         console.log('Data written to file');
     });
      // fs.writeFileSync(file.txt , msg);
   //   io.emit('name', msg);
   });
  });
http.listen(PORT, ()=>{
   console.log(`server running on port ${PORT}`);
})
