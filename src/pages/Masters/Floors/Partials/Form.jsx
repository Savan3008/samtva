import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { floors as client, authUser } from "../../../../client";
import  InputLable  from "../../../../components/InputLable";
import  InputText from "../../../../components/InputText";
import  InputError from "../../../../components/InputError";
import  InputTextarea from "../../../../components/InputTextarea";
import { toast } from 'react-toastify';

const Form = ({ data }) => {
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [floor, setFloor] = useState({
        createdBy: authUser?.userId,
        floorName: data?.floorName ? data.floorName : "",
        floorDesc: data?.floorDesc ? data.floorDesc : "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFloor({
            ...floor,
            [name]: value,
        });
    };

    const validateForm = (values) => {
        const error = {};
        if (!values.floorName) {
            error.floorName = "Floor Name is required";
        }
        if (!values.floorDesc) {
            error.floorDesc = "Floor Description is required";
        }
        return error;
    };

    const saveHandler = (e) => {
        setFormErrors(validateForm(floor));
        setIsSubmit(true);
    };

    const createFloor = async () => {
        try {
            await client.post('createFloor', floor);
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

    const editFloor = async () => {
        try {
            console.log('editFloor', floor);

            toast.success('Successfully Excecuted!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500 
            });

            // await client.post('editFloor', floor);
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
            data?.floorId ? editFloor() : createFloor();
        }
    }, [formErrors]);

    return (
        <>
            <form action="#">
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                        <InputLable htmlFor={`floorName`} lable={`Floor Name`} />
                        <InputText name="floorName" type="text" changeHandler={changeHandler} value={floor.floorName} />
                        <InputError error={formErrors.floorName} />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <InputLable htmlFor={`floorDesc`} lable={`Floor Name`} />
                        <InputTextarea name="floorDesc" changeHandler={changeHandler} value={floor.floorDesc} />
                        <InputError error={formErrors.floorDesc} />
                    </div>
                </div>
                <div className="flex justify-end gap-4.5">
                    <Link to="/master/floor" className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white">Cancel</Link>
                    <button className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1" type="button" onClick={(e) => saveHandler(e)}>Save</button>
                </div>
            </form>
        </>
    );
};

export default Form;
