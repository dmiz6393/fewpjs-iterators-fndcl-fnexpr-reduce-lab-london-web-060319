const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function sumBatteries(total,batteries){
    return total+batteries;
}
const totalBatteries=batteryBatches.reduce(sumBatteries,0)