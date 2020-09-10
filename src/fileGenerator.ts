const tag = (
  tagName: string,
  children1?: any,
  children2?: any,
  children3?: any
): string =>
  `<${tagName}>
${children1 != undefined ? children1 : ""}${children2 != undefined ? children2 : ""}${children3 != undefined ? children3 : ""}
</${tagName}>`;

export const HTMLContentGenerator = (listItems:string) : string => 
tag("html", 
    tag("head", 
        tag("title", "Directory Listing")
    ),
    tag("body",
        tag("div", 
            tag("h1","Directory Listing"),
            tag("hr"),
            tag("p", listItems)
        ),
        tag("hr")
    ),
    tag("i", "Generated Using <a href='https://github.com/hackcode-packages/file-preview-page'>File Preview Pages</a>")
);