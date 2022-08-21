import { Task } from "./task"

export const TASKS:Task[] = [
    {
        id:1,
        title:"Finish laundry",
        text:'',
        day: '12/08/22',
        time: '17:00',
        reminder: true,
        completed: false,
        expire: new Date(),
        type: 0,
    },
    {
        id:2,
        title:"Go to the gym",
        text:'Try new routine',
        day: '12/08/22',
        time: '10:00',
        reminder: false,
        completed: true,
        expire:new Date(),
        type: 0,
    },
    {
        id:3,
        title:"Stretching",
        text:"30 seg per stretch",
        day: '12/08/22',
        time: '23:00',
        reminder: true,
        completed: false,
        expire:new Date(),
        type: 0,
    },

]