import TaskType from "./task.type";
export const AddTask=(TaskText)=> {
     return{
         type:TaskType.ADD_TASK,
         payload:TaskText,
     }
}
export const DeleteTask=(TaskIndex)=>{
    console.log("deleted task called",TaskIndex);

     return{
        type:TaskType.DELETE_TASK,
        payload:TaskIndex
     }
}
export const completedTask=()=>{
   return {
       type:TaskType.COMPLETED_TASK
   }
}
