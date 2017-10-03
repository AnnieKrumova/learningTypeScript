function testOb(obj) {
    var sentence = obj.word1 + ' ' + obj.word2;
    obj.say(sentence);
}
var obj = {
    word1: 'Shut',
    word2: 'up!',
    say: function (stuff) {
        console.log(stuff);
    }
};
testOb(obj);
