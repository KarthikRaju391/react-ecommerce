import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  registerStart,
  registerSuccess,
<<<<<<< HEAD
  registerFailure
} from "./userRedux";
import { publicRequest } from "../requestMethods";
=======
  registerFailure,
} from './userRedux';
import { publicRequest } from '../requestMethods';
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
<<<<<<< HEAD
    const res = await publicRequest.post("/auth/login", user);
=======
    const res = await publicRequest.post('/auth/login', user);
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
  } catch (error) {
<<<<<<< HEAD
    dispatch(logoutFailure)
  }
}
=======
    dispatch(logoutFailure);
  }
};
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
<<<<<<< HEAD
    const res = await publicRequest.post("/auth/register", user)
    dispatch(registerSuccess(res.data))
  } catch (error) {
    dispatch(registerFailure())
  }
}
=======
    const res = await publicRequest.post('/auth/register', user);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFailure());
  }
};
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
