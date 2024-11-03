import './Overview.css';
import Step from '../Page/Step';
import bgImg from '../../assets/images/bg-sidebar-desktop.svg'

function StepOverview(props) {
  return (
    <div id='stepOverview'>
      <div className='stepNum'>
        <Step step={1} currentStep={props.currentStep} />
        <div className='stepDetails'>
          <p>Step 1</p>
          <p>Your info</p>
        </div>
      </div>
      <div className='stepNum'>
        <Step step={2} currentStep={props.currentStep} />
        <div className='stepDetails'>
          <p>Step 2</p>
          <p>Select plan</p>
        </div>
      </div>
      <div className='stepNum'>
        <Step step={3} currentStep={props.currentStep} />
        <div className='stepDetails'>
          <p>Step 3</p>
          <p>Add-ons</p>
        </div>
      </div>
      <div className='stepNum'>
        <Step step={4} currentStep={props.currentStep} />
        <div className='stepDetails'>
          <p>Step 4</p>
          <p>Summary</p>
        </div>
      </div>
    </div>
  );
}

export default StepOverview;
