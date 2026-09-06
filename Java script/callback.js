function sum(a,b){
    return a+b;

}
function sumwithMsg(clbk, msg){
   const result=clbk(20,30);
   const fresult="HI "+msg+"Your score is="+result;
   console.log(fresult);
}

sumwithMsg(sum, "MR. Deepak");
