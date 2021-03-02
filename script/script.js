

function soma(){
    var val1= document.getElementById('valor1').value;
    var val2= document.getElementById('valor2').value;
    var result= (+val1)+(+val2);
    
    alert(result);
    
    //result=document.getElementById('result').innerHTML.value;
    

    
}
function subtrair(){
    var val1= document.getElementById('valor1').value;
    var val2= document.getElementById('valor2').value;
    var result= (+val1)-(+val2);
    
    alert(result);
    
}
function multi(){
    var val1= document.getElementById('valor1').value;
    var val2= document.getElementById('valor2').value;
    var result= (+val1)*(+val2);
    
    alert(result);
    
}
function div(){
    var val1= document.getElementById('valor1').value;
    var val2= document.getElementById('valor2').value;
    var result= (+val1)/(+val2);

    var arredondado = parseFloat(result.toFixed(2));
    
    alert(+arredondado);
    
}

function quadrado(){
 

    
}