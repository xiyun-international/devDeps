const execa = require("execa");
const chalk = require("chalk");
const { join } = require("path");

const devDeps = function(cwd) {
  const path = cwd || process.cwd();
  const nodeModulesPath = join(path, "node_modules")

  console.log(chalk.green('即将安装 devDependencies，只支持 Yarn 工具。'));
  console.log(chalk.green(`安装目录为：${nodeModulesPath}`));
  execa.commandSync(`cd ${__dirname} && yarn install --no-lockfile --ignore-scripts --modules-folder ${nodeModulesPath}`)
};

module.exports = devDeps;
