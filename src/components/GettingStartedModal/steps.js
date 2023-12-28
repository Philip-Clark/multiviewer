import React from 'react';
import R from '../../assets/gettingStarted/page1/R.gif';
import { FaCog } from 'react-icons/fa';

export const step1 = () => {
  return (
    <div>
      <h1>Welcome to Mult-i-viewer</h1>
      <img src={R} />
      <p>
        Mult-i-viewer is a tool for creating a custom dashboard of multiple streams. It is designed
        to be used for monitoring multiple streams at once, but it can also be used in many other
        creative ways.
      </p>
    </div>
  );
};
export const step2 = () => {
  return (
    <div>
      <h1>Adding Views</h1>
      <img src={R} />
      <p>
        To add a view, click the <FaCog /> button in the bottom right corner of the screen. This
        will open the <b>Source Controller</b> where you can add a view to the current tab.
      </p>
      <p>
        You can also add, remove and rename tabs in the <b>Source Controller</b>
      </p>
    </div>
  );
};
export const step3 = () => {
  return <div>step3</div>;
};
export const step4 = () => {
  return <div>step4</div>;
};
export const step5 = () => {
  return <div>step5</div>;
};
