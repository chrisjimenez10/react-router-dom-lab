//Import
import { useParams } from "react-router-dom";


const MailboxDetails = ({mailboxes, letters}) => {

    
    //Route Parameter
    const {mailboxId} = useParams(); //Destructuring the useParams() object to isolate the property, which in this case it's the mailboxId that is being passed by the mailbox's id when we click on it in the MailboxList component (NOTE: Remember that the route parameter stores data, which we are using to store the mailbox id --> Therefore, allowing us to use javascript logic like the find() method to find the mailbox we are concerned with OUT of the array of the current state (total existing mailboxes)
    const selectedBox = mailboxes.find((mailbox)=>{ //We use the find() method to identify the mailbox that matches the "id" that was captured and sent via the route parameter FROM the total existing mailboxes held in the "mailboxes" state variable array and we are storing it in a new variable --> We will use that new variable with the FOUND mailbox to display its details
        return mailbox._id === Number(mailboxId); //The Number() function is used to convert its argument into a Number Datatype --> Since the route parameter data is String Datatype and we are comparing it to an actual number "mailbox._id", BOTH operands in comparison need to me the same Number Datatype
    });

    const selectedLetters = letters.filter((letter)=>{
        return Number(letter.mailboxId) === Number(mailboxId); //NOTE: When we are submitting the letter form, the property value of ".mailboxId" is converted into a String Datatype --> Therefore, for the compoarison to function property HERE, we MUST convert it into a Number Datatype just like the route parameter value of "mailboxId"
    })

    //NOTE: We use the variable that should hold the FOUND mailbox item from the current state of the existing mailboxes in our JavaScript logic to display an "error message" should the URL be manipulated and include an "id" or "mailboxId" that is NON-EXISTENT --> I tried to use the "mailboxId" property that was deconstructed from useParams(), but it did not work --> It makes sense to use the logic after creating the new variable "selectedBox" because it ATTEMPTS to find the passed "id" from the route parameter from the array of existing mailboxes/id's
    if(!selectedBox){
        return (<h1>Mailbox Not Found!</h1>)
    }

  return (

    <>
        <h1>Mailbox {selectedBox._id}</h1>
        <h2>Details</h2>
        <hr />
        <h3>Boxholder: {selectedBox.boxholder}</h3>
        <h3>Box Size: {selectedBox.boxSize}</h3>
        
        <h2>Letters</h2>
        <hr />
        <ul>
            {selectedLetters.map((selectedLetter, index)=>{
                return (
                    <li key={index}>
                        <h3>{selectedLetter.recipient}</h3>
                        <p>{selectedLetter.message}</p>
                    </li>
                )
            })}
        </ul>
    </>

  )
}

export default MailboxDetails;