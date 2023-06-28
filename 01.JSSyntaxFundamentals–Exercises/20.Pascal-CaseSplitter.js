function solve(sentance){
    const regex =  /([A-Z][a-z]{0,})/g
    const arr = sentance.match(regex)

     console.log(arr.join(", ").trimEnd());
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')