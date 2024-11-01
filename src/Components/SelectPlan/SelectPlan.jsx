import './SelectPlan.css';
import Switch from './Switch';
import PlanCard from './PlanCard';
import { useState } from 'react';

function SelectPlan(props) {
  const [error, setError] = useState('')

  function checkPlan() {
    if (!props.gamePlan) {
      setError('Please select a plan')
    } else {
      props.incrementStep()
    }
  }

  return (
    <section id='planContainer' className='page'>
      <div className='gamePlanContainer'>
        <h2>Select your plan</h2>
        <p className='pageDescription'>
          You have the option of monthly or yearly billing
        </p>

        <div className='plans'>
          <PlanCard
            gamePlan={props.gamePlan}
            setGamePlan={props.setGamePlan}
            paymentPlan={props.paymentPlan}
            setPaymentPlan={props.setPaymentPlan}
            setError={setError}
            plan='Arcade'
            alt='Image of arcade video game controller'
            monthPrice='9'
            yearPrice='90'
          ></PlanCard>
          <PlanCard
            gamePlan={props.gamePlan}
            setGamePlan={props.setGamePlan}
            paymentPlan={props.paymentPlan}
            setPaymentPlan={props.setPaymentPlan}
            setError={setError}
            plan='Advanced'
            alt='Image of handheld video game controller'
            monthPrice='12'
            yearPrice='120'
          ></PlanCard>
          <PlanCard
            gamePlan={props.gamePlan}
            setGamePlan={props.setGamePlan}
            paymentPlan={props.paymentPlan}
            setPaymentPlan={props.setPaymentPlan}
            setError={setError}
            plan='Pro'
            alt='Image of a third controller'
            monthPrice='15'
            yearPrice='150'
          ></PlanCard>
        </div>
        <Switch
          paymentPlan={props.paymentPlan}
          setPaymentPlan={props.setPaymentPlan}
        />
        {error && <p className='error'>Please select a plan</p>}
      </div>

      <nav>
        <button id="goBack"
        onClick={props.decrementStep}>
          Go Back
        </button>
        <button id="nextStep"
        onClick={checkPlan}>
          Next Step
        </button>
      </nav>
    </section>
  );
}

export default SelectPlan;
