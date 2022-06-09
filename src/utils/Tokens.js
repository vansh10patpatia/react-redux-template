
const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.tokens?.refresh?.token;
  };
  const getLocalAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.tokens?.access?.token;
  };
  const updateLocalAccessToken = (token) => {
    let user = JSON.parse(localStorage.getItem("user"));
    user.tokens.access.token = token;
    localStorage.setItem("user", JSON.stringify(user));
  };
  const updateLocalRefreshToken = (token) => {
    let user = JSON.parse(localStorage.getItem("user"));
    user.tokens.refresh.token = token;
    localStorage.setItem("user", JSON.stringify(user));
  };
  const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  const removeUser = () => {
    localStorage.removeItem("user");
  };
  const TokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUser,
    setUser,
    removeUser,
    updateLocalRefreshToken
  };
  export default TokenService;