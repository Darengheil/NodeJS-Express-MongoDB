let rect = require('./rectangle');

function solveRect(l,b) {
    console.log("l = "+ l  + " and b = "+ b);
    rect(l,b, (err,rectangle) => {
        if(err){
            console.log("ERROR: ", err.message);
        }else{
            console.log("The area of l= " + l + " and b = " + b +" equal to " + rectangle.area());
            console.log("The perimeter of l= " + l + " and b = " + b +" equal to " + rectangle.perimeter());
        }
    });
    console.log("This statement after call to rect");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);