# file-preview-page

[![GitHub issues](https://img.shields.io/github/issues/hackcode-packages/file-preview-page?style=flat-square)](https://github.com/hackcode-packages/file-preview-page/issues)
[![GitHub license](https://img.shields.io/github/license/hackcode-packages/file-preview-page?style=flat-square)](https://github.com/hackcode-packages/file-preview-page/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/hackcode-packages/file-preview-page?style=flat-square)](https://github.com/hackcode-packages/file-preview-page/stargazers)

Ever wanted to quickly share files with someone, but the server did not support directory listings ? Worry Not.

This little package can quickly generate a directory listing which can be then deployed alongwith the files to make it easy to share files over free public hosting spaces like surge.sh, vercel, netlify, firebase or even your own server.

## Usage

```bash
# Install
sudo npm i -g @hackcode/file-preview-page

# Run from directory where you want to generate index file
cd my-project
file-preview-page

# Checkout the index.html file created
google-chrome index.html
```

#### Logs

![https://i.imgur.com/U5WlzgG.png](https://i.imgur.com/U5WlzgG.png)

#### Generated File

Note that all the file-names are clickable, to facilitate quick navigation / download.

![https://i.imgur.com/Jc7zInK.png](https://i.imgur.com/Jc7zInK.png)
