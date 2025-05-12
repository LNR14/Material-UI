const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
  padding: theme.spacing(1.5),
  borderRadius: "12px",
}));

const CustomContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  padding: theme.spacing(8, 0, 6),
}));

// export default CustomButton;
export default CustomContainer;
