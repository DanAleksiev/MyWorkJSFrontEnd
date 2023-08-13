function solve(input) {
  const n = input.shift();
  const tickets = input.slice(0, n);
  const commands = input.slice(n);
  const assignees = {};

  tickets.forEach((element) => {
    const [name, taskId, title, status, points] = element.split(":");
    if (!assignees[name]) {
      assignees[name] = [];
    }
    assignees[name].push({
      taskId,
      title,
      status,
      points: Number(points),
    });
  });

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
        .reduce((tTotal, task) => tTotal + task.points, 0);

      return acc + total;
    }, 0);
    if (status === "Done") {
      console.log(`${status} Points: ${totalPoints}pts`);
    } else {
      console.log(`${status}: ${totalPoints}pts`);
    }
    return totalPoints;
  }

  function addNew(name, taskId, title, status, points) {
    if (!verify(name)) return;

    assignees[name].push({
      taskId,
      title,
      status,
      points: Number(points),
    });
  }

  function changeStatus(name, taskId, status) {
    if (!verify(name)) return;

    const task = assignees[name].find((e) => e.taskId === taskId);

    if (!task) {
      console.log(`Task with ID ${taskId} does not exist for ${name}!`);
      return;
    }
    task.status = status;
  }
  function removeTask(name, index) {
    if (!verify(name)) return;

    if (index > assignees[name].length) {
      console.log("Index is out of range!");
      return;
    }

    assignees[name].pop(index);
  }
  function verify(name) {
    if (!assignees[name]) {
      console.log(`Assignee ${name} does not exist on the board!`);
      return false;
    }

    return true;
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
  `Change Status:Mariya:BOP-1215:Done`,
]);
