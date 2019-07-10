import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "60%",
    backgroundColor: theme.palette.background.paper,
    color: "black"
  },
  nested: {
    paddingLeft: theme.spacing(4),
    color: "black"
  },
  translateTable: {
    color: "black"
  }
}));

export default function NestedList({ item }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <ListItem className={classes.root} button onClick={handleClick}>
        <ListItemText primary={item.koreanLetter} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className={classes.translateTable}>
          <p>
            <stron>Tranlate letter: </stron>
            {item.translateLetter}
          </p>
        </div>
      </Collapse>
    </>
  );
}
