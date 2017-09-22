function sayFizzBuzz(n) {
    var results = [];
    for (var i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            // 3でも5でも割り切れるのを先に調べる必要がある
            results.push('Fizz Buzz');
        } else if (i % 3 === 0) {
            // ３で割り切れる
            results.push('Fizz');
        } else if (i % 5 == 0) {
            // ５で割り切れる
            results.push('Buzz')
        } else {
            // ３でも５でも割り切れない
            results.push(i)
        }
    }
    return results
}
