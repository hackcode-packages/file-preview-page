/**
 * @interface
 * @description to store file items in parsed tree
 */
export interface FileObject {
  name: String;
  type: "leaf" | "node";
  children: Array<FileObject> | null;
  meta?: FileMetaData;
}

export interface FileMetaData {
  extension: string;
  type: "image" | "compressed" | "document" | undefined;
}
