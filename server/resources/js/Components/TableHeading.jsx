import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

const TableHeading = ({
    name,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChange = () => {},
    children,
}) => {
    return (
        <th onClick={(e) => sortChange(name)}>
            <div className=" px-3 py-2 flex items-center justify-between gap-1 cursor-pointer">
                {children}
                {sortable && (
                    <div>
                        <ChevronUpIcon
                            className={
                                " w-4" +
                                (sort_field === name && sort_direction === "asc"
                                    ? " text-white"
                                    : "")
                            }
                        />
                        <ChevronDownIcon
                            className={
                                " w-4 -mt-2" +
                                (sort_field === name &&
                                sort_direction === "desc"
                                    ? " text-white"
                                    : "")
                            }
                        />
                    </div>
                )}
            </div>
        </th>
    );
};

export default TableHeading;
