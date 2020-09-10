import chalk from "chalk";
import * as util from "util";
import * as fs from "fs";

import { FileMetaData, FileObject } from "./interface";

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
export const createFile = util.promisify(fs.writeFile);

/**
 * function to get file extension and type from name
 * @param fileName string filename to extract extension and filetype from
 */
export const getFileType = (fileName: string): FileMetaData => {
  const images = ["png", "jpg", "gif", "img", "jpeg"];
  const documents = ["docx", "doc", "pdf", "xls", "xlsx", "md"];
  const compressed = ["zip", "tar", "gz", "iso", "rar", "7z"];
  const code = ["js", "json", "cpp", "java", "class", "ts", "php"];

  const extension = fileName.split(".").pop() || "txt";
  let fileType = "file";

  if (images.includes(extension)) {
    fileType = "image";
  } else if (documents.includes(extension)) {
    fileType = "document";
  } else if (compressed.includes(extension)) {
    fileType = "compressed";
  } else if (code.includes(extension)) {
    fileType = "code";
  } else {
    fileType = "file";
  }

  return {
    extension,
    type: fileType,
  };
};

export const GenerateUlLiFromTree = (tree: Array<FileObject>): string => {
  let ExportString = "";

  for (let i = 0; i < tree.length; i += 1) {
    if (tree[i].type == "leaf") {
      ExportString += `<li><a href="${tree[i].location}">${tree[i].name}</a></li>`;
    } else {
      ExportString += `<li>${tree[i].name}<li>
      <ul>${GenerateUlLiFromTree(tree[i].children)}</ul><br />`;
    }
  }

  return ExportString;
};
