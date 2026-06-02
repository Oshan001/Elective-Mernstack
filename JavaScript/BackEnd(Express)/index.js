/* to make API :->
S1 :make Router
S2 :make controller
*/
/* 
for firstRouter
import express, { json } from "express"
import firstRoute from "./src/routes/firstRoutes.js"
let app = express()
app.listen(8000,()=>{
console.log("application is listening at port 8000")

})
app.use(json())   // make our backend to take data from postman
app.use(firstRoute)

 */

/* 
localhost : 8000
*/

/* 
for productRoutes
import express, { json } from "express"
import productRoutes from "./src/routes/productRouts.js"
let app = express()
app.listen(8000,()=>{
console.log("application is listening at port 8000")

})
app.use(json())   // make our backend to take data from postman
app.use("/product", productRoutes)
 */



/* 
userProduct
import express, { json } from "express"
import userRoutes from "./src/routes/userRouts.js"
let app = express()
app.listen(8000,()=>{
console.log("application is listening at port 8000")

})
app.use(json())   // make our backend to take data from postman
app.use("/product", productRoutes)
app.use('/user',userRoutes) */


import express, { json } from "express"
import userRoutes from "./src/routes/userRouts.js"
import mongoose from "mongoose"
let app = express()
app.listen(8000,()=>{
console.log("application is listening at port 8000")
mongoose.connect("mongodb://localhost:27017")
})
app.use(json())   // make our backend to take data from postman
app.use("/product", productRoutes)
app.use('/user',userRoutes)
