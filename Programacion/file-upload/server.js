const expres= require("express")
const bodyParser=require("body-parser")
const path=require("path");
const multer = require("multer");
const app= expres();
const port= 3000;
//configurar almacenamiento de multer 
const stroage= multer.diskStorage({
    destination:( req, file,cb)
})