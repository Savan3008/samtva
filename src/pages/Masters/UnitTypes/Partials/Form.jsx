import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { unitTypes as client, authUser } from "../../../../client";
import  InputLable  from "../../../../components/InputLable";
import  InputText from "../../../../components/InputText";
import  InputError from "../../../../components/InputError";
import  InputTextarea from "../../../../components/InputTextarea";
import { toast } from 'react-toastify';

const Form = ({ data }) => {
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [unitType, setUnitType] = useState({
        createdBy: authUser?.userId,
        unitTypeName: data?.unitTypeName ? data.unitTypeName : "",
        unitTypeDesc: data?.unitTypeDesc ? data.unitTypeDesc : "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUnitType({
            ...unitType,
            [name]: value,
        });
    };

    const validateForm = (values) => {
        const error = {};
        if (!values.unitTypeName) {
            error.unitTypeName = "Unit Type Name is required";
        }
        if (!values.unitTypeDesc) {
            error.unitTypeDesc = "Unit Type Description is required";
        }
        return error;
    };

    const saveHandler = (e) => {
        setFormErrors(validateForm(unitType));
        setIsSubmit(true);
    };

    const createUnitType = async () => {
        try {
            await client.post('createUnitType', unitType);
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

    const editUnitType = async () => {
        try {
            console.log('editUnitType', unitType);

            toast.success('Successfully Excecuted!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500 
            });

            // await client.post('editUnitType', unitType);
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
            data?.unitTypeId ? editUnitType() : createUnitType();
        }
    }, [formErrors]);

    return (
        <>
            <form action="#">
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                        <InputLable htmlFor={`unitTypeName`} lable={`Unit Type Name`} />
                        <InputText name="unitTypeName" type="text" changeHandler={changeHandler} value={unitType.unitTypeName} />
                        <InputError error={formErrors.unitTypeName} />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <InputLable htmlFor={`unitTypeDesc`} lable={`Unit Type Name`} />
                        <InputTextarea name="unitTypeDesc" changeHandler={changeHandler} value={unitType.unitTypeDesc} />
                        <InputError error={formErrors.unitTypeDesc} />
                    </div>
                </div>
                <div className="flex justify-end gap-4.5">
                    <Link to="/master/unit-type" className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white">Cancel</Link>
                    <button className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1" type="button" onClick={(e) => saveHandler(e)}>Save</button>
                </div>
            </form>
        </>
    );
};

export default Form;
