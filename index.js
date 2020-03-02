const execa = require("execa");
const chalk = require("chalk");
const { join } = require("path");

const devDeps = function(cwd) {
  console.log(chalk.green('即将安装 devDependencies，只支持 Yarn 工具。'));
  const path = cwd || process.cwd();
  const subprocess = execa("yarn", [
    "install",
    "--modules-folder",
    join(path, "node_modules")
  ]);
  subprocess.stdout.pipe(process.stdout);
};
devDeps();

module.exports = devDeps;
