//var previousComputeMinutes = 12*60+48;

async function computeMinutes() {
    var date = new Date()
    var hh = date.getHours();
    var mm = date.getMinutes();
    return hh*60 + mm;

    //return 9*60 + 50;
    //previousComputeMinutes++;
    //return previousComputeMinutes;
}

export default computeMinutes;