import { Link } from 'react-router-dom';
import Icons from '../../../components/Icons';
import Loader from '../../../components/Loader';
import DataNotFound from '../../../components/DataNotFound';
import Breadcrumb from "../../../components/Breadcrumb";
import { useEffect, useState } from 'react';
import { unitTypes as client, authUser } from "../../../client";

const CREATE_URL = "/master/unit-type/create";

const UnitTypes = () => {

  const [unitTypes, setUnitTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUnit = async () => {
      try {
        setLoading(true);
        let response = await client.get('GetAllUnitType', {
          params: { projectId: authUser?.projectId }
        });
        let responseData = response.data
        if(responseData?.statusCode == 200) {
          setUnitTypes(responseData.data);
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    fetchUnit();
  }, []);

  const deleteUnitType = async (id) => {
    try {
      setLoading(true);
      let response =  await client.post('DeleteUnitType', id);
      console.log(response);
      // setUnitTypes(
      //   unitTypes.filter((unitType) => {
      //     return unitType.id !== id;
      //   })
      // );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <Breadcrumb title="Unit types" button="Create" buttonLink={CREATE_URL} />
        <div className="rounded-sm border border-stroke bg-white px-5 pt-3 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    Unit Name
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    Unit Desc
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
                        unitTypes && unitTypes.map((unitType, i) => {
                          return (
                            <tr key={i}>
                              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                <h5 className="font-medium text-black dark:text-white">
                                  {unitType?.unitTypeName}
                                </h5>
                              </td>
                              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                <p className="text-black dark:text-white"> {unitType?.unitTypeDesc} </p>
                              </td>
                              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                <div className="flex items-center space-x-2">
                                  <Link to={`/master/unit-type/${unitType?.unitTypeId}/edit`} className="hover:text-primary">
                                    <Icons name={`edit`} />
                                  </Link>
                                  <button className="hover:text-primary" onClick={() => deleteUnitType(unitType?.unitTypeId)}>
                                    <Icons name={`delete`} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )
                        })
                      }
                      {
                        unitTypes.length == 0 && <tr>
                          <td colSpan={4}>
                            <DataNotFound title={`Unit Type not found`} />
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

export default UnitTypes;
