import axios from 'axios'
import {ENVIRONMENT} from "../constants/constants";

export default {
  name: 'auth',
  state: {
    username: '',
    password: '',
    token: '',
    isLoading: false,
    hasError: false
  },
  reducers: {
    changeUsername(state, payload) {
      return {
        ...state,
        username: payload.username,
      };
    },
    changePassword(state, payload) {
      return {
        ...state,
        password: payload.password,
      };
    },
    setToken(state, payload) {
      return {
          ...state,
        token: payload
      }
    },
    setLoader(state, payload) {
      return {
          ...state,
        isLoading: payload
      }
    },
    setError(state, payload){
      return {
          ...state,
        hasError: payload
      }
    }
  },
  effects: (dispatch) => ({
    async initUser(payload) {
      try {
        dispatch.auth.setError(false);
        dispatch.auth.setLoader(true);
        const tokenResponse = await axios.post(`${ENVIRONMENT}/api/oauth/token`, {
          "username": payload.username,
          "password": payload.password,
          "grant_type": "password"
        });
        dispatch.auth.setToken(tokenResponse.data);
      }catch (e) {
        dispatch.auth.setError(true);
      }finally {
        dispatch.auth.setLoader(false);
      }
    }
  })
}