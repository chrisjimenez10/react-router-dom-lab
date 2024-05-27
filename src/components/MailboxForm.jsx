//Import
import { useState } from "react";

const MailboxForm = ({addBox}) => {

    //State
    const [formData, setFormData] = useState({
        boxholder: "",
        boxSize: "",
    });

    //Functions
    const handleInputChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addBox(formData);
        setFormData({
            boxholder: "",
            boxSize: "",
        });
    };

  return (

    <form onSubmit={handleSubmit}>

        <label htmlFor="boxholder">Enter a Box Holder: </label>
        <input id="boxholder" name="boxholder" type="text" value={formData.boxholder} onChange={handleInputChange} placeholder="Boxholder Name"/>
        
        <label htmlFor="boxSize">Select a Box Size: </label>
        <select id="boxSize" name="boxSize" value={formData.boxSize} onChange={handleInputChange}>
            <option value="">---- Select ----</option>
            <option value="Small" >Small</option>
            <option value="Medium" >Medium</option>
            <option value="Large" >Large</option>
        </select>

        <button type="submit" disabled={formData.boxholder === "" || formData.boxSize === ""}>Submit</button>

    </form>

  )
}

export default MailboxForm;