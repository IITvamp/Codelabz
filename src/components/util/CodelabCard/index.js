import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Chip } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ChatIcon from "@material-ui/icons/Chat";
import useStyles from "./styles";
import PropTypes from "prop-types";

const CardComponent = ({
  title = "I made 100 more CSS loaders for your next project",
  tags = "#css #webdev #beginners #html",
  profilePic = "demoperson4.jpeg",
  org = false,
  background = "white",
}) => {
  const classes = useStyles();
  const [logoPath, setLogoPath] = React.useState("");
  const [tagsArray, setTagsArray] = React.useState([]);
  React.useEffect(() => {
    const createTagArray = async() => {
      const tagSplit = tags.split("#").filter((element) => element);
      const finalTagsArray = await tagSplit.map((item) => {
        if (item) {
          console.log(item,"this is item");
          return item.trim();
        }
      });
      setTagsArray(finalTagsArray);
    }
    createTagArray();
  }, []);

  React.useEffect(() => {
    setLogoPath(org);
  }, [org]);
  
  return (
    <>
      <Card
        maxWidth="sm"
        className={classes.card}
        style={{ background: background }}
        data-testId="codelabzCard"
      >
        <CardHeader
          data-testId="codelabzCardHeader"
          className={classes.cardHeader}
          avatar={
            <Grid
              container
              className={classes.organizationLogo}
              direction="column"
              justify="center"
              alignItems="center"
            >
              {logoPath ? (
                <Grid container>
                  <Grid item className={classes.headerGrid}>
                    <img
                      src="/logo.jpeg"
                      alt="logo"
                      className={classes.logoImg}
                    />
                    <img
                      src={
                        require(`../../../assets/images/${profilePic}`).default
                      }
                      alt=""
                      height="20rem"
                      width="20rem"
                      className={classes.personImg}
                    />
                  </Grid>
                </Grid>
              ) : (
                <img
                  src={require(`../../../assets/images/${profilePic}`).default}
                  alt=""
                  className={classes.avatar}
                />
              )}
            </Grid>
          }
          title={
            org ? (
              <Typography variant="body">
                Demo Name {<span style={{ color: "#7D7C7D" }}>for</span>}{" "}
                ScoreLabz
              </Typography>
            ) : (
              <Typography variant="body">Demo Name</Typography>
            )
          }
          subheader="May25,2021(3 days ago)"
          titleTypographyProps={{ align: "left" }}
          subheaderTypographyProps={{ align: "left" }}
        />
        <CardContent
          data-testId="codelabzCardContent"
          className={classes.cardContent}
          style={{ paddingBottom: "0rem" }}
        >
          <Grid
            container
            alignItems="left"
            justify="flex-start"
            direction="column"
            className={classes.body}
          >
            <Grid item>
              <Typography variant="h5" gutterBottom className={classes.heading}>
                {title}
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="left"
            >
              {tagsArray.map((tag) => {
                return (
                  <Chip
                    variant="body2"
                    color="textPrimary"
                    className={"mr-8 " + classes.tags}
                    label={tag}
                    style={{ marginRight: "5px", marginBottom:"5px" }}
                  >
                    {tag}
                  </Chip>
                );
              })}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions disableSpacing className={classes.cardAction}>
          <Grid
            container
            xs={6}
            justify="left"
            direction="row"
            data-testId="codelabzCardButtonGroup"
          >
            <Grid item direction="row">
              {!org ? (
                <Grid item style={{ height: "2rem" }}>
                  <IconButton style={{ color: "red" }}>
                    <FavoriteIcon />
                  </IconButton>
                  <Typography variant="body" color="textPrimary">
                    222
                  </Typography>
                </Grid>
              ) : (
                ""
              )}
            </Grid>
            <Grid item>
              <IconButton aria-label="comment" style={{ color: "green" }}>
                <ChatIcon />
              </IconButton>
              {org ? (
                <Typography variant="body" color="textPrimary">
                  comment
                </Typography>
              ) : (
                <Typography variant="body" color="textPrimary">
                  20
                </Typography>
              )}
            </Grid>
          </Grid>
          <Grid
            xs={6}
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={3}>
              <Typography
                variant="body2"
                color="textSecondary"
                alignItems="flex-end"
                className={classes.readTime}
              >
                10 min read
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: "royalblue", margin: "16px" }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.string,
  profilePic: PropTypes.string,
  org: PropTypes.bool,
  background: PropTypes.string,
};
export default CardComponent;
