function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
    let identify =document.getElementById('identifer')
// let number = document.getElementById('input')
let placeholder = document.getElementById('placeholder-logo')
let mtnLogo = document.getElementById('MTN') 
let airtelLogo = document.getElementById('AIRTEL') 
let nineMobileLogo = document.getElementById('NINEMOBILE') 
let gloLogo = document.getElementById('GLO') 
let allLogo = document.querySelectorAll('.carrier-logo')
let text = document.getElementById('pTag')

identify.addEventListener('click', function(){
// const mtnNum= ['0803','0806','0703','0706','0810','0813','0814','08016','0903','0906','0916']
const mtnNum = /0803|0806|0703|0706|0810|0813|0814|0816|0903|0906|0916/;
const gloNumbers = /0805|0807|0811|0705|0815|0905/
    const airtelNumbers = /0802|0808|0812|0701|0708|0902|0907|0901/
    const nineMobibleNumbers = /0809|0817|0818|0908|0909/ 
  
    let number = document.getElementById('input-tag').value
    console.log(number)
    
let phoneindex = number.substring(0,4)
if(number.toString().length>11 || number.toString().length<11){
    placeholder.classList.add('hide-logo')
    text.innerHTML="invalid input! try again!"

}
else if(phoneindex.match(mtnNum) && number.toString().length == 11){
    for(const each of allLogo){
        each.classList.add("hide-logo")
    }
    text.innerHTML= "Yah your network provider is MTN"
    mtnLogo.classList.remove("hide-logo")
}else if(phoneindex.match(gloNumbers) && number.toString().length == 11){
    for(const each of allLogo){
        each.classList.add("hide-logo")
    }
    text.innerHTML="Yah!! your network provider is Glo"
    gloLogo.classList.remove('hide-logo')
}else if(phoneindex.match(airtelNumbers) && number.toString().length == 11){
    for(const each of allLogo){
        each.classList.add('hide-logo')
    }
    text.innerHTML="Yah!! your network provider is Airtel"
airtelLogo.classList.remove('hide-logo')
}else if(phoneindex.match(nineMobibleNumbers) && number.toString().length == 11){
    for(const each of allLogo){
        each.classList.add('hide-logo')
    }
    text.innerHTML="Yah!! your network provider is 9mobile"
nineMobileLogo.classList.remove('hide-logo')
}


})

  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //