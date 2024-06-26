const tasks = [
    { Id: '1', Task: "task no. 01", Due_date: '10-05-2024' },
    { Id: '2', Task: "task no. 02", Due_date: '11-05-2024' },
    { Id: '3', Task: "task no. 03", Due_date: '15-05-2024' },
    { Id: '4', Task: "task no. 04", Due_date: '18-05-2024' },
    { Id: '5', Task: "task no. 05", Due_date: '17-05-2024' },
    { Id: '6', Task: "task no. 06", Due_date: '19-05-2024' },
    { Id: '7', Task: "task no. 07", Due_date: '06-05-2024' },
    { Id: '8', Task: "task no. 08", Due_date: '25-05-2024' },
    { Id: '9', Task: "task no. 09", Due_date: '21-05-2024' },
    { Id: '10', Task: "task no. 10", Due_date: '27-05-2024' },
]

export const  TasksColumbs = {
    tc1: {
        title: 'Today',
        items: []
    },
    tc2: {
        title: 'Tomorrow',
        items: []
    },
    tc3: {
        title: 'This Week',
        items: []
    },
    tc4: {
        title: 'Next Week',
        items: []
    },
    tc5: {
        title: 'Unplanned',
        items: tasks,
    },
   

}