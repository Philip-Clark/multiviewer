import ModalComponent from '../modal/ModalComponent';
import PropTypes from 'prop-types';
import { useContext, useRef } from 'react';
import { ViewContext } from '../../App';
import './feedBackModal.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
const PUBLIC_KEY = 'GJqQpqEXGRqYHJ2Cr';
const TEMPLATE_ID = 'template_k0x4bd7';
const SERVICE_ID = 'service_x791bnd';

export default function FeedBackModal({ children }) {
  const { feedBackOpen, setFeedBackOpen } = useContext(ViewContext);
  const feedBackArea = useRef();
  const closeModal = () => setFeedBackOpen(false);

  const [responseMessage, setResponseMessage] = useState(<p></p>);
  const handleFeedBackSubmit = (e) => {
    e.preventDefault();
    setResponseMessage(<p>Sending Feedback</p>);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, feedBackArea.current, PUBLIC_KEY).then(
      (result) => {
        setResponseMessage(<p>Feedback Sent</p>);
        setTimeout(() => {
          setResponseMessage(<p></p>);
        }, 5000);
      },
      (error) => {
        setResponseMessage(<p>Failed to send Feedback</p>);
        setTimeout(() => {
          setResponseMessage(<p></p>);
        }, 5000);
      }
    );
  };

  const defaultMessage =
    'Dev team, \n\nWhile doing { explain the context of the feedback } \nI wanted to inform you that { Feedback here } \n\nThanks, \n{Your name here}';
  return (
    <ModalComponent closeModal={closeModal} controllerOpen={feedBackOpen}>
      <h1>FeedBack</h1>
      <form title="feedback" ref={feedBackArea} onSubmit={handleFeedBackSubmit}>
        <textarea
          name="feedback"
          id="feedback"
          cols="30"
          rows="10"
          placeholder={defaultMessage}
        ></textarea>
        <div>
          {responseMessage}
          <button type="submit">Send Feedback</button>
        </div>
      </form>
    </ModalComponent>
  );
}

FeedBackModal.propTypes = {
  children: PropTypes.node.isRequired,
};