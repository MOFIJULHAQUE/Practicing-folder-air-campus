
// sum of  elements in rows
let matrix = [
    [1,2,3,4],
    [11,24,34,44],
    [17,27,37,474],
    [11,21,31,41],
]

// sum of first columns elements that's why I declare "let sum = 0" if we need 2nd columns sum then we have to declare "let sum = 2"


let rows = matrix.length;
let start = 0;

let sum = 0;
for(let i=0;i<rows;i++){
    sum+=matrix[start][i];
}console.log(sum);

