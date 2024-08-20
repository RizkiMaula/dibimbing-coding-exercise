function towerBuilder(n) {
    // Write your code here
    let spacings=
    let asterist=
    let results= 
    for(let i=1;i<=n;i++){
      spacings=
      asterist=
        for(let j=0;j<n-i;j++){
         spacings +=  
        }
        
        for(let j=1;j<=i;j++){
          
           if(j>1){
             asterist+=**
           }else{
             asterist+=*
           }
        }
      
        
        results+=spacings+asterist+n
    }

    return results;
}

console.log(towerBuilder(6))
