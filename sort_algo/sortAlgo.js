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
    data2=[]
    data3=[]
    data4=[]
    data5=[]
    data.forEach(nbr =>{
        if(!Number.isInteger(nbr))console.log("Une entrée n'est pas un Integer");
        data1.push(nbr)
        data2.push(nbr)
        data3.push(nbr)
        data4.push(nbr)
        data5.push(nbr)
    })
    console.log("La liste à trier :");
    console.log(data);
    console.log("Test des algo");
    console.log(`\n`);
    bubbleSort(data1)
    console.log(data1);
    console.log(`\n`);
    insertionSort(data2)
    console.log(data2);
    console.log(`\n`);
    selectionSort(data3)
    console.log(data3);
    console.log(`\n`);
    quickSort(data4, 0, data4.length - 1);
    console.log(`Quick Sort : ${countQuickSort} comparaisons`);
    console.log(data4);
    console.log(`\n`);
    console.log(mergeSort(data5))
    console.log(`Merge Sort : ${countMergeSort} comparaisons`);

});

const bubbleSort = (data) => {
    let run = 0;
    for (let i = data.length - 1; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        run++;
        if (data[j] > data[j + 1]) {
          let tmp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = tmp;
        }
      }
    }
    console.log(`Tri à bulle: ${run} comparaisons`);
    return data;
  };


const insertionSort = (arr) => {
    let count = 0;
    let temp, j;
    for (let i = 1; i < arr.length; i++) {
        temp = arr[i];
        j = i;
        while (j > 0  && temp < arr[j-1]) {
            arr[j] = arr[j-1];
            j--
            count++
        }
        arr[j] = temp
    }
    console.log(`Insertion Sort : ${count} comparaisons`);
}

let selectionSort = (arr) => {
    let n =0
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
            n++
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    console.log(`Selection Sort : ${n} comparaisons`);
}


// QUICK SORT
var countQuickSort=0
const partition = (arr, left, right) => {
    var pivot   = arr[Math.floor((right + left) / 2)], 
        i       = left, 
        j       = right; 
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
            countQuickSort++
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
            countQuickSort++

        }
    }
    return i;
}

const swap = (items, leftIndex, rightIndex) =>{
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

const quickSort=(items, left, right)=>{
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); 
        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }
        if (index < right) { 
            quickSort(items, index, right);
        }
    }
}

var countMergeSort=0
mergeSort=(unsortedArray)=> {
    countMergeSort++
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2);
  
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
  
    return merge(
      mergeSort(left), mergeSort(right)
    );
  }
  
const merge = (left, right)=> {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }
  
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }