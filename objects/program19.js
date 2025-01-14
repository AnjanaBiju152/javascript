// using class
// ------------------------------
class Addmultiply{
    // properties
    resultAdd;
    resultMultiply;
    
    // methods
    add(a,b){
        this.resultAdd=a+b;
        return this.resultAdd;
    }
    multiply(a,b){
        this.resultMultiply=a*b;
        this.square( this.resultMultiply);
    }
    square(num){
        console.log(num**2);
        
    }
    }
    const obj = new Addmultiply()
    const res1 = obj.add(4,6);
    console.log(res1);
    obj.multiply(9,8)
    console.log(resultMultiply);
    
    
