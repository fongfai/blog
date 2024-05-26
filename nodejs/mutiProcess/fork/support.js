console.log("进程 " + process.argv[2] + " 执行。" );


// 假设 i 是通过 process.argv 从主进程传递过来的
const i = process.argv[2];
process.send({ index: i, message: 'Hello from child process ' + i });
