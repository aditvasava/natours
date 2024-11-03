import axios from 'axios';
import { showAlert } from './alert';

export const updateSettings = async (data, type) => {
  try {
    let url = 'api/v1/users/updateMe';
    if (type === 'password') url = 'api/v1/users/updateMyPassword';

    const resp = await axios({
      method: 'PATCH',
      url,
      data,
    });
    if (resp.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully`);
      window.setTimeout(() => {
        location.assign('/me');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
