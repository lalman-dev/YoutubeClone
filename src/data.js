export const API_KEY = "AIzaSyB7CxN4eP0x0mbbtj1hJWSdRw_o-5ZeWCI";
export const value_convertor = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
