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
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://image.sportsseoul.com/2017/12/07/news/20171207013514_2.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://mail.hsc.ac.kr/help/ko/img/schedule/schedule_main00.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://mail.hsc.ac.kr/help/ko/img/schedule/schedule_main00.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://mail.hsc.ac.kr/help/ko/img/schedule/schedule_main00.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://mail.hsc.ac.kr/help/ko/img/schedule/schedule_main00.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://mail.hsc.ac.kr/help/ko/img/schedule/schedule_main00.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://mail.hsc.ac.kr/help/ko/img/schedule/schedule_main00.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

export default class TodoSummary extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {tilesData.map((tile) => (
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
