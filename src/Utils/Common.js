export const getUser = () => {
  const userStr = sessionStorage.getItem("username");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

export const setUserSession = (token, username) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("username", JSON.parse(username));
};

export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("username");
};
