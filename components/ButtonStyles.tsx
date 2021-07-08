const ButtonStyles = {
    // style object for base or default style
    baseStyle: {},
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        primary: (props) => ({
                bg:  "primary",
                color: "white",
                _hover: {
                    bg: mode( darken('primary', 20), whiten('primary', 20))(props)
                }
        })
    },
    // default values for `size` and `variant`
    defaultProps: {
      size: "",
      variant: "",
    },
  }