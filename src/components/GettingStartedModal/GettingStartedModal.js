import './gettingStartedModal.css';
import React, { useContext } from 'react';
import ModalComponent from '../modal/ModalComponent';
import { ViewContext } from '../../App';
import { useState } from 'react';
import { step1, step2, step3, step4, step5 } from './steps';

export const GettingStartedModal = () => {
  const [position, setPosition] = useState(0);
  const steps = [step1(), step2(), step3(), step4(), step5()];
  const { gettingStartedModalOpen, setGettingStartedModalOpen } = useContext(ViewContext);

  const next = () => {
    if (position === steps.length - 1) return;
    setPosition(position + 1);
  };
  const previous = () => {
    if (position === 0) return;
    setPosition(position - 1);
  };

  const closeModal = () => {
    setGettingStartedModalOpen(false);
  };
  const onAfterOpen = () => {
    setPosition(0);
  };

  const nextButton = (
    <button className="major" onClick={next}>
      Next
    </button>
  );

  const previousButton = (
    <button className="minor" onClick={previous}>
      Previous
    </button>
  );
  const closeButton = (type = 'major') => {
    return (
      <button className={type} onClick={closeModal}>
        Close
      </button>
    );
  };

  return (
    <ModalComponent
      controllerOpen={gettingStartedModalOpen}
      closeModal={closeModal}
      id={'GettingStartedModal'}
      onAfterOpen={onAfterOpen}
    >
      <div id="content">{steps[position]}</div>
      <div id="buttons">
        <p>
          {position + 1} of {steps.length}
        </p>
        {position === 0 ? closeButton('minor') : previousButton}
        {position === steps.length - 1 ? closeButton('major') : nextButton}
      </div>
    </ModalComponent>
  );
};
