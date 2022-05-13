/*let n=document.getElementById('n').value;
i=1;
s1=3;
s2=2;
while(i<=n){
    if(i%2!=0){
        console.log(s1);
        s1=s1+3
    }else{
        console.log(s2);
        s2=s2+2;
    }
    i++;
}
console.log(n);*/
/*let n=prompt();
let mult=0;
let res='';
for(let i=2;i<n;i++){
    if(n%i==0){
        mult++;
        res=res+i+",";
    }
}
console.log('El numero ',n," tiene", mult ," divisores: ", res);*/



function juego() {
    let texto;
    let texto2;    
    let i=1;
    let acierto=530;
    while(i<4){
        num1=Math.floor(Math.random()*20);
        num2=Math.floor(Math.random()*20);
        res=num1+num2;
        let adiv=prompt('Ingresa el resultado de: '+num1+"+"+num2);
        if(adiv==res){
            document.getElementById("resp2").innerHTML='Correcto';
            acierto++;
        }else{
            texto=("Lo siento, error")
        }
        document.getElementById("resp2").innerHTML=texto;
        document.getElementById("num1").innerHTML=res;
        texto2='Llevas '+acierto.toString()+' aciertos'
        document.getElementById("cont").innerHTML=texto2;
        i++;
    }

}

function juego2() {
    let texto;
    let adiv=prompt('Adivina el numero menor a 10','')
    num=Math.floor(Math.random()*10);
    console.log(num)
    int=1;
    while (int<5){
        if (adiv == num) 
        {
            console.log("Lo lograste");            
            
            texto="Lo lograste :)";              
            break;
        }
        else
        {
            console.log("Prueba con otro número");
            adiv=prompt("Prueba con otro número, te quedan "+(5-int)+" intentos");
            int++;            
            texto="Vuelve a intentar :(";
        }     
    }
    document.getElementById("resp2").innerHTML=texto;
    document.getElementById("num").innerHTML=num;
}
