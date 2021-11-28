import { fetchDataError, fetchDataRequest, fetchDataSuccess } from "./action";
import request from "../../../utils/axiosWrapper";

export function fetchHomepageBlogs() {
  console.log('called');
    return (dispatch) => {
      dispatch(fetchDataRequest());
      // axios request
      let req = request({
        url:    `todos`,
        method: 'GET',

      });
      // axios response
      req.then(
        (res) => {
          dispatch(fetchDataSuccess(res));
        },
        (err) => {
          dispatch(fetchDataError(err));
        }
      );
    };
  }

  export function postHomepageBlog(data) {
    return (dispatch) => {
      dispatch(fetchDataRequest());
      // axios request
      let req = request({
        url:    `todos`,
        method: 'POST',
        data: data
      });
      // axios response
      req.then(
        (res) => {
          dispatch(fetchDataSuccess(res));
        },
        (err) => {
          dispatch(fetchDataError(err));
        }
      );
    }
  }