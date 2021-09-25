import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    console.log(`chegou2 ${filename}`);
    await fs.promises.stat(filename);
  } catch {
    console.log("chegou3");
    return;
  }
  await fs.promises.unlink(filename);
};
