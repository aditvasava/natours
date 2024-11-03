import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
  try {
    const resp = await axios({
      method: 'POST',
      url: 'api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (resp.data.status === 'success') {
      showAlert('success', 'Logged in successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const resp = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });

    if ((resp.data.status = 'success')) location.assign('/');
  } catch (err) {
    showAlert('error', 'Error logging out. Try again');
  }
};
