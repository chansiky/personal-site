import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import {Clear } from '@material-ui/icons';
import MinimizeIcon from '@material-ui/icons/Minimize';
import { Emoji, Sidebar } from './index'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BlackReactRouterLink} from '../style'
import Drawer from '@material-ui/core/Drawer';

const StyledColumnAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  width: 30vw;
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
    transition: 'transform .1s',
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

    const shouldShow = 
        (lastScroll <= 20) ?  true :
        (lastScroll >= window.innerHeight - 100) ? false :
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
  getSidebarClassName(){
    return this.state.expanded
    ? this.props.classes.show
    : this.props.classes.hide
  }

  handleMenuClick(){
    this.setState({...this.state, expanded: !this.state.expanded})
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
            {this.state.expanded
            ? <Clear />
            : <Menu />
            }
          </IconButton>
          <div className={classes.center}>
            <BlackReactRouterLink to={'/'} cursor='pointer'> 
            <Emoji/>
            </BlackReactRouterLink> 
          </div >
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <div className={classes.blankIcon} />
          </IconButton>
        </Toolbar>
        <Drawer open={this.state.expanded} onClose={this.handleMenuClick}>
            <StyledColumnAlign> 
              <Sidebar /> 
            </StyledColumnAlign> 
        </Drawer>
      </AppBar>
    </div>
    )
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
