var business = 850;
var minister = 950;
var sochib = 550;

var max = Math.max(business, minister, sochib);
console.log(max);

if(business > minister){
    if(business > sochib){
        console.log('Business is bigger');
    }
    else{
        console.log('Sochib is bigger');
    }
}
else{
    if(minister > sochib){
        console.log('Minister is bigger');
    }
    else{
        console.log('Sochib is bigger');
    }
}