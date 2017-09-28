function Person(name : string, age : number, sex : string, sexuality : string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.sexuality = sexuality;
}


let somePerson = new Person('momchi', 25, 'male', 'bisexual');
console.log(somePerson);

