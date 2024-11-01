
function Step(props) {
    if (props.step === props.currentStep) {
        return <p className='active num'>{props.step}</p>
    }
    return <p className="num">{props.step}</p>
}

export default Step;