import React from "react";

const InputText = ({ name, type, changeHandler, value }) => {
    return (
        <div className="relative">
            <input
                className="w-full rounded border border-stroke bg-transparent py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-form-strokedark dark:bg-form-input  dark:text-white dark:focus:border-primary"
                type={type}
                name={name}
                id={name}
                onChange={changeHandler}
                value={value}
            />
        </div>
    );
};

export default InputText;
