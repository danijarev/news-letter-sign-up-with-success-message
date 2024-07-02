export default function Landing({ onButtonClick, emailValue, onEmailInput }) {

  return (
    <article className="sign-up-page">

      <h1>Stay updated!</h1>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ul className="list">
        <li className="list-item">Product discovery and building what matters</li>
        <li className="list-item">Measuring to ensure updates are a success</li>
        <li className="list-item">And much more!</li>
      </ul>
      
      <form noValidate className="sign-up-page" onSubmit={(event) => {event.preventDefault(); onButtonClick()}} >
        <p id="invalid-email-tag" className="hidden">Valid email required</p>
        <label>Email address</label>
        <input type="email" name="email" id="email" placeholder="email@company.com" value={emailValue} onChange={onEmailInput} />
        <button id="sub-btn" type="submit">Subscribe to monthly newsletter</button>
      </form>
      
    </article>
    )
}

Landing.propTypes;