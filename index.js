
let number;

const generate_number=()=>{
   

    number=((Math.trunc((Math.random())*10))%6)+1;
    console.log(number);
}

const generate_number_btn_click=()=>{  
    document.getElementById("section1").style.display='none';
    document.getElementById("section2").style.display='none';
    document.getElementById("section3").style.display='block';

    setTimeout(() => {
    generate_number();  

    document.getElementById('getnum').value='';
    document.getElementById("section1").style.display='none';
    document.getElementById("section2").style.display='block';
    document.getElementById("section3").style.display='none';
    },2000);
}; 


const match_data=()=>{
    let value=document.getElementById('getnum').value;
    if(value==number)
    {
        alert("Congrats!! You won the game");
    }
    else{
        console.log("Oops !! Your guess is wrong"+value);
        alert("Oops !! Your guess is wrong");
    }

    generate_number_btn_click();
}
