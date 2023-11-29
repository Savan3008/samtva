import React from "react";

const InputTextarea = ({ name, rows = 6, changeHandler, value }) => {
    return (
        <div className="relative">
            <textarea
                rows={rows}
                name={name}
                id={name}
                onChange={changeHandler}
                value={value}
                className="w-full rounded-lg border border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            ></textarea>
        </div>
    );
};

export default InputTextarea;
