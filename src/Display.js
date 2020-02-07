import React, {Component} from 'react';
import data from "./restaurants.json";
import Card from '@material-ui/core/Card';
import {Button, CardContent, CardHeader, CardMedia, Grid, Typography} from "@material-ui/core";

class Display extends Component {

    constructor(props) {
        super(props)
        this.sortByDesc = this.sortByDesc.bind(this)
        this.state = {
            restList : []
        }
    }

    sortByDesc(event){
        const {restList} = this.state
        let newRestList = restList
        restList.sort((a,b) => (a.name > b.name) ? 1 : -1)
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
                <Button onClick={this.sortByDesc}>Sort</Button>
                {restList.map((item, i) => {
                        return <Grid
                            key={i}
                            container spacing={2}
                            style={{padding: 20}}>
                            <Card style={{width: 350, margin: 20,}} variant="outlined">
                            <CardHeader title={item.name}
                                        subheader={item.city}/>
                            <CardContent>
                                <CardMedia style={{height: 200}} image={item.image}/>
                                <Typography>{item.tags[0]}</Typography>
                                <Typography>{item.tags[1]}</Typography>
                                <Typography>{item.delivery_price}</Typography>
                            </CardContent>
                        </Card>
                        </Grid>
                    }
                )
                }
            </div>
        );
    }
}

export default Display;