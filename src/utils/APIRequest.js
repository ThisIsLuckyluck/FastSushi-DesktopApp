const get = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const login = async (url, credentials) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  // Stocker le token dans le localStorage
  sessionStorage.setItem('token', data.token);
};

const checkIfLoggedIn = () => {
  // Check if the user is logged in by checking if the token is in the local storage and if it's not expired
  const token = sessionStorage.getItem('token');
  if (!token) 
  return false;
};

export {
  get,
  login,
  checkIfLoggedIn,
};