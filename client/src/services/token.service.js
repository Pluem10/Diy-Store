// token.service.js
// จัดการการเก็บและดึงข้อมูล user/token ใน localStorage

const getUser = () => {
  // ดึงข้อมูล user จาก localStorage
  return JSON.parse(localStorage.getItem("user"));
};

const setUser = (user) => {
  // เก็บข้อมูล user ลง localStorage
  localStorage.setItem("user", JSON.stringify(user));
};

const getLocalAccessToken = () => {
  // ดึง token จาก user ที่เก็บไว้
  const user = getUser();
  return user?.token; // ถ้าไม่มี user จะส่ง undefined
};

const removeUser = () => {
  // ลบข้อมูล user จาก localStorage
  localStorage.removeItem("user");
};

const TokenService = {
  getUser,
  setUser,
  getLocalAccessToken,
  removeUser,
};

export default TokenService;
