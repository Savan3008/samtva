import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useParams } from "react-router-dom";

const View = () => {
    const { id } = useParams()
    const [scheme, setScheme] = useState({});

    useEffect(() => {

        const fetchScheme = async () => {
            try {
                let response = await client.get('?_limit=10');
                setScheme(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        //  fetchScheme();

        setScheme(JSON.parse(localStorage.getItem("schemes")).find((element, index) => index == id));
    }, []);


    return (
        <>
            <div className="mx-auto max-w-270">
                <Breadcrumb title="View" />
                <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-5">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="p-7 flex justify-start gap-10">
                                <div className="flex justify-start gap-2">
                                    <h5 className="font-medium text-black dark:text-white">Scheme Name: </h5> {scheme?.scheme}
                                </div>
                                <div className="flex justify-start gap-2">
                                    <h5 className="font-medium text-black dark:text-white">Domain: </h5> {scheme?.domain}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default View;
