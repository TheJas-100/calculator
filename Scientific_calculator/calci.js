document.addEventListener("DOMContentLoaded",function(){

    const display=document.getElementById('calc-display');
    const buttons= document.getElementsByClassName('btn');

    let currentvalue="";
    function evaluateresult(){
        const convertedvalue=currentvalue.replace("x","*").replace("÷","/").replace("%","/0.1")
        .replace("sin","Math.sin").replace("cos","Math.cos").replace("tan","Math.tan")
        .replace("ln","Math.log").replace("pi","Math.PI").replace("log","Math.log10")
        .replace("e","Math.E").replace("sqrt","Math.sqrt");
        const result=eval(convertedvalue);
        currentvalue=result.toString();
        display.value=currentvalue
    }

    for(let i=0;i<buttons.length;i++){
        const button=buttons[i];
        button.addEventListener('click', function(){
            const value = button.innerText;

            try{
            if(value=='AC'){
                currentvalue="";
                display.value=currentvalue;
            }
            else if(value=="="){
                evaluateresult();
            }
            else{
            currentvalue+= value;
            display.value=currentvalue;
            }
        }
        catch(error){
            console.error(error);
            currentvalue="SYNTEX ERROR "
            display.value=currentvalue;
        }
        })
    }
    });