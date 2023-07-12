// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the gloabl variable: window
// We do not have to type window. It is implied.

const myArray = ["eat", "sleep", "code"];
const myObject = {
  nama: "Dave",
  hobbies: ["eat", "sleep", "code"],
  logNama: function() {
    console.log(this.nama);
  }
};

// localStorage.setItem("mySessionStore", JSON.stringify(myArray));
// sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(typeof mySessionData);
// console.log(mySessionData);

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// localStorage.removeItem("myLocalStore");
// localStorage.clear();
const key = localStorage.key(0);
const storeLength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(key);
console.log(storeLength);
// console.log(myLocalData);