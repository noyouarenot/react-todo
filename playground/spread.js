


var person = ['Andrew',25];
var personTwo = ['Jen',29];

function greeting(a,b){
  var name = a;
  var age =b;
  console.log(name, age);
}

greeting(...person);

var names =['mike','ben'];
var final =['peter',...names];

final.forEach(function(name){
  console.log('hi, '+name );
});
