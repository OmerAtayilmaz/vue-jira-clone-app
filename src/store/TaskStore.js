import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        sections:[
            {
                name:"Backlog",
                type:"BACKLOG",
                tasks:[
                    {
                        id:1,
                        title: "Create a modal for notifications",
                    },
                    {
                        id:2,
                        title: "Add Pinia state management to App",
                    }

                ],
            },
            {
                name:"In Progress",
                type:"INPROGRESS",
                tasks:[
                    {
                        id:3,
                        title: "Create a modal for notifications",
                    },
                    {
                        id:4,
                        title: "Add Pinia state management to App",
                    }

                ],
            },
            {
                name:"Completed",
                type: "COMPLETED",
                tasks:[
                    {
                        id:5,
                        title: "Create a modal for notifications",
                    },
                    {
                        id:6,
                        title: "Add Pinia state management to App",
                    }

                ],
            }
        ]
     }),
    getters: {
        getTasks:(state) => state.sections
    },
    actions:{
         addTask({ task, type }) {
             this.sections.find(el => el.type === type).tasks.push({
                 id:'new',
                 title: task,
             })
    }
    }
})
