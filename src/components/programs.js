import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { connect } from 'react-redux';
import selectProgram from '../actions/index';
import { bindActionCreators } from 'redux';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class Programs extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
          cols={3}
        >
          <Subheader>메인목록</Subheader>
          {this.props.programs.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              onClick={()=>this.props.selectProgram(tile)}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectProgram:selectProgram}, dispatch);
}

function mapStateToProps(state){
  return {
    programs : state.programs
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Programs);
