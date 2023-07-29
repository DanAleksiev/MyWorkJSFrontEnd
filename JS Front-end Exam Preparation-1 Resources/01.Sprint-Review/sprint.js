function solve(params) {
  const n = Number(params.shift());
  const tickets = params.slice(0, n);
  const commands = params.slice(n);

  const assignees = tickets.reduce((acc, curr) => {
    const [name, taskId, title, status, estimatedPoints] = curr.split(":");

    if (!acc.hasOwnProperty(name)) {
      acc[name] = [];
    }

    acc[name].push({
      taskId,
      title,
      status,
      estimatedPoints: Number(estimatedPoints),
    });

    return acc;
  }, {});

  const actions = {
    "Add New": addNew,
    "Change Status": changeStatus,
    "Remove Task": removeTask,
  };
  commands.forEach((c) => {
    const [command, ...rest] = c.split(":");
    actions[command](...rest);
  });

  calculatePoints();

  function calculatePoints() {
    const toDoTasksTotalPoints = calculate("ToDo");
    const inProgressTasksTotalPoints = calculate("In Progress");
    const codeReviewTasksTotalPoints = calculate("Code Review");
    const doneTasksTotalPoints = calculate("Done");

    const sum =
      toDoTasksTotalPoints +
      inProgressTasksTotalPoints +
      codeReviewTasksTotalPoints;

    if (sum < doneTasksTotalPoints) {
      console.log(`Sprint was successful!`);
    } else {
      console.log(`Sprint was unsuccessful...`);
    }
  }

  function calculate(status) {
    const totalPoints = Object.values(assignees).reduce((acc, curr) => {
      const total = curr
        .filter((a) => a.status === status)
        .reduce((tTotal, task) => tTotal + task.estimatedPoints, 0);

      return acc + total;
    }, 0);
    if (status === "Done") {
        console.log(`${status} Points: ${totalPoints}pts`);
        
    }
    else{
        console.log(`${status}: ${totalPoints}pts`);

    }
    return totalPoints;
  }

  function addNew(assignee, taskId, title, status, estimatedPoints) {
    if (!assignees.hasOwnProperty(assignee)) {
      doesItExistMessage(assignee);
      return true;
    }

    assignees[assignee].push({
      taskId,
      title,
      status,
      estimatedPoints: Number(estimatedPoints),
    });
  }

  function changeStatus(assignee, taskId, newStatus) {
    if (!assignees.hasOwnProperty(assignee)) {
      doesItExistMessage(assignee);
      return;
    }

    const task = assignees[assignee].find((e) => e.taskId === taskId);

    if (!task) {
      console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
      return;
    }

    assignees[assignee].pop(task);
    task.status = newStatus;
    assignees[assignee].push(task);
    // console.log(JSON.stringify(assignees[assignee]));
  }

  function removeTask(assignee, index) {
    if (!assignees.hasOwnProperty(assignee)) {
      doesItExistMessage(assignee);
      return;
    }

    if (index > assignees[assignee].length) {
      console.log("Index is out of range!");
      return;
    }

    assignees[assignee].pop(index);
  }

  function doesItExistMessage(assignee) {
    console.log(`Assignee ${assignee} does not exist on the board!`);
  }
}

// solve([
//   "5",
//   "Kiril:BOP-1209:Fix MinorBug:ToDo:3",
//   "Mariya:BOP-1210:Fix MajorBug:In Progress:3",
//   "Peter:BOP-1211:POC:Code Review:5",
//   "Georgi:BOP-1212:InvestigationTask:Done:2",
//   "Mariya:BOP-1213:New AccountPage:In Progress:13",
//   "Add New:Kiril:BOP-1217:AddInfo Page:In Progress:5",
//   "Change Status:Peter:BOP-1290:ToDo",
//   "Remove Task:Mariya:1",
//   "Remove Task:Joro:1",
// ]);

solve([
  `4`,
`Kiril:BOP-1213:Fix Typo:Done:1`,
`Peter:BOP-1214:New Products Page:In Progress:2`,
`Mariya:BOP-1215:Setup Routing:ToDo:8`,
`Georgi:BOP-1216:Add Business Card:Code Review:3`,
`Add New:Sam:BOP-1237:Testing Home Page:Done:3`,
`Change Status:Georgi:BOP-1216:Done`,
`Change Status:Will:BOP-1212:In Progress`,
`Remove Task:Georgi:3`,
`Change Status:Mariya:BOP-1215:Done`
]);
