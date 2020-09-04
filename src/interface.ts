/**
 * @interface
 * @description to store file items in parsed tree
 */
export interface FileObject {
  name: String;
  type: "leaf" | "node";
  children: Array<FileObject> | null;
}
