import React from "react";

const InputError = ({ error }) => {
    return error ? ( 
        <p className="my-2.5 font-medium text-[#FF0000]" >{error}</p>
    ) : null;
};

export default InputError;
