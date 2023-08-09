import { CheckoutInformation } from "../components/checkout/checkoutInformation/CheckoutInformation";
import { CheckoutSummary } from "../components/checkout/checkoutSummary/CheckoutSummary";
import "../styles/checkout/checkout.scss";

export const Checkout = () => {
  return (
    <main className='checkoutMain'>
      <section className='headingContainer'>
        <h3>Checkout</h3>
      </section>
      <section className='guideLineContainer'>
        <div className='guidelineCircle'></div>
        <div className='guideLine'></div>
        <div className='guidelineCircle'></div>
        <div className='guideLine'></div>

        <div className='guidelineCircle'></div>
      </section>
      {/*       <CheckoutSummary />
       */}{" "}
      <CheckoutInformation />
      <div className='buttonContainer'>
        <button className='checkoutButton'>Continue</button>
      </div>
    </main>
  );
};
