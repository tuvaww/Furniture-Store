import { CheckoutInformation } from "./checkoutInformation/CheckoutInformation";
import { CheckoutSummary } from "./checkoutSummary/CheckoutSummary";

export const CheckoutComponent = () => {
  return (
    <section className='checkoutComponentContainer'>
      <CheckoutInformation />
      <CheckoutSummary />
    </section>
  );
};
