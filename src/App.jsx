import { useState } from 'react';
import './App.css';
import Overview from './Components/Overview/Overview';
import Page from './Components/Page/Page';

function App() {
  const [step, setStep] = useState(1);
  const [paymentPlan, setPaymentPlan] = useState(false);
  const [addOns, setAddOns] = useState([]);
  const [gamePlan, setGamePlan] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: ''
  })

  function incrementStep() {
    setStep((step) => step + 1);
  }

  function decrementStep() {
    setStep((step) => step - 1);
  }

  return (
    <main>
      <div id='mainContainer'>
        <Overview currentStep={step} currentPlan={paymentPlan} />

        <Page
          currentStep={step}
          incrementStep={incrementStep}
          decrementStep={decrementStep}
          paymentPlan={paymentPlan}
          setPaymentPlan={setPaymentPlan}
          gamePlan={gamePlan}
          setGamePlan={setGamePlan}
          addOns={addOns}
          setAddOns={setAddOns}
          setNewUser={setNewUser}
          newUser={newUser}
        />
      </div>

      <p id='attribution'><a target='_blank' href="https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ">Front End Mentor</a> challenge, completed by <a target='_blank' href="https://github.com/athinakantis">Athina Kantis</a></p>
    </main>
  );
}

export default App;
