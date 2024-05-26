const fs = require('fs');
const child_process = require('child_process');

for (let i = 0; i < 3; i++) {
  const workerProcess = child_process.exec('node support.js ' + i);

  workerProcess.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
 });

 workerProcess.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
 });

  workerProcess.on('exit', function (code) {
    console.log(`子进程${i}已退出，退出码 `,  code);
  });
}