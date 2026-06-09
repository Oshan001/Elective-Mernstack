const App = () => {
  let name = "Oshan"
  let surname = "Bajracharya"

  
  let product = [
    {name : "laptop" , price : 50000, _id:1 , quantity : 10},
    {name : "modile" , price : 20000, _id:2 , quantity : 20},
    {name : "tablet" , price : 30000, _id:3 , quantity : 30}
  ]


let users = [
  
    {name:"nitan", surname:"thapa", _id:1, age: 20, gender:"male",email:"nitanthapa425@gmail.com", image : "download.jpg"},
    {name:"sita", surname:"thapa", _id:2, age: 30, gender:"female",email:"sitathapa425@gmail.com", image : "download.jpg"},
    {name:"rita", surname:"thapa", _id:2, age: 30, gender:"female",email:"ritathapa425@gmail.com", image : "download.jpg"},
    {name:"anusha", surname:"thapa", _id:2, age: 30, gender:"female",email:"anushathapa425@gmail.com", image : "download.jpg"},
  ]
  
  return (
  <div> 
<h1 style = {{backgroundColor : "green"}}>Details </h1>
<p style = {{color : "red"}}>name is {name}</p>
<p style = {{border : "solid red 2px"}}>surname is {surname}</p>
<p>th sum of 1 +1 is {1+1}</p>
<img src = "download.jpg" width = "200px" height = "200px" alt = "Image import unsucessful"></img>




{
  product.map((item,i)=>{
    return(
      <div style = {{border : "solid cyan 2px"}}> 
        <p>product  name is : {item.name} </p>
          <p> product price  is : {item.price} </p>
             <p> product id  is : {item._id} </p>
             <p> product quantity  is : {item.quantity} </p>
        
      </div>
    )
  })
}





{
users.map((item,i)=>{
return(  <div  style={{border : "solid blue 1px"}}>
<img src  = {item.image}></img>
<p>name is {item.name}</p>
<p>surname is {item.surname}</p>
<p>age is {item.age}</p>
<p>gender is {item.gender}</p>
<p>id is {item._id}</p>
<p>email is {item.email}</p>
  </div>)
})
}




















  </div> 
  )
}
export default App
