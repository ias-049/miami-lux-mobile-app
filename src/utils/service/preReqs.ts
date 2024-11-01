import { utility } from '../utility';

export const preReqs = (...args: any[]) => {
  // let [toast, dispatcher] = args;
  let [toast, translation] = args;
  utility.showToast = toast();
};
