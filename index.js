var rect = require('./rectangle');
   

function solveRect(l,b){
    console.log("Solving for rectangle with l= "+ l + " and b= "+ b);

    if(l<=0 || b<=0){
        console.log("Rectagle Dim should be greater than 0 :"+l+ ",and b ="+b);

    }
    else{
        console.log("The area of rectangle is "+ rect.area(l,b) );
        console.log("The perimeter of rectangle is "+ rect.perimeter(l,b) );

    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,3);
solveRect(-3,5);