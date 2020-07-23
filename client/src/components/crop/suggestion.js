import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList(props) {
  const classes = useStyles();

  const [cropsData, setCropsData] = React.useState(null);

  React.useEffect(() => {
    (async function anyNameFunction() {
      try {
        // console.log("Data is ", props);
        const data = await axios.get(
          `/api/farmer/farmer-crops/${props.farmerId}`
        );
        setCropsData(data.data);
        console.log("Data is ", data);
      } catch (e) {
        console.log("error in data is ", e);
        setCropsData(null);
      }
    })();
  }, []);

  return (
    <List className={classes.root}>
      {cropsData
        ? cropsData.crops.map((element) => {
            return (
              <React.Fragment>
                <a href={`/crop/detail/${element._id}`}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="No Image" src={element.img} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={element.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {element.city}
                          </Typography>
                          <Typography>
                            {element.details.substring(0, 100) + "..."}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </a>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            );
          })
        : null}
    </List>
  );
}
