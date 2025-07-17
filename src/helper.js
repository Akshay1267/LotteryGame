function genTicket(n) {
    let arr = new Array(n);
    for(let i=0;i<n;i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function sum(arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++) {
        sum += arr[i];
    }
    return sum;
}

// function isWin(arr){
//         if(sum(arr) === 15) {
//            console.log("Winner")
//         } else {
//             console.log("Not a win");
//         }
//     }
export { sum , genTicket};