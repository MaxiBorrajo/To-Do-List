export interface Task{
    id: number;
    title:string;
    text: string;
    day:string;
    time:string;
    reminder:boolean;
    completed:boolean;
    expire:Date;
}