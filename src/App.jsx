import { useState } from "react";
import {
  Typography,
  AppBar,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({}));

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

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <CustomContainer maxWidth="sm" style={{ marginTop: "100px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {" "}
              Photo Album{" "}
            </Typography>
            <Typography
              vriant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and sc
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
                <Grid item>
                  <CustomButton>Third action</CustomButton>
                </Grid>
              </Grid>
            </div>
          </CustomContainer>
        </div>
      </main>
    </>
  );
}

export default App;
