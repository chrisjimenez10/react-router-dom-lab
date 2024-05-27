//Import
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LetterForm = ({mailboxes, addLetter}) => {

    const navigate = useNavigate();

    //State
    const [formData, setFormData] = useState({
        mailboxId: 1, //Setting initial state to 1 because when the user is redirected to the New Letter page, the first option that shows up has an ACTUAL value of the initial state - and if there is only 1 mailbox currently, there is no other option to switch to and we cannot change the ACTUAL value of the "formData.mailboxId" property (Also, if the user simply submits the form without swapping options, then the value will NOT change to match the visual display of "Mailbox 1") --> This way with initial state to 1, we ensure that Mailbox 1 is ALWAYS holding the acutal value being submitted of 1
        recipient: "",
        message: "",
    });

    //Functions
    const handleInputChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addLetter(formData);
        navigate(`/mailboxes/${formData.mailboxId}`); //NOTE: Since we are assigning the "mailboxId" property of the letter being created EQUAL to the ACTUAL "mailbox._id" of the mailbox being mapped through inside the <select> element,
    };


  return (

    <form onSubmit={handleSubmit}>

        <label htmlFor="mailboxId">Select Mailbox: </label>
        <select id="mailboxId" name="mailboxId" value={formData.mailboxId} onChange={handleInputChange}>
            {mailboxes.map((mailbox)=>{
                return (                                         
                    <option key={mailbox._id} value={mailbox._id}>Mail Box {mailbox._id}</option>                                               
                )
            })}
        </select>
        
        <label htmlFor="recipient">Recipient: </label>
        <input id="recipient" name="recipient" type="text" value={formData.recipient} onChange={handleInputChange} />

        <label htmlFor="message">Message: </label>
        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} ></textarea>

        <button type="submit" disabled={formData.recipient === "" || formData.message === ""}>Submit</button>
    </form>

  )
}

export default LetterForm;