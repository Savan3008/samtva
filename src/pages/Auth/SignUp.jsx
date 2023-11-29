import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Icons from '../../components/Icons';
import Logo from '../../images/logo.jpg';

const SignUp = () => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
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
    if (!values.password || !values.cpassword) {
      error.password = "Password is required";
    }
    if (values.password != values.cpassword) {
      error.password = "Password miss matched";
    }
    return error;
  };

  const sinUpHandler = (e) => {
    setFormErrors(validateForm(user));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate('/signin');
    }
  }, [formErrors]);

  return (
    <>
      <header className="top-0 z-999 flex justify-center items-center text-black dark:text-white border-stroke bg-white dark:border-strokedark dark:bg-boxdark px-4 p-4">
        <h3 className="mb-0 text-xl sm:text-title-xl2 font-bold"><img src={Logo} alt="Logo" width={120} /></h3>
      </header>
      <div className='relative bg-cover bg-center bg-gray'>
        <div className="relative flex flex-col items-center justify-start py-20 min-h-[calc(100vh - 56px)]">
          <div className="sm:w-1/2 w-[90%] max-w-lg m-auto rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-stroke dark:border-strokedark xl:border-l-2">
              <div className="w-full p-2 sm:p-3 xl:p-5">
                <h2 className="b-9 text-xl uppercase font-bold text-center text-black dark:text-white sm:text-title-xl2">
                  Sign Up
                </h2>
                <form>
                  <div className="mb-4 space-y-2">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <span className="absolute right-4 top-4">
                        <Icons name={`user`} />
                      </span>
                    </div>
                  </div>

                  <div className="mb-4 space-y-2">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <span className="absolute right-4 top-4">
                        <Icons name={`email`} />
                      </span>
                    </div>
                  </div>

                  <div className="mb-4 space-y-2">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <span className="absolute right-4 top-4">
                        <Icons name={`lock`} />
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 space-y-2">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Re-type Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Re-enter your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <span className="absolute right-4 top-4">
                        <Icons name={`lock`} />
                      </span>
                    </div>
                  </div>

                  <div className="mb-5">
                    <input
                      type="button"
                      value="Create account"
                      className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                      onClick={(e) => sinUpHandler(e)}
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <p>
                      Already have an account?{' '}
                      <Link to="/signin" className="text-primary">
                        Sign in
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

export default SignUp;
