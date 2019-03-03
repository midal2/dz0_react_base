import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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

const tilesData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6MNvfp_X9R2nmHywM_V28kJWUo67sjD-k_sOTvlP1nNKdUfRE',
    title: '주식시세',
    author: '한국증권거래소',
  },
  {
    img: 'http://thumb.mt.co.kr/06/2017/12/2017122808434873281_1.jpg',
    title: '내가좋아하는것들',
    author: '후후',
  },
];

export default class MaterialMainList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
          cols='3'
        >
          <Subheader>메인목록</Subheader>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
);

  }
}
