// 多进程架构
// var fork = require("child_process").fork;
// var cpus = require("os").cpus();
// console.log("cpu" + cpus.length);
// for (var i = 0; i < cpus.length; i++) {
//   fork("./errorHandle.js", {
//     name: "errorHandle-" + i,
//     execArgv: ["--experimental-worker"],
//   });
// }

const { fork } = require("child_process")

const forked = fork(__dirname + "/child.js")

forked.on("message", msg => {
  console.log("Message from child", msg);
})

forked.send({ hello: "world" })


// spawn
/* const { exec, spawn } = require("child_process");
const child = spawn("find", [".", "-type", "f"]);

const find = spawn("find", [".", "-type", "f"]);
const wc = spawn("wc", ["-l"]);

find.stdout.pipe(wc.stdin);

wc.stdout.on("data", (data) => {
  console.log(`Number of files ${data}`);
});

child.stdout.on("data", (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`child stderr:\n${data}`);
});

child.on("exit", function (code, signal) {
  console.log(
    "child process exited with " + `code ${code} and signal ${signal}`
  );
}); */

// exec
/* exec('find . -type f | wc -l', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});

 */
