import { useState, useEffect } from 'react';

function AddOn(props) {
  const [checked, setChecked] = useState(false);

  const item = {
    serviceName: props.serviceName,
    price: props.price,
  };

  function handleSelect(e) {
    if (e.key === ' ' || e.key === 'Enter' || e.type === 'click') {
      const isInArray = props.addOns.find(
        (element) => JSON.stringify(element) === JSON.stringify(item)
      );
      if (isInArray) {
        props.setAddOns(
          props.addOns.filter((a) => JSON.stringify(a) !== JSON.stringify(item))
        );
      } else {
        props.setAddOns([...props.addOns, item]);
      }
    }
  }

  //Every time addons is changed, set the checked status
  useEffect(() => {
    const isInArray = props.addOns.find(
      (element) => JSON.stringify(element) === JSON.stringify(item)
    );
    setChecked(!!isInArray);
  }, [props.addOns]);

  return (
    <div role='button'
      tabIndex={0}
      className='addOn'
      onClick={(e) => handleSelect(e)}
      onKeyDown={(e) => handleSelect(e)}
      aria-label={`Add ${props.serviceName} to plan`}>
      <div>
        <input type='checkbox'
          checked={checked}
          readOnly
          tabIndex={-1}
          />
        <div className='service'>
          <p className='title'>{props.serviceName}</p>
          <p className='description'>{props.description}</p>
        </div>
      </div>
      {!props.paymentPlan ? (
        <p className='pricing'>+${props.price}/mo</p>
      ) : (
        <p className='pricing'>+${props.price * 10}/yr</p>
      )}
    </div>
  );
}

export default AddOn;
