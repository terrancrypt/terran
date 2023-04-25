import { message } from "antd";

export const validateEmail = (value) => {
  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var isEmail = reg.test(value);
  if (isEmail) {
    return true;
  } else {
    message.error("Email không hợp lệ!")
    return false;
  }
};


