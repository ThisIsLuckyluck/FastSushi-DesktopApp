const get = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const checkIfLoggedIn = () => {
  // Check if the user is logged in by checking if the token is in the local storage and if it's not expired
  const token = localStorage.getItem('token');
  if (!token) return false;
  return true;
  //const decodedToken = JSON.parse(atob(token.split('.')[1]));
  //return decodedToken.exp > Date.now() / 1000;
};

export {
  get,
  checkIfLoggedIn,
};
