/* 错误处理 */
function test() {
  throw new Error("test error");
}
function main() {
  setImmediate(() => test());
}
// main();

try {
  new Promise((resolve, reject) => {
    throw new Error("promise error");
  }).catch((err) => {
    console.log('reject', err);
    Promise.reject(err)
  });
} catch (error) {
  console.error('error:', error);
}

process.on("unhandledRejection", function (reason, promise) {
  console.log("unhandledRejection", reason);
});

process.on("uncaughtException", function (reason, promise) {
  console.log("uncaughtException", reason);
});
