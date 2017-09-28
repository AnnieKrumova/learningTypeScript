function someFunction(){
    console.log('outer this');
    someOtherFunction(function() {
        console.log('inner this');
    });
}

function someOtherFunction(aFunction){
    aFunction ();
}


let momchi : any = {name: 'momchi'};
let annie : any = {name: 'annie'};

momchi.someFunction = someFunction;
annie.someFunction = someFunction;

momchi.someFunction();
annie.someFunction();