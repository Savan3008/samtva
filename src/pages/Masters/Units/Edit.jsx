import { useEffect, useState } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import Form from "./Partials/Form";
import { useParams } from "react-router-dom";
import { units as client, authUser } from "../../../client";
import Loader from '../../../components/Loader';

const Edit = () => {

    const { id } = useParams()

    const [unit, setUnit] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUnit = async () => {
            setLoading(true);
            try {
                let response = await client.get('GetUnitById', {
                    params: {
                        projectId: authUser?.projectId,
                        unitId: id,
                    }
                });
                let data = response.data
                if(data?.statusCode == 200) {
                    setUnit(data.data);
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchUnit();
    }, []);

    return (
        <>
            <div className="mx-auto max-w-270">
                <Breadcrumb title="Edit Unit" />
                <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-5">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="p-7"> {
                                loading ? <Loader /> : <>
                                    {unit && unit?.unitId && <Form data={unit} />}
                                </>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
