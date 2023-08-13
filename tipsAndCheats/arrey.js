    // console.log(JSON.stringify(assignees,null, 2));



    const arr = [1, 2, 3, 4, 5]
    // print(arr)
    mapF(arr)
    reduceF(arr)

    function print(arr) {
        arr.forEach(e => {
            console.log(e);
        });

        console.log(arr.join(" "));
        console.log("/////////////");
    }

    function mapF(arr) {
        const map = arr.map(e => e*2)
        const map2 = arr.map(e => `print ${e}`)
        // print(map)
        // print(map2)
    }

    function reduceF(arr) {
        const red = arr.reduce(
        (acc, curr) => acc + curr 
        ,0);

        console.log(red);
    }

// create object with arreys 
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