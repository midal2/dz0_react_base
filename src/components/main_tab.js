import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
// npm install --save react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import RecentlyPrograms from './recently_programs';
import Programs from './programs';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class MainTab extends Component{
  constructor(props){
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render(){
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="하고싶은것들" value={0} />
          <Tab label="서버상황" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <RecentlyPrograms/>
            <Programs/>
          </div>
          <div style={styles.slide}>
            지금까지 진행한 통계내역
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
