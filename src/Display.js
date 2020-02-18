import React, {Component} from 'react';
import data from "./restaurants.json"; //importing the local .json file
import Card from '@material-ui/core/Card';
import {Button, CardContent, CardHeader, CardMedia, Grid, Typography} from "@material-ui/core";

class Display extends Component {

    constructor(props) {
        super(props)
        this.sortAtoZ = this.sortAtoZ.bind(this) //binds the function so that the 'this' value is passed to the function once it's called
        this.sortZtoA = this.sortZtoA.bind(this)
        this.state = {
            restList : [] //initializing empty array as the state
        }
    }

    sortAtoZ(event){
        //sorting function that's run once the button is pressed. Sorts the array aplhabetically according to name value
        //and sets the sorted array to the state

        const {restList} = this.state
        let newRestList = restList
        restList.sort((a,b) => (a.name > b.name) ? 1 : -1)
        this.setState({
            restList: newRestList
        })
    }

    sortZtoA(event){
        //function that reverses the array order based on name once button is pressed and returns it as a state

        const {restList} = this.state
        let newRestList = restList
        restList.reverse()
        this.setState({
            restList: newRestList
        })
    }

        componentDidMount() {
        const restList = data //the empty array which gets the data from the imported .json file
        this.setState({
            restList:  restList.restaurants
        })
    }

    render(){

        const {restList} = this.state

        return (
            <div>
                <Button variant="outlined" color="primary" size="large" style={{padding: 10, marginLeft: '38%', marginRight: 5, marginBottom: 50, marginTop: 20}} onClick={this.sortAtoZ}>Sort ascending</Button>
                <Button variant="outlined" color="secondary" size="large" style={{padding: 10, marginLeft: 5,marginBottom: 50, marginTop: 20}} onClick={this.sortZtoA}>Sort descending</Button>
            <Grid container spacing = {30} flewGrow={3} justifyContent = 'row' >
                {restList.map((restaurant, i) => { //function which goes through the .json file, defines each object with unique key
                                                    // and shows information defined below
                        return <Grid key={i} >
                            <Card style={{width: 400, height: 360, marginLeft: 50, marginRight: 50, marginBottom: 50, marginTop: 10}} variant="outlined">
                            <CardHeader title={restaurant.name}
                                        subheader={restaurant.city}/>
                            <CardContent>
                                <CardMedia style={{height: 200}} image={restaurant.image}/>
                                <Typography>{restaurant.tags[0]}</Typography>
                                <Typography>{restaurant.tags[1]}</Typography>
                            </CardContent>
                        </Card>
                        </Grid>
                    }
                )
                }
            </Grid>
            </div>
        );
    }
}

export default Display; //exports the component and its functions for app.js to use
