export const isValidToken = (token: string) => {
  const pattern = /^[a-zA-Z]{16}$/;

  return pattern.test(token);
};

export interface TokenType {
  token: string;
  expDate: string;
}

export const setLocalStore = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const isTokenExpired = () => {
  const userIsRegistered: { token: string; loginDate: string } = JSON.parse(
    localStorage.getItem("token")!
  );

  const nowDate = new Date();
  const registeredDate = new Date(userIsRegistered.loginDate);

  const difference = (Number(nowDate) - Number(registeredDate)) / (60 * 1000);

  return difference >= 10;
};
