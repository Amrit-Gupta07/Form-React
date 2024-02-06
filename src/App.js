import "./App.css";
import {useState} from 'react';

function App() {
  const [formData,setFormData] = useState({
    firstName:"" ,lastName:"",email:"",country:"India", streetAddress:"",city:"",state:"",postalCode:"",comments:false,candidates:false,offers:false,pushNotifications:""
  })

  function changeHandler(event){
    const {name,value,checked,type} = event.target;
    setFormData( (prev)=>({...prev,[name]:type === "checkbox" ? checked :value}))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the value of form data");
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>

        <label htmlFor="firstName">First Name </label><br/>
        <input type="text" name="firstName" id ="firstName" placeholder = "Amrit" value={formData.firstName} onChange={changeHandler} className="outline"/><br/>

        <label htmlFor="lastName">Last Name </label><br/>
        <input type="text" name="lastName" id ="lastName" placeholder = "Gupta" value={formData.lastName} onChange={changeHandler} className="outline"/><br/>
        
        <label htmlFor="email">Email Address</label><br/>
        <input type ="email" name="email" id ="email" placeholder = "amrit@abc.com" value={formData.email} onChange={changeHandler} className="outline"/><br/>

        <label htmlFor="country">Country</label><br/>

        <select id = "country" name = "country" value ={formData.country} className="outline">
        <option>India</option>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
        </select><br/>

        <label htmlFor="streetAddress">Street Address </label><br/>
        <input type="text" name="streetAddress" id ="streetAddress" placeholder = "D-5/13" value={formData.streetAddress} onChange={changeHandler} className="outline"/><br/>
        
        <label htmlFor="city">City </label><br/>
        <input type="text" name="city" id ="city" placeholder = "Raipur" value={formData.city} onChange={changeHandler} className="outline"/><br/>

        <label htmlFor="state">State/Province </label><br/>
        <input type="text" name="state" id ="state" placeholder = "Chhattisgarh" value={formData.state} onChange={changeHandler} className="outline"/><br/>


        <label htmlFor="postalCode">ZIP/Postal Code </label><br/>
        <input type="text" name="postalCode" id ="postalCode" placeholder = "493661" value={formData.postalCode} onChange={changeHandler} className="outline"/><br/>
        <br/>


        <fieldset>
          <legend>By Email</legend>
          <div className="flex flex-row">
            <input id="comments" name ="comments" type="checkbox" checked = {formData.comments} onChange={changeHandler} />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts comment on a posting.</p>
            </div>
          </div>

          <div className="flex flex-row">
            <input id="candidates" name ="candidates" type="checkbox" checked = {formData.candidates} onChange={changeHandler} />
            <div>
              <label htmlFor="Candidates">Candidates</label>
              <p>Get notified when someone posts comment on a posting.</p>
            </div>
          </div>

          <div className="flex flex-row">
            <input id="offers" name ="offers" type="checkbox" checked = {formData.offers} onChange={changeHandler} />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when someone posts comment on a posting.</p>
            </div>
          </div>


        </fieldset>
        <br/><br/>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone</p>


          
          <input type="radio" id="pushEverything" name="pushNotifications" value="Everything" onChange={changeHandler}>
          </input>
          <label htmlFor="PushEverything">Everything</label>

          <br/>
          
          <input type="radio" id="pushEmail" name="pushNotifications" value="Same as email" onChange={changeHandler}>
          </input>
          <label htmlFor="pushEmail">Same as Email</label>

          <br/>

          <input type="radio" id="pushNothing" name="pushNotifications" value="No Push Notifiacations" onChange={changeHandler}>
           </input>
           <label htmlFor="pushNothing">No Push Notifiacations</label>

        </fieldset>
        <br/>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>
        

      </form>
    </div>
  );
}

export default App;
