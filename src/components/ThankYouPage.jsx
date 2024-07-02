export default function ThankYouPage({ onButtonClick, emailValue }) {
    return (
    <article className="success-message">

      <img className="success-icon" src="/icon-success.png" alt="" />

      <h1>Thanks for subscribing!</h1>

      <p>A confirmation email has been sent to <span className="submitted-email">{emailValue}</span>. 
      Please open it and click the button inside to confirm your subscription.</p>

      <button id="dismiss-btn" onClick={onButtonClick}>Dismiss message</button>

    </article>
    )
}

ThankYouPage.propTypes;