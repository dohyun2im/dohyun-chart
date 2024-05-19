import * as flowApis from "./flow";
import * as upbitApis from "./upbit";

const apis = Object.freeze({
  ...flowApis,
  ...upbitApis
});

export default apis;
