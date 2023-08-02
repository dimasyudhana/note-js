const fs = require("fs");
const { Readable } = require("stream");
const server = require("http").createServer(); // a bit less code wkwk

server.on("request", (req, res) => {
    // Solution 1
    // fs.readFile("test-file.txt", (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // });

    // Solution 2 : selalu menggunakan data dan end as request
    const readable = fs.createReadStream("testt-file.txt")
    readable.on("data", chunk => {
        res.write(chunk);
    });
    readable.on("end", () => {
        res.end();
    });
    readable.on("error", err => {
        console.log(err)
        res.statusCode = 500;
        res.end("Internal server error")
    });

    //     Listen on port 8000 ...
    // [Error: ENOENT: no such file or directory, open 'testt-file.txt'] {
    //   errno: -2,
    //   code: 'ENOENT',
    //   syscall: 'open',
    //   path: 'testt-file.txt'
    // }
    // [Error: ENOENT: no such file or directory, open 'testt-file.txt'] {
    //   errno: -2,
    //   code: 'ENOENT',
    //   syscall: 'open',
    //   path: 'testt-file.txt'
    // }

    // Solution 3
    // const readable = fs.createReadStream("test-file.text");
    // readable.pipe(res);
    //});
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listen on port 8000 ...")
});
