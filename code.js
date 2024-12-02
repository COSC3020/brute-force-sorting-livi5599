function permutationSort(a) {
    var counter = 1;
    var permutations = [];
    permutations.push([...a]);
    if (a.length == 0 || a.length == 1) {
        return counter;
    }
    else if (isSorted(a)) {
        return counter;
    }
    else if (a.length == 2) {
        a.reverse();
        counter += 1;
        return counter;
    }
    else {
        var pillarArr = [];
        while (pillarArr.length < a.length) {
            for (i = 0; i < a.length; i++) {
                var pillar = a[i];
                if (!pillarArr.includes(pillar)) {
                    pillarArr.push(pillar);
                    var pillarIndex = a.indexOf(pillar);
                    if (pillarIndex != 0) {
                        [a[0], a[pillarIndex]] = [a[pillarIndex], a[0]];
                    }
                    break;
                }
            }
            var numMovingElems = 0;
            while (numMovingElems < a.length - 1) {
                var movingElem = a[1];
                for (var i = a.indexOf(movingElem) + 1; i < a.length; i++) {
                    [a[a.indexOf(movingElem)], a[i]] = [a[i], a[a.indexOf(movingElem)]];
                    if (!permutations.includes(a)) {
                        counter += 1;
                        permutations.push([...a]);
                    }
                    if (isSorted(a)) {
                        return counter;
                    }
                }
                numMovingElems += 1;
            }
        }
    }
}

function isSorted(arr) {
    var sorted = true;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            sorted = false;
            return sorted;
        }
    }
    return sorted;
}
