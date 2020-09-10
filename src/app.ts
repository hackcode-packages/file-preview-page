#!/usr/bin/env node

import { FileObject } from "./interface";
import { IndexFiles } from "./fileIndexer";
import { GenerateUlLiFromTree, createFile } from "./auxillary";
import { HTMLContentGenerator } from "./fileGenerator";

/** declaring worker to use all components */
const worker = async () => {
  /** parse current directory and generate object tree */
  const FileGlobalStorage: Array<FileObject> = await IndexFiles(".", 0);

  /** convert object tree to html list item structure */
  const listItem = GenerateUlLiFromTree(FileGlobalStorage);

  /** generate entire page */
  const FinalHTMLContent = HTMLContentGenerator(listItem);

  /** write data to file */
  await createFile("./index.html", FinalHTMLContent);
};

/** invoke worker */
worker();
