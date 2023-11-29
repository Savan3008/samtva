import { useEffect, useState } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import Form from "./Partials/Form";
import { useParams } from "react-router-dom";
import { unitTypes as client } from "../../../client";
import Loader from '../../../components/Loader';

const Edit = ({ authUser }) => {

    const { id } = useParams()

    const [unitType, setUnitType] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUnit = async () => {
            setLoading(true);
            try {
                let response = await client.get('GetUnitTypeById', {
                    params: {
                        projectId: authUser?.projectId,
                        unitTypeId: id,
                    }
                });
                let data = response.data
                if(data?.statusCode == 200) {
                    setUnitType(data.data);
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
                                    {unitType && unitType?.unitTypeId && <Form data={unitType} />}
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
