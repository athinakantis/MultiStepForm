function PlanCard(props) {

    function handleSelect(e) {
        if (e.key === 'Enter' || e.key === ' ' || e.type ==='click') {
            props.setGamePlan(props.plan)
            props.setError('')
        }
    }

    return (
        <div 
        role='button'
        tabIndex={0}
        onKeyDown={(e) => handleSelect(e)}
        onClick={(e) => handleSelect(e)}
        className={`planCard ${props.gamePlan === props.plan ? 'active' : 'inactive'}`} 
        >
        <img src={`src/assets/images/icon-${props.plan.toLowerCase()}.svg`} alt={props.alt} />
        <div className="description">
        <p className="title">{props.plan}</p>
        <p className="pricing">{!props.paymentPlan ? `$${props.monthPrice}/mo` : `$${props.yearPrice}/yr`}</p>
        {props.paymentPlan && <p className="free">2 months free</p>}
        </div>
    </div>
    )
}

export default PlanCard;