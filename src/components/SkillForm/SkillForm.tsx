import React from 'react';
import {Input} from "../Input";
import {Button} from "../Button";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {setSkill} from "../../redux/reducers/skillsSlice";
import './SkillForm.scss';

type Errors = {
    name?: string,
    range?: string,
}

type Skill = {
    name: string,
    range: string,
}

const SkillForm = () => {
    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (values: Skill) => {
        dispatch(setSkill({...values, range: parseInt(values.range)}));
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            range: ''
        },
        validate: (values) => {
            const errors: Errors = {};
            const { name, range } = values;

            if (!name.trim().length) {
                errors.name = 'Skill name is required';
            }

            if (!range.length) {
                errors.range = 'Skill range is required';
            } else if (!parseInt(range)) {
                errors.range = "Skill range must be a 'number' type";
            } else if (parseInt(range) < 10) {
                errors.range = "Skill range must be greater than or equal to 10";
            } else if (parseInt(range) > 100) {
                errors.range = "Skill range must be less than or equal to 100";
            }

            return errors;
        },
        onSubmit: (values, { resetForm }) => {
            onSubmit(values);
            resetForm();
        },
    });

    const { values, errors, handleChange, handleSubmit } = formik;

    return (
        <form className='formWrapper' onSubmit={handleSubmit} data-testid='skill-form'>
            <Input
                name='name'
                value={values.name}
                onChange={handleChange}
                label='Skill name:'
                placeholder='Enter skill name'
                error={errors.name}
            />
            <Input
                name='range'
                value={values.range}
                onChange={handleChange}
                label='Skill range:'
                placeholder='Enter skill range'
                error={errors.range}
            />
            <Button text='Add skill' isDisabled={!(formik.isValid && formik.dirty)}/>
        </form>
    );
};

export default SkillForm;
