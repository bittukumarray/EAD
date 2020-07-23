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
    // maxWidth: '36ch',
    display: "flex",
    flexDirection: "row",
    marginBottom: 500,
  },
  inline: {
    display: "inline",
  },
  list: {
    backgroundColor: theme.palette.background.paper,
    height: 150,
    width: 200,
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
          `/api/farmer/get-same-crops/${props.cropName}`
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
        ? cropsData.finalcrop.map((element) => {
            return (
              <React.Fragment>
                <a href={`/crop/detail/${element.crops._id}`}>
                  <ListItem alignItems="flex-start" className={classes.list}>
                    <ListItemAvatar>
                      <Avatar alt="No Image" src={element.farmer.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={element.farmer.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {element.crops.city}
                          </Typography>
                          <Typography>
                            <span style={{ color: "rgba(200,20,20,0.8)" }}>
                              {element.farmer.totalOrders}{" "}
                            </span>{" "}
                            Customers have bought from him
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
