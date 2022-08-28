import TaskType from "./task.type";
const inintainState={
    task:[],
    isCompleted:false,
    
}
function TaskReducer(state=inintainState,action) {
    
     switch (action.type) {
        case TaskType.ADD_TASK:
            
            return{
                ...state,
                task:[action.payload,...state.task],
                isCompleted:false
            }
        case TaskType.DELETE_TASK:
            console.log("action.payload",action.payload)
            let updatedArr=state.task.filter(item=> item.toString()!=action.payload.toString())
            // let updatedArr=[...state.task]
            // console.log("updated....",updatedArr)
            // updatedArr=
            // console.log("updated array",updatedArr)
            return{
                ...state,
                 task:updatedArr,
            }
        case TaskType.COMPLETED_TASK:
            return {
                ...state,
                
            }    
         default:
            return state;
     }
}

export default TaskReducer;