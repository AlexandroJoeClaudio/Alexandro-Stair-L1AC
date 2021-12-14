function Climb(cost) {
    cost.push(0); 
    for (let i = cost.length - 3; i >= 0; i--) {
     
      cost[i] += Math.min(cost[i + 1], cost[i + 2]); 
    }
    return Math.min(cost[0], cost[1]); 
  }
  
  console.log(Climb([0, 2, 2, 1])); 
  console.log(Climb([0, 2, 3, 2])); 
  console.log(Climb([10, 15, 20])); 
  console.log(Climb([0, 0, 0, 0, 0])); 