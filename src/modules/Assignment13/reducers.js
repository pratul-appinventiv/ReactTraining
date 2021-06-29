import Data from "./Data";

export const initialColorState = {
  colorsData: Data,
};

export const initialThemeState = {
  Theme: { color: "black", backgroundColor: "blue" },
  themeName: "CHANGE TO DARK THEME",
};

export const colorReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLORS_TO_ORANGE":
      return {
        ...state,
        colorsData: Data.map((curr) => {
          return {
            ...curr,
            name: "Jaffa",
            color: "#f58d42",
            pantone_value: "16-1454",
            year: "2006",
          };
        }),
      };

    case "CHANGE_COLORS_TO_DEFAULT":
      return {
        ...state,
        colorsData: Data,
      };

    default:
      return state;
  }
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
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
