import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { connect } from 'react-redux';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

class RecentlyPrograms extends Component {
  constructor(props){
    super(props);
  }

  // 최근수행한 창목록가져오기
  getRecentlyList(){
    console.dir(this.props);
    return this.props.recently_programs;
  }

  render(){
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {this.getRecentlyList().map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {recently_programs : state.recently_programs}
}

export default connect(mapStateToProps)(RecentlyPrograms);
