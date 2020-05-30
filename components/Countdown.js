import React, { Component } from 'react';

class Countdown extends Component {
  render() {
    let timerLength = 25;
    let targetTime = new Date().getTime() + (1000 * 60 * timerLength);
    function getCountdownTime () {
      let now = new Date().getTime();
      let countdownTime = targetTime - now;
      let minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);
      let prettyTimer = `${minutes}:${seconds}`;
      console.log(prettyTimer);
      return prettyTimer;
    }
    let checkTime = setInterval(getCountdownTime, 1000);
    return (
      <div>
      </div>
    );
  }
}

export default Countdown;