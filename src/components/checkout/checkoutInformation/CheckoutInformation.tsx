import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import {
  handleValidateName,
  handleValidateStringOnlyAlphabetic,
  handleValidateZipCode,
} from "../../../services/helperFunctions/validation/validation";
import { FaLessThanEqual } from "react-icons/fa";
import { CheckoutSummary } from "../checkoutSummary/CheckoutSummary";

export const CheckoutInformation = () => {
  const [validationFName, setValidationFName] = useState(true);
  const [validationLName, setValidationLName] = useState(true);
  const [validationCity, setValidationCity] = useState(true);
  const [validationState, setValidationState] = useState(true);
  const [validationZip, setValidationZip] = useState(true);

  const [checkbox, setCheckbox] = useState(false);
  const [validated, setValidated] = useState(false);

  useEffect(() => {}, []);

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
    //event.stopPropagation();

    /*   if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

     */
  };

  const handleOnChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    const firstName = event.currentTarget.value;

    const fNameValidation = handleValidateName(firstName);

    setValidationFName(fNameValidation);
  };

  const handleOnChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
    const lastName = event.currentTarget.value;

    const lNameValidation = handleValidateName(lastName);

    setValidationLName(lNameValidation);
  };

  const handleOnChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
    const city = event.currentTarget.value;

    const cityValidation = handleValidateStringOnlyAlphabetic(city);

    setValidationCity(cityValidation);
  };

  const handleOnChangeState = (event: ChangeEvent<HTMLInputElement>) => {
    const state = event.currentTarget.value;

    const stateValidation = handleValidateStringOnlyAlphabetic(state);

    setValidationState(stateValidation);
  };

  const handleOnChangeZip = (event: ChangeEvent<HTMLInputElement>) => {
    const zip = event.currentTarget.value;

    const zipValidation = handleValidateStringOnlyAlphabetic(zip);

    setValidationZip(zipValidation);
  };

  return (
    <section className='checkoutFormContainer'>
      <Form noValidate onSubmit={handleSubmit} className='checkoutForm'>
        <div className='checkoutFormHeadingContainer'>
          <h6>Personal information</h6>
        </div>
        <Form.Group controlId='firstName' className='mb-1'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            isValid={validationFName && validated ? true : false}
            /*             isInvalid={!validationFName && validated ? true : false}
             */ isInvalid={validationFName ? false : true}
            required
            type='text'
            placeholder='First name'
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleOnChangeFirstName(event)
            }
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='lastName' className='mb-1'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            isValid={validationLName && validated ? true : false}
            isInvalid={validationLName ? false : true}
            required
            type='text'
            placeholder='Last name'
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleOnChangeLastName(event)
            }
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='city' className='mb-1'>
          <Form.Label>City</Form.Label>
          <Form.Control
            isValid={validationCity && validated ? true : false}
            isInvalid={validationCity ? false : true}
            type='text'
            placeholder='City'
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleOnChangeCity(event)
            }
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='state' className='mb-1'>
          <Form.Label>State</Form.Label>
          <Form.Control
            isValid={validationState && validated ? true : false}
            isInvalid={validationState ? false : true}
            type='text'
            placeholder='State'
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleOnChangeState(event)
            }
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='zip' className='mb-3'>
          <Form.Label>Zip</Form.Label>
          <Form.Control
            isValid={validationZip && validated ? true : false}
            isInvalid={validationZip ? false : true}
            type='text'
            placeholder='Zip'
            required
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleOnChangeZip(event)
            }
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid zipcode consisting of five digits.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Check
            required
            label='Agree to terms and conditions'
            feedback='You must agree before submitting.'
            feedbackType='invalid'
            isValid={checkbox && validated ? true : false}
            isInvalid={!checkbox && validated ? true : false}
            onChange={(event: FormEvent<HTMLInputElement>) =>
              setCheckbox(event.currentTarget.checked)
            }
          />
        </Form.Group>
        <div className='buttonContainer'>
          <Button className='checkoutButton' type='submit'>
            Continue
          </Button>
        </div>
      </Form>

      {/*   <div className='checkoutSummaryContainerCheckout'>
        <CheckoutSummary />
      </div> */}
    </section>
  );
};
