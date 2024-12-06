let age = 30;
function displayAge(){
 return age;
}
function changeAge(newAge){
   age = newAge;
}

console.log(displayAge());
changeAge(40);
console.log(displayAge());
