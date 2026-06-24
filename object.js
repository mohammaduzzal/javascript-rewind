// To access a property, we can use:

// The dot notation: obj.property.
// Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
// Additional operators:

// To delete a property: delete obj.prop.
// To check if a property with the given key exists: "key" in obj.
// To iterate over an object: for (let key in obj) loop.

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30,       // by key "age" store value 30
  color : "white",
  isSingle : true,
  skills : ["ts","js","react","mongodb","mongoose","postgre","prisma"],
  isHandsome : true
};

// console.log(user.age);
// console.log(user.skills[0]);
// console.log(user.skills[5]);
// console.log(user["skills"]);

user.age = 26.7
// console.log(user);


const keys = Object.keys(user);
// console.log(keys);

const values = Object.values(user);
// console.log(values);

delete user.isHandsome;
// console.log(user);

for(const props in user){
  // console.log(props);
  // console.log(user[props]);
}

const keyss = Object.keys(user)
for(const key of keyss){
  // console.log(key ,":", user[key]);
  
}


