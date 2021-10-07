import Axios from "axios";
import { APP_LIST_SUCCESS, APP_LIST_FAIL } from "../constants/appsConstants";
import {
  DESIGN_LIST_FAIL,
  DESIGN_LIST_SUCCESS,
} from "../constants/designConstants";
import {
  WEBSITE_LIST_FAIL,
  WEBSITE_LIST_SUCCESS,
} from "../constants/websiteConstant";

export const initialData = () => async (dispatch) => {
  try {
    const res = await Axios.post("/api/");
    if (res.status === 200) {
      const { apps, websites, designs } = res.data;
      dispatch({
        type: APP_LIST_SUCCESS,
        payload: apps,
      });
      dispatch({
        type: WEBSITE_LIST_SUCCESS,
        payload: websites,
      });
      dispatch({
        type: DESIGN_LIST_SUCCESS,
        payload: designs,
      });
    }
  } catch (error) {
    dispatch({
      type: APP_LIST_FAIL,
      payload: error.message,
    });
    dispatch({
      type: WEBSITE_LIST_FAIL,
      payload: error.message,
    });
    dispatch({
      type: DESIGN_LIST_FAIL,
      payload: error.message,
    });
  }
};
