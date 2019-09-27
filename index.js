import { start } from "repl";

// Add your functions here
function map(arr, cb){
    const a = [];
    for (let i = 0; i < arr.length; i++){
        a[i] = cb(arr[i]);
    }
    return a;
}

// function reduce(src, cb, starting){
function reduce(arr, cb, starting = 0){
    //     let r = (!!starting) ? starting : src[0]
    let a = (!!starting) ? starting:arr[0];
    //     let i = (!!starting) ? 0 : 1
    let i = (!!starting) ? 0 : 1;

    //     for (; i < src.length; i++) {
    for (; i < arr.length; i++){
        //       r = cb(src[i], r)
        a = cb(arr[i], a);
        //     }
    }
    //     return r;
    return a;
    // }
}                  