import { useEffect, useState } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import Form from "./Partials/Form";
import { useParams } from "react-router-dom";
import { floors as client, authUser } from "../../../client";
import Loader from '../../../components/Loader';

const Edit = () => {

    const { id } = useParams()

    const [floor, setFloor] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchFloor = async () => {
            setLoading(true);
            try {
                let response = await client.get('GetFloorById', {
                    params: {
                        projectId: authUser?.projectId,
                        floorId: id,
                    }
                });
                let data = response.data
                if(data?.statusCode == 200) {
                    setFloor(data.data);
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchFloor();
    }, []);

    return (
        <>
            <div className="mx-auto max-w-270">
                <Breadcrumb title="Edit Floor" />
                <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-5">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="p-7"> {
                                loading ? <Loader /> : <>
                                    {floor && floor?.floorId && <Form data={floor} />}
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
