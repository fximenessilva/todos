import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'; 
import * as Yup from 'yup';

import { TextInput } from '../../components/common/textInput';
import { Dropdown } from '../../components/common/dropdown';
import { Button } from '../../components/common/button';

import styles from './form.module.css';

const initialValues = {
  title: '',
  completed: false,
  backgroundColor: '',
};

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  backgroundColor: Yup.string().required('Background color is required'),
});

const CustomForm = () => {
  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <TextInput label='Title' name='title' />
          <ErrorMessage name='title' component='div' className='error' />
          {/* <Dropdown /> */}
          <Button>Add item</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default CustomForm;