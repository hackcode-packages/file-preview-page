import * as chalk from "chalk";
import * as util from "util";
import * as fs from "fs";

/**
 * @description Method to display clean logs in terminal
 * @param type string the category to which statement belongs
 * @param description the statement to display in console
 * @param ?level to use to give hierarchy in logs
 * @example
 * [skipping] -| .git
 * [skipping] -| .gitignore
 * [indexing] -| file: ./LICENSE
 * [indexing] -| file: ./README.md
 */
export const log = (type: string, desc: string, level: number = 0): void => {
  let padding = " -";
  for (let i = 1; i <= level; i++) {
    padding += "-";
  }
  padding += "| ";

  console.log(
    chalk.bold("[") +
      chalk.italic.yellow(type) +
      chalk.bold("]") +
      padding +
      chalk.greenBright(desc)
  );
};

/** using system calls with async/await */
export const lstat = util.promisify(fs.lstat);
export const readdir = util.promisify(fs.readdir);
