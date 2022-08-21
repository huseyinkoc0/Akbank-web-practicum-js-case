function oddishOrEvenish(n){
let array=n.toString();
let total=0;
for(let i=0;i<array.length;i++){
total+=parseInt(array[i])
}
if(total%2===1){

    return "Odd";
}
else{
    return "Even";
}
}

console.log(oddishOrEvenish())