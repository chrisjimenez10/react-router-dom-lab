//Import
import { Link } from "react-router-dom";


const MailboxList = ({mailboxes}) => {

    if(mailboxes.length === 0){
        return (
            <h1>No Mailboxes</h1>
        )
    }


  return (

    <ul>
        {mailboxes.map((mailbox)=>{
            return (
                <li key={mailbox._id} className="mail-box">
                    <Link to={`/mailboxes/${mailbox._id}`} style={{color: "black", textDecoration: "none"}}>Mailbox {mailbox._id}</Link>
                </li>
            )
        })}
    </ul>

  )
}

export default MailboxList;