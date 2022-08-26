
// print elements in  "S" format(revice)
let matrix = [
    [1,2,3,4],
    [11,24,34,44],
    [17,27,37,474],
    [11,21,31,41],
]


let rows = matrix.length;
let columns = matrix[0].length;

for(let i = 0; i < rows; i++){
    if(i % 2 !=0){
        for(let j = 0; j < columns; j++){
            console.log(matrix[i][j]);
        }
    }else{
        for(let j = columns-1;j>=0;j--){
            console.log(matrix[i][j]);
        }
    }
}

