import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { Component } from 'react';

export interface IconState {

}

class Icon extends React.Component<any, IconState> {
    render() {
        const { src, id, url } = this.props;

        console.log(src);

        return (
            <Card>
                <CardActionArea component="a" target="_blank" href={url}>
                    <CardMedia image={src} title="Contemplative Reptile" style={{height : '140px'}}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {id}
                         </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default Icon;