import React, { useState } from "react";
import MessageManager from "../../modules/MessageManager";

const AddMessageForm = props => {
  const [message, setMessage] = useState({
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...message };
    stateToChange[evt.target.id] = evt.target.value;
    setMessage(stateToChange);
  };

  const constructNewMessage = evt => {
    const userCred = sessionStorage.getItem("userCredentials");
    evt.preventDefault();
    if (message.message === "") {
      window.alert("Please write a message");
    } else {
      setIsLoading(true);
      message.userId = userCred;
      MessageManager.post(message).then(() => props.history.push("/messages"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="message"
              placeholder="Type message here..."
            />
            <label htmlFor="message">Message</label>
          </div>
          <div>
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewMessage}
            >
              Send
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AddMessageForm;
