    function queryGenerator( x,  y,  n) {
        for (let i = 1; i <= n; i++) {
            console.log( seriesCalculator(x, y, i));       
         }
    }
    
    function seriesCalculator( x,  y,  n) {
        let result = 0;
        while (n > 0) {
            result = result + (( Math.pow(2, n - 1)) * y);
            n--;
        }
        result = (result + x);
        return result;
    }
    
    function textGenerator( x,  y,  n) {
        let strTextPlain ="0";
        for (let i = 1; i <= n; i++) {
            strTextPlain = (strTextPlain + " + " + Math.pow(2, i - 1) + " * " + y);
        }
        return strTextPlain;
    }

    //Input Data
    queryGenerator(5, 3, 5);