//task 1 Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.
async function iterateWithAsyncAwait(array) {
    for (var i = 0; i < array.length; i++) {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()

            }, 1000);
        })
        console.log(array[i]);
    }

}
var tab = ["first", "seconde", "third", "forth"]
//iterateWithAsyncAwait(tab)

//task 2 Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.
async function awaitCall() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data);



}
//awaitCall()

//task 3 Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.


async function awaitCall() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        console.log(response.status);

        if (response.status !== 200) {
            throw new Error("there is something wrong");

        }
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("Error to fetch data", error);

    }
}
awaitCall()
//Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.
async function function1() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000);
    })
    console.log("function 1 is completed");

}
async function function2() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000);
    })
    console.log("function 2 is completed");

}
async function function3() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000);
    })
    console.log("function 3 is completed");

}

async function chainedAsyncFunctionsed() {
    await function1()
    await function2()
    await function3()

}
//chainedAsyncFunctionsed()

//task 4 Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.
async function ConcurrentRequests() {
    const response = await Promise.all([fetch("https://jsonplaceholder.typicode.com/posts"), fetch("https://jsonplaceholder.typicode.com/comments")])
    const data1 = await response[1].json()
    const data2 = await response[0].json()
    console.log(data1);
    console.log(data2);



}
ConcurrentRequests()

//task 5 Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). Log the responses once all requests are complete.
async function ParallelCalls(array) {
    const response = await Promise.all(array.map(el => fetch(el)))
    console.log(response);

}
const URLs = ["https://jsonplaceholder.typicode.com/posts", "https://jsonplaceholder.typicode.com/comments"]
ParallelCalls(URLs)