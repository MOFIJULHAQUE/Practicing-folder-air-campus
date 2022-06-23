function a(num){
        console.log("recursion "+num);
        if (num < 10){
            return a(num+1);
        }
    
    }a(1);