const execa = require('execa');
const json = require('./package.json');

// console.log(Object.keys(json.devDependencies));
const devDeps = Object.keys(json.devDependencies).join(' ');
const subprocess = execa('yarn', ['add', devDeps]);
subprocess.stdout.pipe(process.stdout);

// const commands = Object.keys(json.devDependencies).map(pkg => {
//   const subprocess = execa('yarn', ['add', pkg, '-D']);
//   subprocess.stdout.pipe(process.stdout);
//   return subprocess;
// });
// Promise.all(commands);

// module.exports = function () {
//   const pkgs = ().map(
//     name => require(join(__dirname, '../packages', name, 'package.json')).name,
//   );
//   execa("echo", ['unicorns']).then(res => {
//     console.log('wubaiqing');
//     console.log(result.stdout);
//   })
// }
