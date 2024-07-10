let son1=+prompt("Birinchi sonni kirting");
let son2=+prompt(" Ikkinchi sonni kirting");
let amal=+prompt("Amal raqamini tanlang \n 1) Qoshish \n 2) Ayrish \n 3) Kopaytirish \n 4) Bolish") ;

if(amal==1){
    console.log(son1+"+"+son2+"="  +`${son1+son2}`)
}else if(amal==2){
    console.log(son1+"-"+son2+"=" +`${son1-son2}`)
}
else if(amal==3){
    console.log(son1+"*"+son2+"="  +`${son1*son2}`)
}
else if(amal==4){
    console.log(son1+"/"+son2+"=" +`${son1/son2}`)
}

else{
    alert(" muhammadamin ")
};