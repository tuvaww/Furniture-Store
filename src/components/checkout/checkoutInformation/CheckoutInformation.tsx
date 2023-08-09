import { Form } from "react-bootstrap";

export const CheckoutInformation = () => {
  return (
    <section className='customDataContainer'>
      <Form>
        <Form.Group controlId='validationCustom01'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='First name'
            defaultValue='Mark'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='validationCustom01'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='First name'
            defaultValue='Mark'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form>
    </section>
  );
};
