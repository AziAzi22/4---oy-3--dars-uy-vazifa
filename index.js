// 1 - masala

// const path = require("path");
// let x = ["/home", "user", "documents"]
// x.push("notes.text")
// const full_path =  path.join(__dirname, ...x);
// console.log(full_path);

// 2 - masala

// const path = require("path");

// function myFunc(arr) {
//   let result = "";
//   for (const ext of arr) {
//     result += path.extname(ext) + "\n";
//   }
//   return result;
// }
// console.log(myFunc(["document.pdf", "photo.jpeg", "archive.zip"]))
// console.log(myFunc(["document.txt", "package.json", "index.js"]));

// 3  -masala

// const path = require("path");
// const originalPath = "D:/movies/horror/movie.mkv"
// let parsed = path.parse(originalPath)
// parsed.dir = parsed.dir.replace("D:", "E:")
// parsed.root = "E:/"
// const newPath = path.format(parsed)
// console.log(newPath)

// 4 - masala

// function myFunc(user) {
//     return {
//         username: user.username,
//         homedir: user.homedir,
//     };
// }
// console.log(myFunc({ username: "johndoe", homedir: "/home/johndoe" }));

// const os = require("os");
// const user = os.userInfo();console.log({
//     username: user.username,
//     homedir: user.homedir,});

// 5 - masala

// const os = require("os");
// const interfaces = os.networkInterfaces();


// for (const name in interfaces) {
//   interfaces[name].forEach((x) => {
//     if (x.family === "IPv4") {
//       console.log(
// `Interface: ${name} \n IP: ${x.address} \n MAC: ${x.mac}`
//       );
//     }
//   });
// }

// const  fs = require("fs");
// fs.openSync("home.js", "w");