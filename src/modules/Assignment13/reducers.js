import Data from "./Data";

export const initialState = {
  colorsData: Data,
  Theme: { color: "black", backgroundColor: "blue" },
  themeName: "CHANGE TO DARK THEME",
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLORS_TO_ORANGE":
      return {
        colorsData: Data.map((curr) => {
          return {
            ...curr,
            name: "Jaffa",
            color: "#f58d42",
            pantone_value: "16-1454",
            year: "2006",
          };
        }),
        Theme: { ...state.Theme },
        themeName: state.themeName,
      };

    case "CHANGE_COLORS_TO_DEFAULT":
      return {
        colorsData: Data,
        Theme: { ...state.Theme },
        themeName: state.themeName,
      };

    case "CHANGE_THEME":
      return {
        colorsData: [...state.colorsData],
        Theme:
          state.Theme.backgroundColor === "black"
            ? { color: "black", backgroundColor: "blue" }
            : { color: "white", backgroundColor: "black" },
        themeName:
          state.Theme.backgroundColor === "black"
            ? "CHANGE TO DARK THEME"
            : "CHANGE TO DEFAULT THEME",
      };

    default:
      return state;
  }
};
