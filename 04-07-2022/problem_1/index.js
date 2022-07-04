


function pattern() {
    for (let i = 1; i <= 5; i++) {
        let stars = ''
        for (let j = i; j <= 5; j++) {
            stars += j
        }
        for (let k = 1; k < i; k++) {
            stars += k
        }
        console.log(stars)
    }
}


pattern()


// output
// 12345
// 23451
// 34512
// 45123
// 51234