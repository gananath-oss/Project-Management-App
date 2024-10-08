import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import { Link, router } from "@inertiajs/react";

const TaskTable = ({
    tasks,
    queryParams = null,
    hideProjectColumn = false,
    success,
}) => {
    queryParams = queryParams || {};

    const searchFieldChange = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("task.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searchFieldChange(name, e.target.value);
    };

    const sortChange = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }

        router.get(route("task.index"), queryParams);
    };

    const deleteTask = (task) => {
        if (!window.confirm("Are you sure you want to delete the task?")) {
            return;
        }
        router.delete(route("task.destroy", task.id));
    };

    return (
        <div className=" overflow-auto">
            {success && (
                <div className=" bg-emerald-500 py-2 px-4  m-6 text-white rounded">
                    {success}
                </div>
            )}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                    <tr className=" text-nowrap">
                        <th className=" px-3 py-2"></th>
                        <th className=" px-3 py-2"></th>
                        {!hideProjectColumn && <th className=" px-3 py-2"></th>}
                        <th className=" px-3 py-2">
                            <TextInput
                                className=" w-full"
                                placeholder="Task Name"
                                defaultValue={queryParams.name}
                                onBlur={(e) =>
                                    searchFieldChange("name", e.target.value)
                                }
                                onKeyPress={(e) => onKeyPress("name", e)}
                            />
                        </th>
                        <th className=" px-3 py-2">
                            <SelectInput
                                className=" w-full"
                                defaultValue={queryParams.status}
                                onChange={(e) =>
                                    searchFieldChange("status", e.target.value)
                                }
                            >
                                <option value="">Select Status</option>
                                <option value="pending">Pending</option>
                                <option value="in_progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </SelectInput>
                        </th>
                        <th className=" px-3 py-2"></th>
                        <th className=" px-3 py-2"></th>
                        <th className=" px-3 py-2"></th>
                        <th className=" px-3 py-2"></th>
                    </tr>
                    <tr className=" text-nowrap">
                        <TableHeading
                            name="id"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChange={sortChange}
                        >
                            Id
                        </TableHeading>
                        <th className=" px-3 py-2">Image</th>
                        {!hideProjectColumn && (
                            <th className=" px-3 py-2">Project Name</th>
                        )}
                        <TableHeading
                            name="name"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChange={sortChange}
                        >
                            Task Name
                        </TableHeading>
                        <TableHeading
                            name="status"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChange={sortChange}
                        >
                            Status
                        </TableHeading>
                        <TableHeading
                            name="created_at"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChange={sortChange}
                        >
                            Created Date
                        </TableHeading>
                        <TableHeading
                            name="due_date"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChange={sortChange}
                        >
                            Due Date
                        </TableHeading>

                        <th className=" px-3 py-2">Created By</th>
                        <th className=" px-3 py-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.data.map((task) => (
                        <tr
                            key={task.id}
                            className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <th className=" px-3 py-2">{task.id}</th>
                            <td className=" px-3 py-2">
                                <img
                                    src={task.image_path}
                                    alt={task.id}
                                    className="w-9 h-9 rounded-full"
                                />
                            </td>
                            {!hideProjectColumn && (
                                <td className=" px-3 py-2">
                                    {task.project.name}
                                </td>
                            )}
                            <th className=" px-3 py-2 text-white hover:underline">
                                <Link href={route("task.show", task.id)}>
                                    {task.name}
                                </Link>
                            </th>
                            <td className=" px-3 py-2">
                                <span
                                    className={
                                        " px-2 py-1 rounded text-white " +
                                        TASK_STATUS_CLASS_MAP[task.status]
                                    }
                                >
                                    {TASK_STATUS_TEXT_MAP[task.status]}
                                </span>
                            </td>
                            <td className=" px-3 py-2 text-nowrap">
                                {task.created_at}
                            </td>
                            <td className=" px-3 py-2 text-nowrap">
                                {task.due_date}
                            </td>
                            <td className=" px-3 py-2">
                                {task.createdBy.name}
                            </td>
                            <td className=" px-3 py-2 text-nowrap">
                                <Link
                                    href={route("task.edit", task.id)}
                                    className=" font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={(e) => deleteTask(task)}
                                    className=" font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination links={tasks.meta.links} />
        </div>
    );
};

export default TaskTable;
