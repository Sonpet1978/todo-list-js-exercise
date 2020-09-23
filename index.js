// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];
//sonya
//222
// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title,description) {
  const task = {
    taskTitles: title,
    taskDescriptions: description,
    taskComplete: false
  };
  return task;

}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.complete = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  console.log('${task.title} has${task.complete ? " " : " not "}been completed');
}

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// for now, let's just make sure we see our tasks
console.log(tasks);


logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
