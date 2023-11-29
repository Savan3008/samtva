import Icons from './Icons';

const DataNotFound = ({ title }) => {
    return (
        <div className="w-full my-10">
            <div className="flex flex-col gap-3 justify-center items-center text-md font-semibold">
                <Icons name={`not-found`} />
                {title}
            </div>
        </div>
    );
};

export default DataNotFound;
