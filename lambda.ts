let testLambda = function (x,y){
    console.log(x*y);
}

let testLambda2 = (x,y) => {
    console.log(x+y);
}

let testLambda3 = x => {
    console.log(x*x);
}

let testLambda4 = () => {
    console.log('People are lazy.');
}

testLambda (7,17);
testLambda2 (3,32);
testLambda3 (-6);
testLambda4();