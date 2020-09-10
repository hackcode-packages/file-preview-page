import { FileObject } from "./interface";
import { log, lstat, readdir, getFileType } from "./auxillary";

export const IndexFiles = (
  loc: string,
  childLevel: number
): Promise<Array<FileObject>> =>
  new Promise(async (resolve) => {
    const DirectoriesToAvoid = [".git", ".gitignore", "node_modules"];
    const currentDirectoryFiles = await readdir(loc);
    const localFileStorage: Array<FileObject> = [];
    let handler;

    for (let i = 0; i < currentDirectoryFiles.length; i += 1) {
      handler = await lstat(`${loc}/${currentDirectoryFiles[i]}`);

      /** skip unwanted files */
      if (DirectoriesToAvoid.includes(currentDirectoryFiles[i])) {
        log("skipping", currentDirectoryFiles[i], childLevel);
      } else if (handler.isDirectory()) {
        localFileStorage.push({
          name: currentDirectoryFiles[i],
          type: "node",
          location: `${loc}/${currentDirectoryFiles[i]}`,
          children: await IndexFiles(
            `${loc}/${currentDirectoryFiles[i]}`,
            childLevel + 1
          ),
        });
      } else if (handler.isFile()) {
        log("indexing", `file: ${loc}/${currentDirectoryFiles[i]}`, childLevel);
        localFileStorage.push({
          name: currentDirectoryFiles[i],
          type: "leaf",
          location: `${loc}/${currentDirectoryFiles[i]}`,
          children: [],
          meta: getFileType(currentDirectoryFiles[i]),
        });
      }
    }

    /** return control */
    resolve(localFileStorage);
  });
