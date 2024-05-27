//Import
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import LetterForm from "./components/LetterForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const App = () => {

  //State
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  //Instance of useNavigate()
  const navigate = useNavigate();

  //Functions
  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
    navigate("/mailboxes"); //Redirect to Mailboxes
  };

  const addLetter = (newLetter) => {
    setLetters([...letters, newLetter]);
  };


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>} />
        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter}/>} />
        <Route path="*" element={<h1>Error 404: Page not found</h1>} />
      </Routes>
    </>
  )
  
};

export default App;
