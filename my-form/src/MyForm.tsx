import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface MyFormValues {
  firstName: string;
  middleName: string;
  lastName: string;
  mobNumber: string;
  email: string;
  dob: string;
  gender: string;
}

const MyForm: React.FC = () => {
  const initialValues: MyFormValues = { 
    firstName: '', 
    middleName: '', 
    lastName: '', 
    mobNumber: '', 
    email: '', 
    dob: '',
    gender: '' 
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    middleName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    mobNumber: Yup.string()
      .matches(/^\d{10}$/, 'Mobile number must be 10 digits')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    dob: Yup.date()
      .required('Required'),
    gender: Yup.string()
      .oneOf(['Male', 'Female', 'Others'], 'Invalid gender')
      .required('Required')
  });

  const onSubmit = (values: MyFormValues) => {
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
            <label htmlFor="firstName">First Name</label><br />
            <Field name="firstName" type="text" placeholder="First Name" className="rounded-input" />
            <ErrorMessage name="firstName" component="div" />
          </div>
          <div className="form-group">
            <label htmlFor="middleName">Middle Name</label><br />
            <Field name="middleName" type="text" placeholder="Middle Name" className="rounded-input" />
            <ErrorMessage name="middleName" component="div" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label><br />
            <Field name="lastName" type="text" placeholder="Last Name" className="rounded-input" />
            <ErrorMessage name="lastName" component="div" />
          </div>
        </div>
        <div className="form-row2">
          <div className="form-group">
            <label htmlFor="mobNumber">Mobile Number</label> <br />
            <Field name="mobNumber" type="text" placeholder="Mobile Number" className="rounded-input" /> 
            <ErrorMessage name="mobNumber" component="div" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email id</label> <br />
            <Field name="email" type="email" placeholder="Email id" className="rounded-input" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label> <br />
            <Field name="dob" type="date" className="rounded-input" />
            <ErrorMessage name="dob" component="div" />
          </div>
        </div> <br />
        <div className="form-group">
          <label htmlFor="gender">Gender</label><br />
          <div role="group" aria-labelledby="my-radio-group" className="gender-group">
            <label className="gender-label">
              <Field type="radio" name="gender" value="Male" className="gender-input" />
              Male
            </label>
            <label className="gender-label">
              <Field type="radio" name="gender" value="Female" className="gender-input" />
              Female
            </label>
            <label className="gender-label">
              <Field type="radio" name="gender" value="Others" className="gender-input" />
              Others
            </label>
          </div>
          <ErrorMessage name="gender" component="div" />
        </div> <br />
      </Form>
    </Formik>
  );
};

export default MyForm;
