let person = {
  username:"ravi",
  age:21,
  address:{
    state:"Telangana",
    city:{
      street:"kphb"
    }
  }
}

console.log(person.address.city.street.pincode?person.address.city.street.length:"Not found" );

console.log(person.address.city.street && person.address.city.street.length);