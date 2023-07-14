import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        sections:[
            {
                name:"BACKLOG",
                tasks:[
                    {
                        id:1,
                        title: "Create a modal for notifications",
                        status: "BACKLOG"
                    },
                    {
                        id:2,
                        title: "Add Pinia state management to App",
                        status: "BACKLOG"
                    }

                ],
            },
            {
                name:"IN PROGRESS",
                tasks:[
                    {
                        id:3,
                        title: "Create a modal for notifications",
                        status: "BACKLOG"
                    },
                    {
                        id:4,
                        title: "Add Pinia state management to App",
                        status: "BACKLOG"
                    }

                ],
            },
            {
                name:"COMPLETED",
                tasks:[
                    {
                        id:5,
                        title: "Create a modal for notifications",
                        status: "BACKLOG"
                    },
                    {
                        id:6,
                        title: "Add Pinia state management to App",
                        status: "BACKLOG"
                    }

                ],
            }
        ]
     }),
    getters: {
        getTasks:(state) => state.sections
    },
    actions:{
         addTask:({ task }) => {
        state.$patch( item => {
            item.sections.push({
                task:task,
                status: 'BACKLOG'
            });
        })
    }
    }
})
