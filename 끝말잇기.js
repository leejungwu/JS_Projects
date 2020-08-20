var word = '사과';
while (true) {
    var answer = prompt(word)
    if (word[word.length - 1] === answer[0]) {
        alert('딩동댕');
        word = answer;
    } else {
        alert('땡');
    }
}