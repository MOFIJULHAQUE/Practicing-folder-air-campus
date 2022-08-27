// sum of all element

let matrix = [
    [1,2,3,4],
    [11,24,34,44],
    [17,27,37,474],
    [11,21,31,41],
]

let rows = matrix.length;
let columns = matrix[0].length;

let sum = 0;

for (let i=0; i<rows;i++){
    for(let j=0;j<columns;j++){
        sum+=matrix[i][j];
    }
}
console.log(sum);