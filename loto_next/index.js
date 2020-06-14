let winingNumbersArray = []
const getWiningNumbers = (array) => {
  for (i=0; i<6;i++){
    array.push(Math.floor(Math.random()*(9-0+1)+0))
  }
  return array
}

getWiningNumbers(winingNumbersArray)

const getUserData = () => {
  let userNumbers = []
  let firstname =(document.getElementById("firstname").value)
  let lastname =(document.getElementById("lastname").value)
  let email =(document.getElementById("email").value)
  userNumbers.push(parseInt(document.getElementById("number1").value))
  userNumbers.push(parseInt(document.getElementById("number2").value))
  userNumbers.push(parseInt(document.getElementById("number3").value))
  userNumbers.push(parseInt(document.getElementById("number4").value))
  userNumbers.push(parseInt(document.getElementById("number5").value))
  userNumbers.push(parseInt(document.getElementById("number6").value))
  checkLoto(firstname, lastname, email, userNumbers)
}

const compareNumbers =  (numbers1,numbers2) => {
  if(JSON.stringify(numbers1)==JSON.stringify(numbers2)){
    return true ;
  }else{
    return false}
}

const checkLoto = (firstname, lastname, email, lotoNumbers) => {
  let emailRegex = /([A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})$/
  if (email.length < 1){
    alert("Veuillez fournir une adresse email");
  }else if (!email.match(emailRegex)){
    alert("Votre email n'est pas au bon format");
  }else if (firstname.length < 1){
    alert("Veuillez fournir un prénom");
  }else if (lastname.length < 1){
    alert("Veuillez fournir un nom");
  }else if (compareNumbers(lotoNumbers, winingNumbersArray) == true){
    alert("Vous avez gagné !");
  }else{
    alert(`Vous avez perdu ! Les numéros gagnants étaient : ${winingNumbersArray}`);
  }
}

document.getElementById("submit").addEventListener('click', getUserData);
document.getElementById("winingNumbersButton").addEventListener('click',function(){
  document.getElementById("winingNumbersButton").innerHTML = winingNumbersArray;
});
