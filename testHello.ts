class Greeting {
    greet(): void { console.log('Heyo!'); }
}

var newGreet: Greeting = new Greeting;
newGreet.greet();

var str1 : number = 7;
var str2 : string = str1 as any as string;
console.log(typeof str2, str2);