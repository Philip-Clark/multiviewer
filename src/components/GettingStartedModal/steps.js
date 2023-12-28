import React from 'react';
import hero from '../../assets/gettingStarted/page1/multiviewer.png';
import addSources from '../../assets/gettingStarted/page1/addSources.gif';
import manageTabs from '../../assets/gettingStarted/page1/manageTabs.gif';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCog,
  FaEllipsisV,
  FaPlus,
  FaQuestionCircle,
} from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';

export const step1 = () => {
  return (
    <div>
      <h1>Welcome to Mult-i-viewer</h1>
      <img src={hero} />
      <p>
        View multiple webpages at once with Mult-i-viewer<br></br> This guide will show you how to
        use the features and get you started
      </p>
    </div>
  );
};
export const step2 = () => {
  return (
    <div>
      <h1>Adding Sources</h1>
      <img src={addSources} />
      <p>
        <b>Sources</b> are a combination of an <b>iframe Embed code</b> and a <b>title</b>.<br></br>
        <br></br>
        To add a <b>Source</b>, click the
        <b>
          {'  '}
          <FaCog />
          {'  '}
        </b>
        button in the bottom right corner of the screen.
        <br></br>This will open the <b>Source Controller</b> where you can add <b>Sources</b>
      </p>
    </div>
  );
};
export const step3 = () => {
  return (
    <div>
      <h1>Managing Tabs</h1>
      <img src={manageTabs} />
      <p>
        <b>Tabs</b> are groups of sources.<br></br>
        <br></br>You can add <b>Tabs</b> by clicking the{' '}
        <b>
          {' '}
          <FaPlus />{' '}
        </b>{' '}
        at the end of the tabs row. <br></br>You can also remove and rename <b>Tabs</b> by clicking
        the{' '}
        <b>
          {' '}
          <FaEllipsisV />{' '}
        </b>{' '}
        on the selected tab
      </p>
    </div>
  );
};
export const step4 = () => {
  return (
    <div>
      <h1>Shortcuts</h1>

      <br></br>
      <br></br>
      <table>
        <tr>
          <th>
            <b>Shortcut</b>
          </th>
          <th>
            <b>Description</b>
          </th>
        </tr>
        <tr>
          <td>
            <kbd>1</kbd> - <kbd>9</kbd>
          </td>
          <td>Quick jump to tabs 1-9</td>
        </tr>
        <tr>
          <td>
            <kbd>`</kbd> (tilde)
          </td>
          <td>Open the Source Controller</td>
        </tr>
        <tr>
          <td>
            <kbd>
              <FaArrowLeft />
            </kbd>{' '}
            (left arrow)
          </td>
          <td>Previous Tab</td>
        </tr>
        <tr>
          <td>
            <kbd>
              <FaArrowRight />
            </kbd>{' '}
            (right arrow)
          </td>
          <td>Next Tab</td>
        </tr>
      </table>
      <br></br>
      <br></br>
      <p>
        <b>Mult-i-Viewer</b> has a few built-in shortcuts to make your life easier
      </p>
    </div>
  );
};
export const step5 = () => {
  return (
    <div>
      <h1>Wrapping up</h1>
      <p>
        You should be well equipped to use <b>Mult-i-viewer</b> to it's fullest now.<br></br>Here's
        a few other things and links that you may find helpful
        <br></br>
        <br></br>
      </p>

      <div id="helpList">
        <p>
          {' '}
          To access this tutorial again, click the{' '}
          <b>
            {' '}
            <FaQuestionCircle />{' '}
          </b>{' '}
          in the bottom left
        </p>

        <p>
          If you have a suggestion or any feedback, please submit it through the{' '}
          <b>Feedback form</b> by clicking the{' '}
          <b>
            <MdFeedback />
          </b>
        </p>

        <p>
          {' '}
          You can find the{' '}
          <b>
            <a
              href="https://github.com/Philip-Clark/multiviewer?tab=readme-ov-file#mult-i-viewer"
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </a>
          </b>{' '}
          and source code{' '}
          <b>
            <a
              href="https://github.com/Philip-Clark/multiviewer?tab=readme-ov-file#mult-i-viewer"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </b>
        </p>
      </div>
    </div>
  );
};
