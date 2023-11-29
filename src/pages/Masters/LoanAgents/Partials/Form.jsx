import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { banks as client, authUser } from "../../../../client";
import  InputLable  from "../../../../components/InputLable";
import  InputText from "../../../../components/InputText";
import  InputError from "../../../../components/InputError";
import  InputTextarea from "../../../../components/InputTextarea";
import { toast } from 'react-toastify';

const Form = ({ data }) => {
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [bank, setBank] = useState({
        createdBy: authUser?.userId,
        bankName: data?.bankName ? data.bankName : "",
        bankDesc: data?.bankDesc ? data.bankDesc : "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setBank({
            ...bank,
            [name]: value,
        });
    };

    const validateForm = (values) => {
        const error = {};
        if (!values.bankName) {
            error.bankName = "Bank Name is required";
        }
        if (!values.bankDesc) {
            error.bankDesc = "Bank Description is required";
        }
        return error;
    };

    const saveHandler = (e) => {
        setFormErrors(validateForm(bank));
        setIsSubmit(true);
    };

    const createBank = async () => {
        try {
            await client.post('createBank', bank);
            toast.success('Successfully Excecuted!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500
            });
            navigate('/master/bank-type');
        } catch (error) {
            toast.error('Something went wrong!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500
            });
            console.log(error);
        }
        };

    const editBank = async () => {
        try {
            console.log('editBank', bank);

            toast.success('Successfully Excecuted!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500 
            });

            // await client.post('editBank', bank);
            navigate('/master/bank-type');
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
            data?.bankId ? editBank() : createBank();
        }
    }, [formErrors]);

    return (
        <>
            <form action="#">
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                        <InputLable htmlFor={`bankName`} lable={`Bank Name`} />
                        <InputText name="bankName" type="text" changeHandler={changeHandler} value={bank.bankName} />
                        <InputError error={formErrors.bankName} />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <InputLable htmlFor={`bankDesc`} lable={`Bank Name`} />
                        <InputTextarea name="bankDesc" changeHandler={changeHandler} value={bank.bankDesc} />
                        <InputError error={formErrors.bankDesc} />
                    </div>
                </div>
                <div className="flex justify-end gap-4.5">
                    <Link to="/master/bank" className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white">Cancel</Link>
                    <button className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1" type="button" onClick={(e) => saveHandler(e)}>Save</button>
                </div>
            </form>
        </>
    );
};

export default Form;
