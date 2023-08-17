function solve(input) {
  const n = Number(input[0]);

  const austronaughts = {};

  for (let i = 1; i <= n; i++) {
    const [name, oxygen, energy] = input[i].split(" ");
    const curr = {
      name,
      oxygen: Number(oxygen),
      energy: Number(energy),
    };

    austronaughts[name] = curr;
  }

  const commands = input.slice(n + 1);

  commands.forEach((element) => {
    const [command, target, amount] = element.split(" - ");

    const austrant = austronaughts[target];
    if (command === "Explore") {
      if (austrant.energy >= amount) {
        austrant.energy -= amount;
        console.log(
          `${target} has successfully explored a new area and now has ${austrant.energy} energy!`
        );
      } else {
        console.log(`${target} does not have enough energy to explore!`);
      }
    } else if (command === "Refuel") {
        const oldEnergy = austrant.energy;

      let charge = Number(amount);
      austrant.energy += Number(amount);

      if (austrant.energy > 200) {
        charge = 200 - oldEnergy;
        austrant.energy = 200;
      }

      console.log(`${target} refueled their energy by ${charge}!`);
    } else if (command === "Breathe") {
      const oldEnergy = austrant.oxygen;
      let charge = Number(amount);
      austrant.oxygen += Number(amount);
      if (austrant.oxygen > 100) {
        charge = 100 - oldEnergy;
        austrant.oxygen = 100;
      }

      console.log(`${target} took a breath and recovered ${charge} oxygen!`);
    }
    else{
        return;
    }
  });
  Object.values(austronaughts).forEach(a => {
    console.log(`Astronaut: ${a.name}, Oxygen: ${a.oxygen}, Energy: ${a.energy}`);
  })
}

solve([
  "3",
  "John 50 120",
  "Kate 80 180",
  "Rob 70 150",
  "Explore - John - 50",
  "Refuel - Kate - 30",
  "Breathe - Rob - 20",
  "End",
]);
