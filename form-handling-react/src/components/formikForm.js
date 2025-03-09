import React from 'react';
import { useFormik } from 'formik';

const FormikForm = () => {
    const formik = useFormik({
        initialValues: { email: '', password: '' },
        onSubmit: values => alert(JSON.stringify(values, null, 2)),
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label>Email:</label>
            <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
            <label>Password:</label>
            <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormikForm;
