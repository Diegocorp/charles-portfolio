import Axios from "axios";
import {
  DESIGN_DETAILS_FAIL,
  DESIGN_DETAILS_REQUEST,
  DESIGN_DETAILS_SUCCESS,
} from "../constants/designConstants";

export const detailDesign = (designId) => async (dispatch) => {
  dispatch({
    type: DESIGN_DETAILS_REQUEST,
    payload: designId,
  });
  try {
    const { data } = await Axios.get(`/api/designs/${designId}`);
    dispatch({
      type: DESIGN_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DESIGN_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
