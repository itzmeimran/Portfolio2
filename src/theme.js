// theme.js
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

function colors (){
  const {heading} = useSelector((state)=>state.colors)
  console.log('Themefile heading',heading);
}

export const theme = createTheme({
  palette: {
    background: {
      main: '#F0B86E',
    },
  },
});
