import { commands } from "./modules/commands";
import { runtime } from "./modules/runtime";
import { storage } from "./modules/storage";
import { tabs } from "./modules/tabs";

vi.stubGlobal("chrome", {
  storage: {
    local: storage,
    sync: storage,
  },
  commands,
  tabs,
  runtime,
});
