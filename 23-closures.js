function outer() {
    let counter = 0;
    return {
        increment: function(){
            counter++;
            console.log(counter);
       },
       decrement: function(){
           counter--;
           console.log(counter);
       }
    };
}

const closure = outer();
closure.increment(); // 1
closure.increment(); // 2

closure.decrement(); // 1
closure.decrement(); // 2