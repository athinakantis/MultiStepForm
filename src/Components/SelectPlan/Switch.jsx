function Switch(props) {
    return (
        <div className="switch">
            <p className={!props.paymentPlan ? 'active' : 'inactive'}>Monthly</p>
            <button className={!props.paymentPlan ? 'Monthly' : 'Yearly'} 
            onClick={() => props.setPaymentPlan(!props.paymentPlan)}></button>
            <p className={props.paymentPlan ? 'active' : 'inactive'}>Yearly</p>
        </div>
    )
}

export default Switch;