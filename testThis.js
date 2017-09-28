function someFunction() {
    console.log('outer this');
    someOtherFunction(function () {
        console.log('inner this');
    });
}
function someOtherFunction(aFunction) {
    aFunction();
}
var momchi = { name: 'momchi' };
var annie = { name: 'annie' };
momchi.someFunction = someFunction;
annie.someFunction = someFunction;
momchi.someFunction();
annie.someFunction();
