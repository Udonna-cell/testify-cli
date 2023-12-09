import fs from 'fs';
import shell from "shelljs"
import chalk from "chalk"

function maker(data: [string]): void {
  // mapping
  if (data.length == 1) {
    let base = shell.exec("pwd", { silent: true }).stdout
    // let directoryPath = path.join(base+data[0])
    // console.log(directoryPath + "=>")
    fs.stat(data[0], (err, stats) => {
      if (err) {
        if (err.code === 'ENOENT') {
          console.log('Directory does not exist')
          shell.exec(`mkdir ${data[0]}`)
          console.log(`Setting up ${chalk.blue(data[0])} environment ..`);
          setup(data[0])
          return;
        } else {
          console.error(err);
          return;
        }
      }

      if (stats.isDirectory()) {
        console.log('Directory exists');
      } else {
        console.log('Path is not a directory');
      }
    })
  }
}

function setup(name: string) {

}


export default maker