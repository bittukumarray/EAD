import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import FarmerRegistration from "./Register";
import GeneralRegistration from "./generalRegister";
import { connect } from "react-redux";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const  CenteredTabs =()=> {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const [cont, setCont] = React.useState(<FarmerRegistration></FarmerRegistration>)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onClickHandlerFarmer = (e) => {
        setCont(<FarmerRegistration></FarmerRegistration>);
    }

    const onClickHandlerUser = (e) => {
        setCont(<GeneralRegistration></GeneralRegistration>);
    }

    return (
        <Container>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Farmer Registration" onClick={onClickHandlerFarmer} />
                    <Tab label="General User Registration" onClick={onClickHandlerUser} />
                </Tabs>
            </Paper>
            <Container style={{ textAlign: "center" }}>
                <div style={{marginTop:50}}>
                    {cont}
                </div>

            </Container>
        </Container>
    );
}

export default connect(null, { })(CenteredTabs);
