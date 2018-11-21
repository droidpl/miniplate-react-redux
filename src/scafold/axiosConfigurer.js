export default (axios, state) => {
  axios.interceptors.request.use((config) => {
    if (state.getState().auth.token) {
      config.headers.Authorization = `Bearer ${state.getState().auth.token.access_token}`;
    }
    return config;
  })
}