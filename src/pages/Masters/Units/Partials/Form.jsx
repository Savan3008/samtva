import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { units as client, authUser } from "../../../../client";
import  InputLable  from "../../../../components/InputLable";
import  InputText from "../../../../components/InputText";
import  InputError from "../../../../components/InputError";
import  InputTextarea from "../../../../components/InputTextarea";
import { toast } from 'react-toastify';

const Form = ({ data }) => {
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [unit, setUnit] = useState({
        createdBy: authUser?.userId,
        unitName: data?.unitName ? data.unitName : "",
        unitDesc: data?.unitDesc ? data.unitDesc : "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUnit({
            ...unit,
            [name]: value,
        });
    };

    const validateForm = (values) => {
        const error = {};
        if (!values.unitName) {
            error.unitName = "Unit Name is required";
        }
        if (!values.unitDesc) {
            error.unitDesc = "Unit Description is required";
        }
        return error;
    };

    const saveHandler = (e) => {
        setFormErrors(validateForm(unit));
        setIsSubmit(true);
    };

    const createUnit = async () => {
        try {
            await client.post('createUnit', unit);
            toast.success('Successfully Excecuted!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500
            });
            navigate('/master/unit-type');
        } catch (error) {
            toast.error('Something went wrong!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500
            });
            console.log(error);
        }
        };

    const editUnit = async () => {
        try {
            console.log('editUnit', unit);

            toast.success('Successfully Excecuted!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500 
            });

            // await client.post('editUnit', unit);
            navigate('/master/unit-type');
        } catch (error) {
            toast.error('Something went wrong!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500
            });
            console.log(error);
        }
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            data?.unitId ? editUnit() : createUnit();
        }
    }, [formErrors]);

    return (
        <>
            <form action="#">
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                        <InputLable htmlFor={`unitName`} lable={`Unit Name`} />
                        <InputText name="unitName" type="text" changeHandler={changeHandler} value={unit.unitName} />
                        <InputError error={formErrors.unitName} />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <InputLable htmlFor={`unitDesc`} lable={`Unit Name`} />
                        <InputTextarea name="unitDesc" changeHandler={changeHandler} value={unit.unitDesc} />
                        <InputError error={formErrors.unitDesc} />
                    </div>
                </div>
                <div className="flex justify-end gap-4.5">
                    <Link to="/master/unit" className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white">Cancel</Link>
                    <button className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1" type="button" onClick={(e) => saveHandler(e)}>Save</button>
                </div>
            </form>
        </>
    );
};

export default Form;
