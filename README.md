# Node.js File Sorter

A simple Node.js utility that organizes files from a source folder into subfolders based on their file extensions.

For example, files like `.png`, `.jpg`, `.pdf`, `.docx` will automatically be moved into folders named `png`, `jpg`, `pdf`, `docx` inside the destination directory.

---

## Features

* Automatically detects file extensions
* Creates folders dynamically if they do not exist
* Moves files into extension-based folders
* Works with any source and destination folder
* Uses modern Node.js ES Modules (`import` syntax)
* Uses async filesystem operations for reliability

---

## Requirements

* Node.js 16 or higher (recommended)
* `"type": "module"` enabled in `package.json` to allow ES module imports

Example `package.json`:

```json
{
  "type": "module"
}
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/node-file-sorter.git
cd node-file-sorter
```

Install dependencies (none required but recommended to initialize project):

```bash
npm install
```

---

## How to Use

### 1. Import the function

Create another file (for example `main.js`) and import the sorter.

```javascript
import SortFiles from "./index.js";
```

### 2. Run the sorter

```javascript
SortFiles("files", "sortedfiles");
```

### Parameters

| Parameter           | Description                              |
| ------------------- | ---------------------------------------- |
| `SourceFolder`      | Folder containing files you want to sort |
| `DestinationFolder` | Folder where sorted files will be placed |

Example:

```javascript
SortFiles("downloads", "organized");
```

---

## Example

### Before running the script

```
files
├ photo.png
├ document.pdf
├ notes.txt
├ image.jpg
```

### After running the script

```
sortedfiles
├ png
│  └ photo.png
├ pdf
│  └ document.pdf
├ txt
│  └ notes.txt
├ jpg
   └ image.jpg
```

---

## How It Works

1. The program reads all files in the source folder using `fs.readdir`.
2. It detects each file’s extension using `path.extname`.
3. A folder matching the extension name is created if it does not already exist.
4. The file is moved into the corresponding folder using `fs.rename`.

---

## Tips to Avoid Breaking the Code

### 1. Ensure the source folder exists

If the source folder does not exist, the script will throw an error.

Example:

```
SortFiles("files","sortedfiles")
```

Make sure the `files` directory exists.

---

### 2. Do not place the destination folder inside the source folder

Example to avoid:

```
SortFiles("files", "files/sorted")
```

This may cause unexpected behavior because files will move into the same directory structure being scanned.

---

### 3. Avoid duplicate filenames

If two files with the same name already exist in the destination folder, the move operation may fail depending on the operating system.

---

### 4. Files without extensions

Files without extensions may create an empty folder name.
If needed, modify the code to move such files into a folder like `others`.

---

### 5. Only files should be inside the source folder

If the source folder contains directories, the script may attempt to process them as files.

---

## Project Structure

```
project
│
├ index.js
├ main.js
├ files
│
└ sortedfiles
```

---

## Possible Improvements

Future enhancements could include:

* CLI support (`node sorter downloads organized`)
* Logging and progress output
* Skipping directories automatically
* Handling files without extensions
* Adding error handling
* Creating a web interface for file uploads

---

## License

MIT License

---

## Author

Created as a simple Node.js filesystem project for learning backend concepts and file automation.
