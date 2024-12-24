function timeToMixJuice(name) {
    if(name=='Pure Strawberry Joy'){return 0.5}
    else if(name=='Energizer'||name=='Green Garden'){return 1.5}
    else if(name=='All or Nothing'){return 5}
    else if(name=='Tropical Island'){return 3;}  
    else{return 2.5;} }
  
  
function limesToCut(wedgesNeeded, limes) {
    let total=0;
    let wedges=0;
    if(wedgesNeeded!==0){
      for(let i=0;i<limes.length;i++){
        if(limes[i]=="small")
        {wedges+=6;
         total++;
        if(wedgesNeeded<=wedges) break;}
        else if (limes[i]=="medium"){wedges+=8;total++;
                                     if(wedgesNeeded<=wedges) {break;}}
        else if (limes[i]=="large"){wedges+=10;total++;if(wedgesNeeded<=wedges) {break;}
      }
          }                               
  }return total;
    
  }
  
 
  function remainingOrders(timeLeft, orders) {
       const len=orders.length
       orders;

      for(let i=0;i<len;i++){
        timeLeft=timeLeft-timeToMixJuice(orders[0])
        console.log(timeLeft)
        orders.shift()
        if(timeLeft<=0)break 
    
  }return orders

  }

  const orders = [
    'Pure Strawberry Joy',
    'Pure Strawberry Joy',
    'Vitality',
    'Tropical Island',
    'All or Nothing',
    'All or Nothing',
    'All or Nothing',
    'Green Garden',
    'Limetime',
  ];

console.log(remainingOrders(13, orders))