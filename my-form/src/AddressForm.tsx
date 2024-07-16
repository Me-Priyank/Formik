
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface AddressFormValues {
  pinCode: string;
  state: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
}

const AddressForm: React.FC = () => {
  const initialValues: AddressFormValues = {
    pinCode: '',
    state: '',
    city: '',
    addressLine1: '',
    addressLine2: '',
  };

  const validationSchema = Yup.object({
    pinCode: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    addressLine1: Yup.string().required('Required'),
    addressLine2: Yup.string(),
  });

  const onSubmit = (values: AddressFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="pinCode">Pin Code</label><br />
            <Field name="pinCode" type="text" placeholder="Pin Code" />
            <ErrorMessage name="pinCode" component="div" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label><br />
            <Field name="state" type="text" placeholder="State" />
            <ErrorMessage name="state" component="div" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label><br />
            <Field name="city" type="text" placeholder="City" />
            <ErrorMessage name="city" component="div" />
          </div>
        </div> <br />
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="addressLine1">Address Line 1</label><br />
            <Field name="addressLine1" type="text" placeholder="Address Line 1" />
            <ErrorMessage name="addressLine1" component="div" />
          </div>
          <div className="form-group">
            <label htmlFor="addressLine2">Address Line 2</label><br />
            <Field name="addressLine2" type="text" placeholder="Address Line 2" />
            <ErrorMessage name="addressLine2" component="div" />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default AddressForm;
