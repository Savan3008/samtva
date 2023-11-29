import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Icons from '../../components/Icons';
import { login as client } from "../../client";
import Logo from '../../images/logo.jpg';
import { toast } from 'react-toastify';

const SignIn = ({ setAuthUser }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [user, setUserDetails] = useState({
        companyId: "A5DD9D7B-42C4-4594-92CF-BA3896312EF2",
        projectId: "541A1519-3147-4C00-9BA5-A42B70410BE2",
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...user,
            [name]: value,
        });
    };

    const validateForm = (values) => {
        const error = {};
        const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            error.email = "Email is required";
        } else if (!regex.test(values.email)) {
            error.email = "Please enter a valid email address";
        }
        if (!values.password) {
            error.password = "Password is required";
        }
        return error;
    };

    const loginHandler = (e) => {
        setFormErrors(validateForm(user));
        setIsSubmit(true);
    };

    const authLogin = async () => {
        try {
            setLoading(true);
            let response = await client.post('login', user);
            console.log(response.data);
            let responseData = response.data;
            if (responseData.token) {
                localStorage.setItem("auth-user", JSON.stringify(responseData));
                setAuthUser(responseData);
                toast.success('Logged in successfully!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1500 
                });
                navigate('/');
            } else {
                toast.error('Something went wrong!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1500
                });
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            authLogin();
        }
    }, [formErrors]);

    return (
        <>
            <header className="top-0 z-999 flex justify-center items-center text-black dark:text-white border-stroke bg-white dark:border-strokedark dark:bg-boxdark px-4 p-4">
                <h3 className="mb-0 text-xl sm:text-title-xl2 font-bold"><img src={Logo} alt="Logo" width={120} /></h3>
            </header>
            <div className="relative bg-cover bg-center bg-gray">
                <div className='relative flex flex-col items-center justify-start py-20 min-h-[calc(100vh - 56px)]'>
                    <div className="sm:w-1/2 w-[90%] max-w-lg m-auto rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-stroke dark:border-strokedark xl:border-l-2">
                            <div className="w-full p-2 sm:p-3 xl:p-5">
                                <h2 className="mb-9 text-xl uppercase font-bold text-center text-black dark:text-white sm:text-title-xl2">
                                    Sign In
                                </h2>
                                <form>
                                    <div className="mb-4 space-y-2">
                                        <label className="mb-2.5 block font-medium text-black dark:text-white">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                onChange={changeHandler}
                                                value={user.email}
                                            />
                                            <span className="absolute right-4 top-4">
                                                <Icons name={`email`} />
                                            </span>
                                        </div>
                                        <p className="my-2.5 font-medium text-[#FF0000]" >{formErrors.email}</p>
                                    </div>
                                    <div className="mb-6 space-y-2">
                                        <label className="mb-2.5 block font-medium text-black dark:text-white">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Enter your password"
                                                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                onChange={changeHandler}
                                                value={user.password}
                                            />
                                            <span className="absolute right-4 top-4">
                                                <Icons name={`lock`} />
                                            </span>
                                        </div>
                                        <p className="my-2.5 font-medium text-[#FF0000]" >{formErrors.password}</p>
                                    </div>
                                    <div className="mb-5">
                                        <input
                                            type="button"
                                            defaultValue="Sign In"
                                            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90" onClick={(e) => loginHandler(e)}
                                        />
                                    </div>
                                    <div className="mt-6 text-center">
                                        <p>
                                            Don’t have any account?{' '}
                                            <Link to="/signup" className="text-primary">
                                                Sign Up
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
