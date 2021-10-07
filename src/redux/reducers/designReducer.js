import {
  DESIGN_DETAILS_FAIL,
  DESIGN_DETAILS_REQUEST,
  DESIGN_DETAILS_SUCCESS,
  DESIGN_LIST_FAIL,
  DESIGN_LIST_SUCCESS,
} from "../constants/designConstants";

export const designsListReducer = (
  state = { loading: true, designs: [] },
  action
) => {
  switch (action.type) {
    case DESIGN_LIST_SUCCESS:
      return { loading: false, designs: action.payload };
    case DESIGN_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const designsDetailReducer = (
  state = { loading: true, design: {} },
  action
) => {
  switch (action.type) {
    case DESIGN_DETAILS_REQUEST:
      return { loading: true };
    case DESIGN_DETAILS_SUCCESS:
      return { loading: false, design: action.payload };
    case DESIGN_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
