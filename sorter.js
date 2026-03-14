import fs from "fs/promises";
import path from "path";

export default async function SortFiles(SourceFolder, DestinationFolder) {
  let ext, foldername;

  let bfFiles = await fs.readdir(`./${SourceFolder}`);

  for (let i = 0; i < bfFiles.length; i++) {
    ext = path.extname(bfFiles[i]);
    foldername = ext.slice(1);

    await fs.mkdir(`./${DestinationFolder}/${foldername}`, { recursive: true });
    await fs.rename(
      path.resolve(`./${SourceFolder}/${bfFiles[i]}`),
      `./${DestinationFolder}/${foldername}/${bfFiles[i]}`,
    );
  }
}
