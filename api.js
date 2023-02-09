function getApi(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response)=> response.json())
  .then((data)=>{
   console.table( data.filter((element) =>element.company.name == "Romaguera-Jacobson" || element.company.name == "Romaguera-Crona"))
  })
  .catch((err)=>console.log(err))
}
getApi()