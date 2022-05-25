const express = require('express');
const fs = require('fs'); 
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static('public'));
app.get('/', (req,res)=> {
   res.sendFile(path.join(__dirname,'public','alan-course-initial.html'))
})
app.listen(PORT, ()=>{
   console.log(`server running on port ${PORT}`);
})
