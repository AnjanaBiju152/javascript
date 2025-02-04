// create a promise

const myPromise = new Promise((resolve, reject) => {
    //api call
    var isApiSuccess = true;
    if (isApiSuccess = true) {
        resolve("api is success")
    }
    else {
        reject("something happend")
    }
})



myPromise.then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);

})