interface IObj {
    word1 : string;
    word2 : string;
    say : (string) => void;
}

function testOb (obj : IObj) {
    var sentence = obj.word1 + ' ' + obj.word2;
    obj.say(sentence);
}

var obj : IObj = {
    word1 : 'Shut',
    word2 : 'up!',
    say : function (stuff) {
        console.log(stuff);
    }
}

let secretMessage = 'I Love Me Some Momchi';

testOb(obj);
