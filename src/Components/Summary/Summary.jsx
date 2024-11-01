import { useEffect } from 'react';
import './Summary.css';

function Summary(props) {
  const addOns = props.addOns;

  let gamePlanCost;
  if (props.gamePlan === 'Arcade') {
    gamePlanCost = 9;
  } else if (props.gamePlan === 'Advanced') {
    gamePlanCost = 12;
  } else {
    gamePlanCost = 15;
  }

  let totalCost = gamePlanCost;
  if (addOns.length === 1) {
    totalCost += +addOns[0].price;
  } else if (addOns.length > 1) {
    totalCost += +addOns.reduce((a, b) => a + +b.price, 0);
  }

  return (
    <section id='summaryPageContainer' className='page'>
      <div id='summaryPage'>
        <div>
          <h2>Finishing up</h2>
          <p className='pageDescription'>
            Double-check everything looks OK before confirming.
          </p>
        </div>

        <div className='summaryContainer'>
          <div className='summary'>
            <div className='currentPlan'>
              <div className='service'>
                <p className='title'>
                  {props.gamePlan} ({!props.paymentPlan ? 'Monthly' : 'Yearly'})
                </p>
                <button id='changePlan' 
                  onClick={() => props.setPaymentPlan(!props.paymentPlan)}>Change</button>
              </div>
              <p className='pricing'>
                $
                {!props.paymentPlan
                  ? `${gamePlanCost}/mo`
                  : `${gamePlanCost * 10}/yr`}
              </p>
            </div>
          </div>

          {addOns.map((addOn, index) => (
            <div
              className={`addOn addOn-${index}`}
              key={`${addOn.serviceName}`}
            >
              <p className='service'>{addOn.serviceName}</p>
              <p className='pricing'>
                {!props.paymentPlan
                  ? `+$${addOn.price}/mo`
                  : `+$${addOn.price * 10}/yr`}
              </p>
            </div>
          ))}
        </div>
        <div id='totalCost'>
          <p id='total'>Total (per {!props.paymentPlan ? 'month' : 'year'})</p>
          <p className='pricing'>
            +${!props.paymentPlan ? totalCost : totalCost * 10}/{!props.paymentPlan ? 'mo' : 'yr'}
          </p>
        </div>
      </div>

      <nav className='navigation'>
        <button
          id='goBack'
          type='button'
          onClick={props.decrementStep}
        >
          Go Back
        </button>
        <button 
        id='confirm' 
        type='button'
        onClick={() => props.setConfirm(true)}>
          Confirm
        </button>
      </nav>
    </section>
  );
}

export default Summary;
