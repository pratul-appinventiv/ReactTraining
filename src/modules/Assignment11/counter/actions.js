export const incrementCounter = (number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};

export const decrementCounter = (number) => {
  return {
    type: "DECREMENT",
    payload: number,
  };
};
