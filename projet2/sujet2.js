let fs = require('fs');

//Méthode asynchrone
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return ;
    }
    data = data.split(" ")
    array = []        
    data.forEach(nbr => {
        array.push(parseInt(nbr))
    });
    data = array
    data1=[]
    data.forEach(nbr =>{
        if(!Number.isInteger(nbr))console.log("Une entrée n'est pas un Integer");
        data1.push(nbr)
    })
    console.log(exo2(data))
    console.log("\n");
    console.log(exo2(data1))
})

// EXERCICE 2
const exo2 = (data) => {
    let bat = 0;
    for (let i = 0; i < data.length; i++) {
      let tmp = 1;
      for (let j = i; j < data.length; j++) {
        if (data[i] < data[j]) {
          tmp = 0;
        }
      }
      bat += tmp;
    }
    return bat;
  };

let count = 0
let answer = 0
const exo4 = (arr) =>{
    let len = arr.length
    let highest = 0
    let index = 0
    for (let i = 0; i < len; i++) {
        count++
        if(highest < arr[i]){
            highest = arr[i]
            index = i
        }
    }
    answer++
    if(len >2)exo2(arr.slice(index+1))
    return `${answer} appartements `
}
