import './Confirmation.css'
import img from '../../assets/images/icon-thank-you.svg';


function Confirmation() {
    return (
        <section id="confirmation">
            <img src={img} alt="Checkmark icon" />
            <h2>Thank you!</h2>
            <p>  Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.</p>
        </section>

    )
}

export default Confirmation;