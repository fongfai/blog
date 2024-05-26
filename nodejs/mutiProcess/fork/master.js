const fs = require('fs');
const child_process = require('child_process');

for (let i = 0; i < 3; i++) {
  const worker_process = child_process.fork("support.js", [i]);

  worker_process.on('message', function(message) {
    console.log('来自子进程的消息:', message);
  });

  worker_process.on('close', function (code) {
    console.log('子进程已退出' + i +'，退出码 ' + code);
  });
}