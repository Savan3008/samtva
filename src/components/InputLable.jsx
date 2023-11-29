import React from "react";

const InputLable = ({ htmlFor, lable }) => {
    return (
        <label
            className="mb-3 block text-sm font-medium text-black dark:text-white"
            htmlFor={htmlFor}
        >
            {lable}
        </label>
    );
};

export default InputLable;
