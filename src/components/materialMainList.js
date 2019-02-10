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
    img: 'https://t1.daumcdn.net/cfile/tistory/257F353E58D41CE329',
    title: '요구사항',
    author: 'jill111',
  },
  {
    img: 'http://thumb.mt.co.kr/06/2017/12/2017122808434873281_1.jpg',
    title: '분석',
    author: 'pashminu',
  },
  {
    img: 'https://fimg4.pann.com/new/download.jsp?FileID=43474581',
    title: '설계',
    author: 'Danson67',
  },
  {
    img: 'https://1.bp.blogspot.com/-FOc6NcCdAz0/XEXjYidn3wI/AAAAAAABBE0/neyXR7ZbWcwcmkbpGXknozITzJjzM8VYQCLcBGAs/s1600/TWICE%2BTV%2BYES%2Bor%2BYES%2BSpecial%2BEP.02%2B%25EC%25A7%2580%25ED%259A%25A8%2B6.gif',
    title: '개발',
    author: 'fancycrave1',
  },
  {
    img: 'https://fimg4.pann.com/new/download.jsp?FileID=40426470',
    title: '테스트',
    author: 'Hans',
  },
  {
    img: 'http://image.kmib.co.kr/online_image/2017/0831/201708311352_61180011721344_3.jpg',
    title: '통합테스트',
    author: 'fancycravel',
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
