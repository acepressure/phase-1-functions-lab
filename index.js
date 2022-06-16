// Code your solution in this file!
const scuberHqBlocks = 42;
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber<42) {
        return scuberHqBlocks-blockNumber;
    } else {
        return blockNumber-scuberHqBlocks;
    }
}

const blockLength = 264;
function distanceFromHqInFeet(blockNumber) {
    distanceFromHqInBlocks(blockNumber);
    return distanceFromHqInBlocks(blockNumber)*blockLength;
}

function distanceTravelledInFeet(start,destination) {
     if (start<destination) {
        return((destination-start)*blockLength);
    } else {
        return((start-destination)*blockLength);
    }
}

const flatRate =25;
function calculatesFarePrice(start,destination) {
    let feet = ((destination-start)*blockLength);
    let feet1= !feet;
    if (feet<=400) {
        return 0;
    } if (feet1>400<2000) {
        return ((feet-400)*0.02);
    } if (feet-400>2000<=2500) {
        return flatRate;
    } if (feet>2500) {
        return 'cannot travel that far';
    }
}