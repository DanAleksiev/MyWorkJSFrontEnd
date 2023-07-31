function solve(input) {
  const horses = input.shift().split("|");

  for (let i = 0; i < input.length; i++) {
    const currentAction = input[i].split(" ");
    const action = currentAction.shift();

    if (action === "Finish") {
      break;
    }

    if (action === "Retake") {
      retake(currentAction);
    } else if (action === "Rage") {
      rage(currentAction);
    } else if (action === "Trouble") {
      trouble(currentAction);
    } else if (action === "Miracle") {
      miracle();
    }
  }

  console.log(horses.join("->"));
  console.log(`The winner is: ${horses[horses.length-1]}`);

  function miracle() {
    const horse = horses[0]
    horses.shift()
    horses.push(horse)

    console.log(`What a miracle - ${horse} becomes first.`);
  }

  function trouble(output) {
    const horse = output[0];
    const index = horses.indexOf(horse);

    if (index > 0) {
      const currentHorse = horses[index - 1];
      horses[index - 1] = horse;
      horses[index] = currentHorse;
      console.log(`Trouble for ${horse} - drops one position.`);
    }
    else{
        return;
    }

  }

  function rage(output) {
    const horse = output[0];
    const index = horses.indexOf(horse);

    for (let i = index; i < index + 2; i++) {
      if (horses.length-1 === i) {
        break;
      }
      
      const currentHorse = horses[i+1];
      horses[i] = currentHorse
      horses[i+1] = horse
    }
    
    console.log(`${horse} rages 2 positions ahead.`);
  }

  function retake(output) {
    const horse1 = output[0];
    const horse2 = output[1];
    const index1 = horses.indexOf(horse1);
    const index2 = horses.indexOf(horse2);

    if (index1 < index2) {
      horses[index1] = horse2;
      horses[index2] = horse1;

      console.log(`${horse1} retakes ${horse2}.`);
    }
  }
}

//left is last
// solve([
//   "Bella|Alexia|Sugar",
// //   'Miracle',
//   "Retake Alexia Sugar",
//   "Rage Bella",
//   "Trouble Bella",
//   "Finish",
// ]);


solve(['Onyx|Domino|Sugar|Fiona',
'Trouble Onyx',
'Retake Onyx Sugar',
'Rage Domino',
'Miracle',
'Finish'])