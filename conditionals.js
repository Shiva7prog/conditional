// 1.write a program to print 10 numbers using for loop and write same program using while and do-while loop?

for (var i=0;i<=10;i++){
    console.log(i);
}

var a=0;
while(a<=10){
    console.log(a);
    a++
}

var b=0;
do{
    console.log(b);
    b++
}while(b<=10);

// 2.write a program to print even numbers using for loop and write same program uing while and do-while loop?

for (var num=0;num<=10;num++){
    if (num%2==0){
        console.log('even numbers using for loop: ',num);
    }
}

var num1=0;
while(num1<=10){
    if (num1%2==0){
        console.log("even numbers using do while loop: ",num1);
        num1++
    }
}

var num2=0;
do{
    if(num2%2==0){
    console.log(num2);
    num2++
    }
}while(num2<=10);

// 3.write a program to print odd numbers using for loop and write same program suing while and do-while loop?

// for (var num3=0;num3<=10;num3++){
//     if (num3%2!==0){
//         console.log('odd numbers using for loop: ',num3);
//     }
// }

// var num4=0;
// while(num4<=10){
//     if (num4%2!==0){
//         console.log("odd numbers using do while loop: ",num4);
//         num4++
//     }
// }

// var num5=0;
// do{
//     if(num5%2==0){
//         console.log(num5);
//         num5++
//     }
// }while(num5<=10);

// 4.write a program to console the marks grade D using conditional statements and the marks for D grade is b/w the 35 and 45 ?

// var marks=40;
// if (marks>=85){
//     console.log('grade A');
// }else if (marks<85 && marks>65) {
//     console.log('grade B');
// }else if(marks<65 && marks>45) {
//     console.log('grade C');
// }else if(marks>35 && marks<45){
//     console.log('grade D');
// }else{
//     console.log('grade E');
    
// }