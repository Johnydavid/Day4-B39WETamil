// Object Comparison

var obj1 = {
    name: "Person 1",
    age : 5
   
};
var obj2 = {
    age :5,
    name : "Person 1"
};

let isequal = true;

for (var key in obj1) {
      if (obj1[key] !== obj2[key]){
        isequal = false;
        break;
    }
 }
 console.log(isequal);