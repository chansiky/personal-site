import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MinimizeIcon from '@material-ui/icons/Minimize';
import { Emoji, Sidebar } from './index'
import styled from 'styled-components'

const StyledColumnAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const styles = {
  root: {
    flexGrow: 1,
    position: 'fixed',
    variant: 'dense',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 12,
  },
  show: {
    transform: 'translateY(0)',
    transition: 'transform .3s',
  },
  hide: {
    transform: 'translateY(-110%)',
    transition: 'transform .3s',
  },
  center: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  blankIcon: {
    height: '24dp',
    width: '24dp',
  }
};

class SimpleAppBar extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      expanded: false,
      shouldShow: null
    }

    this.lastScroll = null
    this.handleScroll = this.handleScroll.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(evt) {
    const lastScroll = window.scrollY;

    if (lastScroll === this.lastScroll) {
      return;
    }

    const shouldShow = (lastScroll <= 20) ? 
      true :
        (this.lastScroll !== null) ?  (lastScroll < this.lastScroll) : null
    

    if (shouldShow !== this.state.shouldShow) {
      this.setState((prevState, props) => ({
        ...prevState,
        shouldShow,
      }));
    }

    this.lastScroll = lastScroll;
  }

    getScrollClassName() {
    if (this.state.shouldShow === null) {
      return '';
    }

    return this.state.shouldShow
      ? this.props.classes.show
      : this.props.classes.hide;
  }

  handleMenuClick(){
    this.setState({...this.state, expanded: !this.state.expanded})
    console.log(this.state.expanded)
  }

  render(props){
    const { classes } = this.props;
    return (
    <div className={classes.root}>
      <AppBar position="sticky" color="inherit"
           className={
            `${classes.root} 
             ${this.getScrollClassName()}`
          } 
      >
        <Toolbar variant='dense' className={classes.center}>
          <IconButton onClick={this.handleMenuClick} className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.center}>
            <Emoji/>
          </div >
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <div className={classes.blankIcon} />
          </IconButton>
        </Toolbar>
        {this.state.expanded && <StyledColumnAlign> <Sidebar /> </StyledColumnAlign>}
      </AppBar>
    </div>
    )
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
