//Predict 1//
for(var num = 0; num < 15; num++){
    console.log(num);
}
// predicted 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14//



//Predict 2//
for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}
//Predicted 3,9//

//Predict 3//
for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}
//Predict 1,4,6,8,10,10,12,11,14,16//