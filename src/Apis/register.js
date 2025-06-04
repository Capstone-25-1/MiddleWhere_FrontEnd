import axios from 'axios';

// 회원 등록
export const registerUser = async ({
  userId,
  nickname,
  age,
  defaultLocation,
}) => {
  return axios.post('/api/user/register', {
    userId: userId,
    userName: nickname,
    userAge: age,
    userDefaultLocation: defaultLocation,
  });
};
