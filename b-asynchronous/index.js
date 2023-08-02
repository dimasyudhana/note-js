const fs = require("fs");
const superagent = require("superagent")

// npm init (enter terus sampai yes)
// npm i superagent
// gunakan module superagent yang sudah tersedia

const readFilePro = file => {
    // bekerja secara async
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject("tidak menemukan filenya")
            resolve(data); // nama jenis dog
        });
    });
};

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject(" gabisa nulis di filenya");
            resolve("success");
        });
    });
};

// solusi 5 untuk multiple async await
const getDogPic = async () => {
    // untuk error handling pakai try
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log(`Breed: ${data}`);
    
        const requests = [
            superagent.get(`https://dog.ceo/api/breed/${data}/images/random`),
            superagent.get(`https://dog.ceo/api/breed/${data}/images/random`),
            superagent.get(`https://dog.ceo/api/breed/${data}/images/random`),
        ];
    
        const responses = await Promise.all(requests);
        const images = responses.map((el) => el.body.message);
        console.log(images);
    
        await writeFilePro("dog-image.txt", images.join("\n"));
        console.log("Random dog image saved to file!"); // success
    } catch (err) {
        console.log(err); //tidak menemukan filenya
        // mark as rejected
        throw err; // akan mengembalikan pesan error ke catch pada fungsi getDogPic().then(dog => { ... }
    }
    // dalam kasus async gunakan return untuk mengabaikan aturan blocking 
    return "TODO 2 : gambar anjingnya tersedia"
};

/*
// kayak goroutine ya ..
// ini namanya syntetic sugar for promise
const getDogPic = async () => {
    // untuk error handling pakai try
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log(`Breed: ${data}`);
    
        const res = await superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`
        );
        console.log(res.body.status);
    
        await writeFilePro("dog-image.txt",res.body.message);
        console.log("Random dog image saved to file!"); // success
    } catch (err) {
        console.log(err); //tidak menemukan filenya
        // mark as rejected
        throw err; // akan mengembalikan pesan error ke catch pada fungsi getDogPic().then(dog => { ... }
    }
    // dalam kasus async gunakan return untuk mengabaikan aturan blocking 
    return "TODO 2 : gambar anjingnya tersedia"
};
*/

// Solusi 4
(async () => {
    try {
        console.log("TODO 1 : ini akan mendapatkan gambar anjing")
        const dog = await getDogPic();
        console.log(dog);
        console.log("TODO 3 : telah mendapatkan gambar anjing")
    } catch(err) {
        console.log(err); // tidak menemukan filenya
    }
})();

/* Solusi 3
console.log("TODO 1 : ini akan mendapatkan gambar anjing")

getDogPic().then(dog => {
    console.log(dog);
    console.log("TODO 3 : telah mendapatkan gambar anjing")
}).catch(err => {
    console.log(err); // tidak menemukan filenya
});
*/

// const dog = getDogPic() 
// console.log(dog); // Promise { <pending> }

// console.log("TODO 3 : telah mendapatkan gambar anjing")

/* Solusi 2
// ini namanya Flat structured of chained promise
readFilePro(`${__dirname}/dog.txt`)
    .then(data => {
        console.log(`Breed: ${data}`);
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    })
    .then(res => {
        console.log(res.body.status);
        return writeFilePro("dog-image.txt",res.body.message);
    })
    .then(() => {
        console.log("Random dog image saved to file!"); // success
    })
    .catch(err => {
        console.log(err.message);
});
*/

/* Solusi 1 
// Triangular shape named callback hell not like you smell heaven lmao 
fs.readFile(`${__dirname}/dog.txt`, (err,data) => {
    console.log(`Breed: ${data}`);

    // superagent menggunakan method get disini sebenernya return promise.
    // promise implement konsep dari future value, yang diexpektasikan akan terjadi.
    // "woe api server, kasi saya random dog image di background dan kasi tau saya kalau udah tersedia dan kasi saya datanya ya."
    // "okee server api janji akan kasi resultnya nanti"
    // masih pending
    superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then(res => { // handle succeed message
        if (err) return console.log(err.message);
        console.log(res.body.status);

        fs.writeFile("dog-image.txt", res.body.message, err => {
            if (err) return console.log(err.message);
            console.log("Random dog image save to file!"); // success
        });
    }).catch(err => { // pakai get then (catch) untuk handling error/unsucceed
        console.log(err.message); // Not found
    });
});
*/
