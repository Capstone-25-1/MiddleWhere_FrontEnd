import axios from 'axios';

// 사용자 정보 수정
export const updateUserInfo = async ({
  userid,
  nickname,
  age,
  defaultLocation,
}) => {
  return axios.post('/api/user/edit', {
    userId: userid,
    userName: nickname,
    userAge: age,
    userDefaultLocation: defaultLocation,
  });
};

// 사용자 탈퇴
export const deleteUser = async (userId) => {
  return axios.delete(`/api/user/exit/${userId}`);
};
