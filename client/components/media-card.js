import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import {StyledLinkText} from '../style'

const styles = {
  card: {
    maxWidth: 800,
  },
  media: {
    height: 140,
  },
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
`

const StyledCardSideText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

const StyledImg = styled.img`
  height: auto;
  width: auto;
  max-height: 80px;
  max-width: 200px;
  border: 2px solid black;
  border-radius: 4px;
`

function MediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <StyledCard>
        <a href={props.url}>
        <StyledImg src={props.image} />
        </a>
        <StyledCardSideText>
          <Typography 
            variant="title" 
          > 
            {props.title}
          </Typography>
          <p>
            <StyledLinkText href={props.source}>Github</StyledLinkText>
          </p>
        </StyledCardSideText>
      </StyledCard>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);


/*
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            src={props.image}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.title}
            </Typography>
            <Typography component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
*/
