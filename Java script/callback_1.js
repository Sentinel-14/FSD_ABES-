function multiply(a,b){
    return a*b;

}

function multiplywithmsg(clbk, msg){
    const result= clbk(20,20);
    const result2="Hi "+msg+" Your multiplication score is="+result;
    console.log(result2);
}

multiplywithmsg(multiply, "MR. Deepak");