import { URL_VALIDATION_STATUS } from "../constants/enums";
import { verificationId } from "./modules/verificationId";
import { verificationName } from "./modules/verificationName";
import { verificationURL } from "./modules/verificationURL";
import { ProcessedDataURL, StorageDataURL, StorageType } from "./type";

class Controller {
  async getAll() {
    //
  }
  async getConfig() {
    //
  }

  /* --------------- TO DO ---------------------
    todo: Magic String
    todo: chrome.runtime.lastError del get
    todo: if (needsUpdate) { updateDataURLs() } + chrome.runtime.lastError
*/
  async getURL() {
    const { _dataURLs_ }: StorageType = await chrome.storage.local.get("_dataURLs_");
    if (chrome.runtime.lastError) {
      //!--------------------------------------------------------------------------------
    }

    const [processedData, needsUpdate] = this.#handlerFetchDataURL(_dataURLs_);

    if (needsUpdate) {
      //!------------------------------------------------------------------------------- actualizar DB
    }

    return processedData;
  }

  #handlerFetchDataURL(dataURLs?: StorageDataURL[]): [ProcessedDataURL[], boolean] {
    const provisionalInvalidData: ProcessedDataURL[] = [];
    const provisionalValidData: ProcessedDataURL[] = [];
    let processedData: ProcessedDataURL[] = [];
    let needsUpdate = false;

    if (!Array.isArray(dataURLs)) {
      needsUpdate = true;
      return [processedData, needsUpdate];
    }

    dataURLs.forEach(({ name: rawName, url: rawURL, id: rawId }, i, data) => {
      if (typeof data[i] !== "object") {
        needsUpdate = true;
        return;
      }

      const [name, update] = verificationName(rawName);
      const [alert, url] = verificationURL(rawURL);

      if (update) {
        needsUpdate = true;
      }

      if (alert === URL_VALIDATION_STATUS.INVALID) {
        needsUpdate = true;
        return;
      }

      const newData: ProcessedDataURL = {
        name: name,
        url: url,
        id: rawId,
        alert: alert !== URL_VALIDATION_STATUS.SUCCES ? true : false,
      };

      newData.alert ? provisionalInvalidData.push(newData) : provisionalValidData.push(newData);
    });

    processedData = [...provisionalValidData, ...provisionalInvalidData];

    needsUpdate = verificationId(processedData) ? true : needsUpdate;
    return [processedData, needsUpdate];
  }
}

export const storage = new Controller();
