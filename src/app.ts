import { FileObject } from "./interface";
import { IndexFiles } from "./fileIndexer";

/** declaring worker to use all components */
const worker = async () => {
  const FileGlobalStorage: Array<FileObject> = await IndexFiles(".", 0);
  console.log(FileGlobalStorage);
};

/** invoke worker */
worker();
