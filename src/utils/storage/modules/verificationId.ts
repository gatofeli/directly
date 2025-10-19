import { ProcessedDataURL } from "../type";

/**
 * Transforma el Array original.
 * Corrige los 'id' invalidos o repetidos.
 *
 * @remark
 * Recorre el array pasado por parametro y verifica que la propiedad 'id' de cada objeto sea un number único.
 * Se modificarán todos los ids no validos, haciendo que  -----------------------------------------------------------------
 *
 * @param dataList - Un array con los datos provenientes de la DB.
 * @returns Un booleano que indica si se ha corregido algun dato.
 */

export function verificationId(dataList: ProcessedDataURL[]) {
  const set = new Set();
  const unvalidateIndex: number[] = [];
  let maxId: number = -1;
  let needsUpdate: boolean = false;

  dataList.forEach(({ id }, index) => {
    if (typeof id !== "number") {
      unvalidateIndex.push(index);
      needsUpdate = true;
      return;
    }

    if (set.has(id)) {
      unvalidateIndex.push(index);
      needsUpdate = true;
      return;
    }

    set.add(id);
    maxId = id > maxId ? id : maxId;
  });

  unvalidateIndex.forEach((idx) => {
    maxId++;
    dataList[idx].id = maxId;
  });

  return needsUpdate;
}
