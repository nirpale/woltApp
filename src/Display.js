import React, {Component} from 'react';
import data from "./restaurants.json";
import Card from '@material-ui/core/Card';
import {Button, CardContent, CardHeader, CardMedia, Grid, Typography} from "@material-ui/core";

class Display extends Component {

    constructor(props) {
        super(props)
        this.sortAtoZ = this.sortAtoZ.bind(this)
        this.sortZtoA = this.sortZtoA.bind(this)
        this.state = {
            restList : []
        }
    }

    sortAtoZ(event){
        const {restList} = this.state
        let newRestList = restList
        restList.sort((a,b) => (a.name > b.name) ? 1 : -1)
        this.setState({
            restList: newRestList
        })
    }

    sortZtoA(event){
        const {restList} = this.state
        let newRestList = restList
        restList.reverse()
        this.setState({
            restList: newRestList
        })
    }

        componentDidMount() {
        const restList = data
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
                {restList.map((restaurant, i) => {
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

export default Display;
