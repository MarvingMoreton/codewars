function positiveSum(arr) {
    let summy = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) summy += arr[i];
        if (!summy) summy = 0;
    }
    return summy;
}
