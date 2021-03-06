/**
 * @interface
 * @description to store file items in parsed tree
 */
export interface FileObject {
  name: String;
  location: String;
  type: "leaf" | "node";
  children: Array<FileObject>;
  meta?: FileMetaData;
}

/**
 * @interface
 * @description to describe file meta-data
 */
export interface FileMetaData {
  extension: string;
  type: string;
}
