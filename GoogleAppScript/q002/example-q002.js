for (var i = 1; i <= 30; i++) {
    if (i % 15 === 0) {
        // 3でも5でも割り切れるのを先に調べる必要がある
        document.write('Fizz Buzz\n');
    } else if (i % 3 === 0) {
        // ３で割り切れる
        document.write('Fizz\n');
    } else if (i % 5 == 0) {
        // ５で割り切れる
        document.write('Buzz\n')
    } else {
        // ３でも５でも割り切れない
        document.write(i + '\n')
    }
}
