import { Store } from "pullstate";

export const UserStore = new Store({
  isAuth: false,
  profile: {},
});
