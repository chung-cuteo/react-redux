import { INCREASE_COUNT, DECREASE_COUNT } from "./type";
import { produce } from "immer";

const initialState = {
  count: 1,
};

export const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREASE_COUNT:
      // redux core
      // return {
      //   count: (state.count += payload),
      // };

      // immer
      return produce(state, (draft) => {
        draft.count += payload;
      });

    case DECREASE_COUNT:
      return {
        count: (state.count -= payload),
      };

    default:
      return state;
  }
};
