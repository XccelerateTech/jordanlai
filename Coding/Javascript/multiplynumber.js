

    function multiplier(x){
        if(isNaN(x) || x <= 0){
        console.log ("error");
        }
        if(x > 1000000){
        console.log (x);
        }
        while(x < 1000000){
            x *= 10;
            
        }
        console.log(x);
    }   
 

    multiplier(66);