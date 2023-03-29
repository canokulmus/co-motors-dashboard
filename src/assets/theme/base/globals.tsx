import colors from "assets/theme/base/colors";

const { dark, bodyBackground } = colors;

const globals = {
  html: {
    scrollBehavior: "smooth",
    background: dark.body,
  },
  body: {
    backgroundColor: bodyBackground,
    minHeight: "100vh",
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
  },
};

export default globals;
