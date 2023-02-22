exports.sum = (a,b)=>{
  return a+b
}

exports.deleteUserById = (array, id)=>{
  return array.filter((user)=>user.id !==id)
}

exports.findUserById = (array=[], id="")=>{
  return array.find(user=>user.id===id)
}

// const users =[
//   {user:"Rodrigo", age:36, id:1},
//   {user:"Jéssica", age:29, id:2},
//   {user:"Fernando", age:26, id:3},
//   {user: "Cacau", age:4, id:4}
// ]

// console.log(findUserById(users,3))