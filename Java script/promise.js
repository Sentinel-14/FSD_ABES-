function f1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            HTMLFormControlsCollection.log("hii");
            resolve();
        },1000)
    }

}

function f2(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log("ABES COLLEGE");
            resolve();
        },2000)
    })
}
f1().then(f2)
    .catch((err)=>{
        console.log("Error",err)
    })