import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import Form from "./Partials/Form";

const Create = () => {
    return (
        <>
            <div className="mx-auto max-w-270">
                <Breadcrumb title="Create Floor" />
                <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-5">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="p-7">
                               <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;
