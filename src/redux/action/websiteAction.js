import Axios from "axios";
import {
  WEBSITE_DETAILS_FAIL,
  WEBSITE_DETAILS_REQUEST,
  WEBSITE_DETAILS_SUCCESS,
} from "../constants/websiteConstant";

export const detailWebsite = (websiteId) => async (dispatch) => {
  dispatch({
    type: WEBSITE_DETAILS_REQUEST,
    payload: websiteId,
  });
  try {
    const { data } = await Axios.get(`/api/websites/${websiteId}`);
    dispatch({
      type: WEBSITE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WEBSITE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
