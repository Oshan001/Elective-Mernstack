import { Router } from "express";

const productRoutes = Router()

productRoutes
.route("/")
.post((req,res,next)=>{
    res.json("product created sucessfully")   // to print in postman
})
.get((req,res,next)=>{})

productRoutes
.route("/:id")
.get((req,res,next)=>{})
.patch((req,res,next)=>{})
.delete((req,res,next)=>{})
export default productRoutes

/* 
localhost : 8000/product , post
localhost : 8000/product , get

localhost : 8000/:id ,  get
localhost : 8000/:id , patch
localhost : 8000/:id , delete
*/