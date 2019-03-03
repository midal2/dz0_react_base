import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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

const tilesData = [
  {
    img: 'http://mail.hsc.ac.kr/help/ko/img/schedule/schedule_main00.jpg',
    title: '주식목록가져오기',
    author: '한국증권거래소',
  },
  {
    img: 'http://image.sportsseoul.com/2017/12/07/news/20171207013514_2.jpg',
    title: '개발관리',
    author: '내꼬',
  },
];

export default class TodoSummary extends Component {
  constructor(props){
    super(props);
  }

  // 최근수행한 창목록가져오기
  getRecentlyList(){
    return tilesData;
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
