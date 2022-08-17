let matrix = [
        [1,2,3,4],
        [11,24,34,44],
        [17,27,37,474],
        [11,21,31,41],
    ]
    
    
    1+24+37+41
    
    
    let rows = matrix.length;
    let start = 0;
    
    let sum = 0;
    
    for(let i=0;i<rows;i++){
        sum+=matrix[i][start];
        start+=1;
    }console.log(sum);
    