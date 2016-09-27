import React, { Component } from 'react';
import BackTube from 'back-tube';

class Hero extends Component {
  video: HTMLDivElement;
  backTube: BackTube;

  componentDidMount() {
    this.backTube = new BackTube(this.video, {
      videoId: 'w6jOWFzU4AE',
      cover: false,
    });
  }

  render() {
    return (
      <div className="top-hero">
        <div id="top-hero__video" className="top-hero__video-bg" ref={c => (this.video = c)}>
          <div className="top-hero__bg" />
          <div className="top-hero__entry" />
          <div className="top-hero__text">
            <img src="//feedtech.net/images/hero_text.svg" alt="データフィードの現在と未来を語り尽くす熱狂の一日、再び。" />
          </div>
          <div className="top-hero__schedule_bg" />
          <p className="top-hero__schedule">
            2016.9.6(TUE)＠御茶ノ水ソラシティカンファレンスセンター
          </p>
        </div>
      </div>
    );
  }
}

export default Hero;
