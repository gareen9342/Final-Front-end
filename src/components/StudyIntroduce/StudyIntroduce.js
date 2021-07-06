import React from "react";
import "./StudyIntroduce.css";
import { Grid, Paper, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

const StudyIntroduce = (props) => {
    const classes = useStyles();

    return (
        <>
            <header className="bg-white dark:bg-gray-800">
                <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
                    <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
                        <div className="max-w-lg md:mx-12 md:order-2">
                            <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">{props.studyname}</h1>
                            <br/>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper}>{props.addr}</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper}>{props.isOffline}</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper}>{props.count}명</Paper>
                                </Grid>
                            </Grid>


                            <br/>
                            <p>
                                {props.content}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 md:w-1/2">
                        <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120912_172%2Fhappycoupon7_1347436251652qyuav_JPEG%2F93652504.jpg&type=sc960_832" alt="apple watch photo" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default StudyIntroduce;

