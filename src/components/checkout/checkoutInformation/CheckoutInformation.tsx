import React, {
  FormEvent,
  FormEventHandler,
  InputHTMLAttributes,
  useState,
} from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import {
  handleValidateName,
  handleValidateStringOnlyAlphabetic,
  handleValidateZipCode,
} from "../../../services/helperFunctions/validation/validation";
import { FaLessThanEqual } from "react-icons/fa";

export const CheckoutInformation = () => {
  const [validationFName, setValidationFName] = useState(false);
  const [validationLName, setValidationLName] = useState(false);
  const [validationCity, setValidationCity] = useState(false);
  const [validationState, setValidationState] = useState(false);
  const [validationZip, setValidationZip] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const firstNameValue = form.firstName.value;
    const lastNameValue = form.lastName.value;
    const city = form.city.value;
    const state = form.state.value;
    const zip = form.zip.value;

    const fNameValidation = handleValidateName(firstNameValue);
    const lNameValidation = handleValidateName(lastNameValue);
    const cityValidation = handleValidateStringOnlyAlphabetic(city);
    const stateValidation = handleValidateStringOnlyAlphabetic(state);
    const zipValidation = handleValidateZipCode(zip);

    setValidationFName(fNameValidation);
    setValidationLName(lNameValidation);
    setValidationCity(cityValidation);
    setValidationState(stateValidation);
    setValidationZip(zipValidation);

    setValidated(true);

    /*   if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

     */
  };

  return (
    <section className='checkoutFormContainer'>
      <div className='checkoutFormHeadingContainer'>
        <h6>Personal information</h6>
      </div>
      <Form noValidate onSubmit={handleSubmit} className='checkoutForm'>
        <Form.Group controlId='firstName'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            isValid={validationFName ? true : false}
            isInvalid={validationFName ? false : true}
            required
            type='text'
            placeholder='First name'
            // onChange={(e:React.FormEvent<HTMLInputElement>) => handleValidateName(e.currentTarget.value)}
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='lastName'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            isValid={validationLName ? true : false}
            isInvalid={validationLName ? false : true}
            required
            type='text'
            placeholder='Last name'
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            isValid={validationCity ? true : false}
            isInvalid={validationCity ? false : true}
            type='text'
            placeholder='City'
            required
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='state'>
          <Form.Label>State</Form.Label>
          <Form.Control
            isValid={validationState ? true : false}
            isInvalid={validationState ? false : true}
            type='text'
            placeholder='State'
            required
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='zip'>
          <Form.Label>Zip</Form.Label>
          <Form.Control
            isValid={validationZip ? true : false}
            isInvalid={validationZip ? false : true}
            type='text'
            placeholder='Zip'
            required
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid zip. 5 numbers, not containing other
            characters.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Check
            required
            label='Agree to terms and conditions'
            feedback='You must agree before submitting.'
            feedbackType='invalid'
            onChange={(event: FormEvent<HTMLInputElement>) =>
              setCheckbox(event.currentTarget.checked)
            }
          />
        </Form.Group>
        <Button type='submit'>Submit form</Button>
      </Form>
    </section>
  );
};
