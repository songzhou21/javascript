// //Chaining
// Promise.resolve('foo').then(function (string) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             string += 'bar'
//             resolve(string)
//         }, 1)
//     })
// }).then(function (string) {
//     setTimeout(function() {
//         string += 'baz';
//         console.log(string)
//     }, 1)
//     return string
// }).then(function(string) {
//     console.log("test")
//     console.log(string)
// })


// var p2 = new Promise(function(resolve, reject) {
//     resolve(1);
// })

// p2.then(function(value) {
//     console.log(value)

//     return value + 1;
// }).then(function(value) {
//     console.log(value)
// })


// throw
// Promise.resolve()
//     .then(() => {
//         throw 'Oh no!'
//     })
//     .then(() => {
//         console.log("not called")
//     }, reason => {
//         console.log("onRejected function called: ", reason)
//     })

// reject
// Promise.reject()
//     .then(() => 99, () => 42)
//     .then(solution => console.log(solution))

// catch
Promise.resolve()
    .then(() => {
        throw 'Oh  no!'
    })
    .catch(reason => {
        console.error(reason)
    })
    .then(() => {
        console.log("always called")
    })
