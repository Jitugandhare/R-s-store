function fun(n, a) {
    let i=0; 
    let temp=[]; 
    
    while(i<n) {
        let j=i-1; 
        while(j>=0 && a[j]<a[i]) {
            j--; 
        }
        
        if(j>=0) {
            temp.push(i-j); 
        } else {
            temp.push(i+1); 
        }
        
        i++;
    }
    
    console.log(temp.join(" ")); 
}
