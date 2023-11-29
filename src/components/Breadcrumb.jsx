import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, button = null, buttonLink = "#" }) => {
    return (
        <div className="mb-6 flex gap-3 flex-row sm:items-center justify-between">
            <h2 className="text-title-md2 font-semibold text-black dark:text-white">
                {title}
            </h2>
            {
                button && <Link to={buttonLink} className="inline-flex cursor-pointer items-center justify-center rounded-full bg-black py-2 px-5 text-center font-medium text-white hover:bg-opacity-90">{button}</Link>
            }

        </div>
    );
};

export default Breadcrumb;
