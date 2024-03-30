import fs from "fs";

export const persistJSON = (filename: string, dataToPersist: any) => {
  fs.writeFileSync(filename, JSON.stringify(dataToPersist, null, 2));
};

export const readJSONFromFile = async (
  filename: string,
  defaultValue: any = []
): Promise<any> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          // Si el archivo no existe, crear un nuevo archivo con un objeto vacío
          fs.writeFile(filename, JSON.stringify(defaultValue), (err) => {
            if (err) {
              reject(err);
              return;
            }
            resolve(defaultValue);
          });
        } else {
          reject(err);
        }
        return;
      }

      try {
        const result = JSON.parse(data);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  });
};
