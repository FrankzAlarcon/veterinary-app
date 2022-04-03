export const createId = () => {
  const ramdom = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);
  return ramdom + date;
};
