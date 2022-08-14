

// sum of digonal  elements
let matrix = [
    [1,2,3,4],
    [11,24,34,44],
    [17,27,37,474],
    [11,21,31,41],
]


// 4+34+27+11


let rows = matrix.length;
let start = matrix[0].length-1;



let sum = 0;

for(let i=0;i<rows;i++){
    sum+=matrix[i][start];
    start-=1;
}console.log(sum);

// output
// 76
