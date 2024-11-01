import AddOn from './AddOn';
import './AddOns.css';

function AddOns(props) {
  return (
    <div className='page'>
      <div id='addOnsContainer'>
        <h2>Pick add-ons</h2>
        <p className='pageDescription'>Add-ons help enhance your gaming experience</p>

        <div id='addOnContainer'>
          <AddOn
            addOns={props.addOns}
            setAddOns={props.setAddOns}
            serviceName='Online Service'
            description='Access to multiplayer games'
            currentPlan={props.currentPlan}
            price='1'
          />
          <AddOn
            addOns={props.addOns}
            setAddOns={props.setAddOns}
            serviceName='Larger Storage'
            description='Extra 1TB of cloud save'
            currentPlan={props.currentPlan}
            price='2'
          />
          <AddOn
            addOns={props.addOns}
            setAddOns={props.setAddOns}
            serviceName='Customizable Profile'
            description='Custom theme on your profile'
            currentPlan={props.currentPlan}
            price='2'
          />
        </div>

        <nav>
          <button id="goBack"
          onClick={props.decrementStep}>
            Go Back
          </button>
          <button id="nextStep"
          onClick={props.incrementStep}>
            Next Step
          </button>
        </nav>
      </div>
    </div>
  );
}

export default AddOns;
