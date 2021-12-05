console.log("-----Call ------\n");
let calculator = {
      'sum' : function(){
          let result = this.num1 + this.num2;
          console.log("Sum = " +result);
      },
      'subtract' : function(){
          let result = this.num1 - this.num2;
          console.log("Subtraction = "+result);
      },
      'multiply' : function(){
          let result = this.num1 * this.num2;
          console.log("Multiplication = "+result);
      },
      'divide' : function(){
          let result = this.num1 / this.num2;
          console.log("Division = "+result);
      },
};


let set1 = {
    'num1' : 50 ,
    'num2' : 10 ,
    
};

calculator.sum.call(set1);
calculator.subtract.call(set1);
calculator.multiply.call(set1);
calculator.divide.call(set1);


console.log("\n\n-----Apply-----\n");
let calculator2 = {
    sum: function(a,b){
      let result = a + b;
      console.log("Sum = " +result);
    },
    subtract: function(a,b){
      let result = a - b;
      console.log("Subtraction = "+result);
    },
    multiply: function(a,b){
      let result = a * b;
      console.log("Multiplication = "+result);
    },
    divide: function(a,b){
      let result = a / b;
      console.log("Division = "+result);
    }
  };
  
  let set ={
      
  }
   
  let arr = [20,10]
  
  calculator2.sum.apply(set,arr)
  calculator2.subtract.apply(set,arr)
  calculator2.multiply.apply(set,arr)
  calculator2.divide.apply(set,arr)
  
  
  console.log("\n\n-----Bind-----\n");
  let calculator3 = {
    'sum': function(a,b){
      let result = a + b;
      console.log("Sum = "+result);
    },
    'subtract': function(a,b){
      let result = a - b;
      console.log("Subtraction = "+result);
    },
    'multiply': function(a,b){
      let result = a * b;
      console.log("Multiplication = "+result);
    },
    'divide': function(a,b){
      let result = a / b;
      console.log("Division = "+result);
    },
  };
  
  
  let set2 = {
    'a' :100,
    'b' : 50
  }
  let fn1 =calculator3.sum.bind(set2);
  let fn2 = calculator3.subtract.bind(set2);
  let fn3 = calculator3.multiply.bind(set2);
  let fn4 = calculator3.divide.bind(set2);
  fn1(100,20);
  fn2(100,20);
  fn3(100,20);
  fn4(100,20);