import { useEffect, useState } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import Form from "./Partials/Form";
import { useParams } from "react-router-dom";
import { banks as client, authUser } from "../../../client";
import Loader from '../../../components/Loader';

const Edit = () => {

    const { id } = useParams()

    const [bank, setBank] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBank = async () => {
            setLoading(true);
            try {
                let response = await client.get('GetBankById', {
                    params: {
                        projectId: authUser?.projectId,
                        bankId: id,
                    }
                });
                let data = response.data
                if(data?.statusCode == 200) {
                    setBank(data.data);
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchBank();
    }, []);

    return (
        <>
            <div className="mx-auto max-w-270">
                <Breadcrumb title="Edit Bank" />
                <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-5">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="p-7"> {
                                loading ? <Loader /> : <>
                                    {bank && bank?.bankId && <Form data={bank} />}
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
