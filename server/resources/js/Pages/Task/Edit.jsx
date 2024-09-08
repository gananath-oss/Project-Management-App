import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const Edit = ({ auth, task, users, projects }) => {
    const { data, setData, post, errors, reset } = useForm({
        image: "",
        name: task.name || "",
        status: task.status || "",
        priority: task.priority || "",
        project_id: task.project_id || "",
        assigned_user_id: task.assigned_user_id || "",
        description: task.description || "",
        due_date: task.due_date || "",
        _method: "PUT",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("task.update", task.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className=" flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Edit Task "{task.name}"
                    </h2>
                </div>
            }
        >
            <Head title="Tasks" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:p-6 lg:p-8 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <form
                        encType="multipart/form-data"
                        onSubmit={onSubmit}
                        className=" p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                    >
                        {task.image_path && (
                            <div className="mb-4">
                                <img
                                    src={task.image_path}
                                    alt={task.id}
                                    className="w-64 rounded"
                                />
                            </div>
                        )}
                        <div>
                            <InputLabel
                                htmlFor="task_project_id"
                                value="Project Name"
                                className=" dark:text-white"
                            />
                            <SelectInput
                                id="task_project_id"
                                name="project_id"
                                value={data.project_id}
                                className=" mt-1 block w-full bg-white dark:bg-gray-600"
                                onChange={(e) =>
                                    setData("project_id", e.target.value)
                                }
                            >
                                <option value="">Project</option>
                                {projects.data.map((project) => (
                                    <option key={project.id} value={project.id}>
                                        {project.name}
                                    </option>
                                ))}
                            </SelectInput>
                            <InputError
                                message={errors.project_id}
                                className=" mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="task_image_path"
                                value="Task Image"
                                className=" dark:text-white mt-4"
                            />
                            <TextInput
                                id="task_image_path"
                                type="file"
                                name="image"
                                className=" mt-1 block w-full bg-white dark:bg-gray-600"
                                onChange={(e) => {
                                    setData("image", e.target.files[0]);
                                }}
                            />
                            <InputError
                                message={errors.image}
                                className=" mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="task_name"
                                value="Task Name"
                                className=" dark:text-white mt-4"
                            />
                            <TextInput
                                id="task_name"
                                type="text"
                                name="name"
                                value={data.name}
                                className=" mt-1 block w-full bg-white dark:bg-gray-600"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.name}
                                className=" mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="task_status"
                                value="Task Status"
                                className=" dark:text-white mt-4"
                            />
                            <SelectInput
                                id="task_status"
                                name="status"
                                value={data.status}
                                className=" mt-1 block w-full bg-white dark:bg-gray-600"
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                            >
                                <option value="">Pleass Select Status</option>
                                <option value="pending">Pending</option>
                                <option value="in_progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </SelectInput>
                            <InputError
                                message={errors.status}
                                className=" mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="task_priority"
                                value="Task Priority"
                                className=" dark:text-white mt-4"
                            />
                            <SelectInput
                                id="task_priority"
                                name="priority"
                                value={data.priority}
                                className=" mt-1 block w-full bg-white dark:bg-gray-600"
                                onChange={(e) =>
                                    setData("priority", e.target.value)
                                }
                            >
                                <option value="">Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </SelectInput>
                            <InputError
                                message={errors.priority}
                                className=" mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="task_assigned_user_id"
                                value="Assigned User"
                                className=" dark:text-white mt-4"
                            />
                            <SelectInput
                                id="task_assigned_user_id"
                                name="assigned_user_id"
                                value={data.assigned_user_id}
                                className=" mt-1 block w-full bg-white dark:bg-gray-600"
                                onChange={(e) =>
                                    setData("assigned_user_id", e.target.value)
                                }
                            >
                                <option value="">User</option>
                                {users.data.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </SelectInput>
                            <InputError
                                message={errors.assigned_user_id}
                                className=" mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="task_description"
                                value="Task Description"
                                className=" dark:text-white mt-4"
                            />
                            <TextAreaInput
                                id="task_description"
                                name="description"
                                value={data.description}
                                className=" mt-1 block w-full bg-white dark:bg-gray-600"
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.description}
                                className=" mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="task_due_date"
                                value="Task Due Date"
                                className=" dark:text-white mt-4"
                            />
                            <TextInput
                                id="task_due_date"
                                type="date"
                                name="due_date"
                                value={data.due_date}
                                className=" mt-1 block w-full bg-white dark:bg-gray-600"
                                onChange={(e) =>
                                    setData("due_date", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.due_date}
                                className=" mt-2"
                            />
                        </div>
                        <div className=" mt-4 text-right">
                            <Link
                                href={route("task.index")}
                                className=" bg-white py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-300 mr-2"
                            >
                                Cancel
                            </Link>
                            <button className=" bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
