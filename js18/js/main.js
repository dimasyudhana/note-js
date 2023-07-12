// Fetch API requires a discussion of ... 
// Callbacks, Promises, Thenables, and Async/Await

// Callbacks

// function firstFunction(parameters, callback) {
//     // do stuff
//     callback();
// }

// // a.k.a "callback hell"
// firstFunction(param, function() {
//     // do stuff
//     secondFunction(param, function() {
//         // do stuff
//         thirdFunction(param, function() {
//               // do stuff  
//         });
//     });
// });

// Promises
// 3 states : Pending, Fulfilled, Rejected
// const myPromise =  new Promise((resolve, reject) => {
//     const error = false;
//     if (!error) {
//         resolve("Yes! resolved the promise!");
//     } else {
//         reject("No! rejected the promise.")
//     }
// });

// // console.log(myPromise);

// // myPromise
// // .then(value => {
// //     console.log(value);
// //     return value => 1;
// // })
// // .then(newValue => {
// //     console.log(newValue);
// // })
// // .catch(err => {
// //     console.error(err);
// // })

// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         resolve("myNextPromise resolved!");
//     }, 3000); // 3s delay
// }); 

// myNextPromise.then(value => {
//     console.log(value);
// });

// myPromise.then(value => {
//     console.log(value);
// });

// const users= fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         data.forEach(user => {
//             console.log(user);
//         })
//     });

// console.log(users);

// Async / Await

// const myUsers = {
//     userList: []
// }

// const myCoolFunction = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
//     console.log(jsonUserData);
//     return jsonUserData;
// }

// myCoolFunction();

// const anotherFunc = async () => {
//     const data = await myCoolFunction();
//     myUsers.userList = data;
//     console.log(myUsers.userList);
// }

// anotherFunc();
// console.log(myUsers.userList);

// workflow function

const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    })
    console.log(userEmailArray);
    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);
}

getAllUserEmails();

const jokeObject = {
    id: "0oO71TSv4Ed",
    joke: "Why was it called the dark ages? Because of all the knights."
}

const postData = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
};
postData(jokeObject);

const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random??firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestJoke1 = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    console.log(joke);
};

const requestJoke2 = async (firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
    const jsonResponse = await response.json();
    console.log(jsonResponse.value.joke);
};

const postJokeToPage = (joke) => {
    console.log(joke);
};

requestJoke1("Made", "Eastwood"); //CORS
requestJoke2("Nyoman", "Eastwood"); //CORS

// Procedural "workflow" function
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke1(requestUrl);
    console.log("finished!")
}

processJokeRequest();
