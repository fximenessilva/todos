import React from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { addTodo } from '../../../redux/action/todoActions';
// import { Checkbox } from '../../../components/common/checkbox';
import { TextInput } from '../../../components/common/textInput';
import { Dropdown } from '../../../components/common/dropdown';
import { Button } from '../../../components/common/button';

import styles from './form.module.scss';

interface InitialValues {
  title: string;
  backgroundColor: string;
}

const initialValues = {
  title: '',
  backgroundColor: '',
};

const validationSchema = Yup.object({
  title: Yup.string().required('*Title is required'),
  backgroundColor: Yup.string().required('*Background color is required'),
});

const CustomForm = () => {
  const dispatch = useDispatch();

  const state = useSelector((state: any) => state.todos);

  const { colors } = state;

  const submitForm = (values: InitialValues) => dispatch(addTodo(values));
  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          submitForm(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          setFieldTouched,
        }) => {
          return (
            <Form noValidate onSubmit={handleSubmit}>
              <div className={styles.field}>
                <TextInput
                  value={values['title']}
                  onChange={handleChange}
                  label="Title"
                  name="title"
                  touched={touched['title']}
                  error={errors['title']}
                  onBlur={(e) => {
                    handleBlur(e);
                    setFieldTouched('title', false);
                  }}
                  onFocus={() => setFieldTouched('title', true)}
                />
              </div>
              {/* <div className={styles.field}>
                <Checkbox
                  label="Completed"
                  name="completed"
                  onChange={handleChange}
                  value={values['completed']}
                  checked={values['completed']}
                />
              </div> */}
              <div className={styles.field}>
                <Dropdown
                  options={colors
                    .filter((el: any) => el.hex)
                    .map((el: any) => el.hex)}
                  onSelect={(value) => setFieldValue('backgroundColor', value)}
                  value={values['backgroundColor']}
                  name="backgroundColor"
                  label="Color"
                  setFieldTouched={setFieldTouched}
                  touched={touched['backgroundColor']}
                  error={errors['backgroundColor']}
                />
              </div>
              <Button>Add item</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CustomForm;
