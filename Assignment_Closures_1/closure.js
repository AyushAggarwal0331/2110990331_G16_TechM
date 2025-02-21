function createCounter(){
    let count=0;
    return {
      increment:function(){
        count++;
        console.log(count);
      },
      decrement:function(){
        count--;
        console.log(count);
      },
      getCount:function(){
        return count;
      }
    }
  }
  
  const value=createCounter();
  console.log(value.getCount());
  value.increment();             
  value.increment();
  value.increment();              
  value.decrement();              
  value.decrement();              
  console.log(value.getCount());