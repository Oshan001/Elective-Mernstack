/* to make API :->
S1 :make Router
S2 :make controller
*/
import express, { json } from "express"
import firstRoute from "./src/routes/firstRoutes.js"
let app = express()
app.listen(8000,()=>{
console.log("application is listening at port 8000")

})
app.use(json())   // make our backend to take data from postman
app.use(firstRoute)