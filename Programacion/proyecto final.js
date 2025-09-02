const expres= require("express");
const bodyParser=require("body-parser");
const path=require("path");
const multer = require("multer");
const app= expres();
const port= 3000;
//configurar almacenamiento de multer 
const stroage= multer.diskStorage({

    destination:( req, file,cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file,cb)=> {
        const timestamp= new Date(). toISOString().replace(/ [-:]/g,'');
        cb(null,`${timestamp}-${file.originalname}`);
    },
});
const upload=multer({stroage});
app.use(bodyParser.urlencoded({extended:true}));
app.use(expres.static('public'));
app.post('/submit',upload.single('file'),(req,res)=>{
    if(!req.file){
        return res.status(400).send('No se a subido ningun archivo');
    }
    res.send('Archivo guardado correctamente en el servidor');
});
app.listen(PORT,()=>{
    console.log('Servidor escuhando en http://localhost:${PORT}');
});