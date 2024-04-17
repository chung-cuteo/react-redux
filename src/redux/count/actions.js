import { DECREASE_COUNT, INCREASE_COUNT } from "./type";

export const increaseCount = (payload) => {
  return {
    type: INCREASE_COUNT,
    payload,
  };
};

export const decreaseCount = (payload) => {
  return {
    type: DECREASE_COUNT,
    payload,
  };
};
