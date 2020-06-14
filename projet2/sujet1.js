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
    const k = 12
    console.log(data);
    console.log(exo1(data,k))
})

const exo1 = (arr,k) =>{
    let count = 0
    let len = arr.length
    let answer = false
    for (let i = 0; i < len-1; i++) {
        for (let j = 0; j < len; j++) {
            if(arr[i]!==arr[j])if(arr[i]+arr[j]==k) answer = true
        count ++
        }
    }
console.log(`${count} comparaisons`);
return answer
}
