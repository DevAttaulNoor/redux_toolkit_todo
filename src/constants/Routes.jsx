export const Routes = {
    HOME: {
        title: "Home",
        path: "/",
        meta: {
            title: "Todo List",
            description:
                "View, organize, and manage all your tasks in one place. Stay productive with your Redux Toolkit Todo App.",
        },
    },

    ADD: {
        title: "Add Todo",
        path: "/add",
        meta: {
            title: "Add a New Task",
            description:
                "Easily add new todos with titles and descriptions. Keep track of everything that matters in your daily workflow.",
        },
    },

    EDIT: {
        title: "Edit Todo",
        path: "/edit/:id",
        meta: {
            title: "Edit Task",
            description:
                "Update existing tasks and modify their titles or descriptions to stay up to date with your ongoing work.",
        },
    },
};