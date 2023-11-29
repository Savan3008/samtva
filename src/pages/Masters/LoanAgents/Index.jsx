import { Link } from 'react-router-dom';
import Icons from '../../../components/Icons';
import Loader from '../../../components/Loader';
import DataNotFound from '../../../components/DataNotFound';
import Breadcrumb from "../../../components/Breadcrumb";
import { useEffect, useState } from 'react';
import { banks as client, authUser } from "../../../client";

const CREATE_URL = "/master/bank/create";

const Banks = () => {

  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let response = await client.get('GetAllBank', {
          params: { projectId: authUser?.projectId }
        });
        let responseData = response.data
        if (responseData?.statusCode == 200) {
          setBanks(responseData.data);
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  const deleteData = async (id) => {
    try {
      await client.delete(`${id}`);
      setBanks(
        banks.filter((bank) => {
          return bank?.bankId !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <Breadcrumb title="Banks" button="Create" buttonLink={CREATE_URL} />
        <div className="rounded-sm border border-stroke bg-white px-5 pt-3 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    Bank Name
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  loading ?
                    <tr>
                      <td colSpan={4}>
                        <Loader />
                      </td>
                    </tr>
                    : (<>
                      {
                        banks && banks.map((bank, i) => {
                          return (
                            <tr key={i}>
                              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                <h5 className="font-medium text-black dark:text-white">
                                  {bank?.bankName}
                                </h5>
                              </td>
                              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                <div className="flex items-center space-x-3.5">
                                  <Link to={`/master/bank-type/${bank?.bankId}/edit`} className="hover:text-primary">
                                    <Icons name={`setting`} />
                                  </Link>
                                  <button className="hover:text-primary">
                                    <Icons name={`delete`} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )
                        })
                      }
                      {
                        banks.length == 0 && <tr>
                          <td colSpan={4}>
                            <DataNotFound title={`Data not found`} />
                          </td>
                        </tr>
                      }
                    </>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banks;