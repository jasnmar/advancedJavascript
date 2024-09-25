function countUp(start, end) {
    console.log(start)
    if(start >= end){
        return start
    } 
    countUp(start+1,end)
    /*
    Challenge:
    1. Create a counter which counts up from a 
       provided start number to a provided end 
       number. It should log each number in turn.
    */	
    }
    countUp(2,6)
    
    // So calling countUp(2, 6) should log:
    // 2
    // 3
    // 4
    // 5
    // 6
    
    