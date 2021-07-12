import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer as dataRedux } from "./homePageRedux";

const config = {
  key: "root",
  storage: storage,
  whitelist: [],
};
export default persistCombineReducers(config, {
  data: dataRedux,

});
