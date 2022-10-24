// local storage for tasks

// local storage for tasks

export default class LocalStorageManager {

    // { id : timestamp, content: string, completed: bool }
  
    constructor(ls_task_list_reference = "taskList"){
      this.ls_task_list_reference = ls_task_list_reference; 
      this.taskList = [];
    }
  
    // accessors - - - - - - -
    getTaskList(){
      return this.taskList;
    }
  
    // control - - - - - - - -
    loadTasks(){
      const result = JSON.parse(localStorage.getItem(this.ls_task_list_reference));
      if(result && result.length){
        result.forEach(task => {
          this.taskList.push(
            {
              "text": task.text,
              "complete": task.complete,
            }
          )
        });
      }
    }
  
    saveTaskList(taskList){
      // initialize data list
      const data = []
      if(taskList && taskList.length){
        // create list of dictionaries for each task
        taskList.forEach(task => {
          data.push(
            {
              "text": task.getText(),
              "complete": task.getComplete(),
              // I'm not using timestamp, since id is not really important for such a simple app
              "timestamp": Date.now(),
            }
          )
        });
      }
      // save data even when it's blank so deleting all tasks works
      localStorage.setItem(this.ls_task_list_reference, JSON.stringify(data));
    }
  
  }