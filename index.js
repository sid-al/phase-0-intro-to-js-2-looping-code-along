

function writeCards(arry, event){
    let newArry = [];
    for (let i=0; i<arry.length; i++){
          newArry.push(`Thank you, ${arry[i]}, for the wounderful ${event} gift!`)
    };   
  
    return newArry;

};    

function countDown(starting){
    while (starting > 0){
        console.log(starting);
        starting -=1;
    };
    console.log(starting);
};

