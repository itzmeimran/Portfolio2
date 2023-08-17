import { createSlice } from "@reduxjs/toolkit";

const getInitialColors = () => {
  const storedName = localStorage.getItem("name");
  const storedHeading = localStorage.getItem("heading");
  const storedBody = localStorage.getItem("body");
  const storedBackground = localStorage.getItem("background");
  const storedBorder = localStorage.getItem("border");
  const storedButton = localStorage.getItem("button");
  const storedButtonFont = localStorage.getItem("buttonFont");

  return {
    name: storedName || 'default',
    heading: storedHeading || "#FF97C1",
    body: storedBody || "#FFFFFF",
    background: storedBackground || "#323232",
    border: storedBorder || "#FFFFFF",
    button: storedButton || "#FFFFFF",
    buttonFont: storedButtonFont || "",
  };
};

export const colorSlice = createSlice({
  name: "colors",
  initialState: getInitialColors(),
  reducers: {
    setTheme: (state, action) => {
      state.name = action.payload;
      state.heading = action.payload;
      state.body = action.payload;
      state.border = action.payload;
      state.background = action.payload;
      state.button = action.payload;
      state.buttonFont = action.payload;
    },
  },
});

export const { setTheme } = colorSlice.actions;
export default colorSlice.reducer;
