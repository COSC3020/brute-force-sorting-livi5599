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
        if (!isSorted(a)) {
            a.reverse();
            counter += 1;
            return counter;
        }
        else {
            return counter;
        }
    }
    else {
        var pillarArr = [];
        while (pillarArr.length < a.length) {
            for (i = 0; i < a.length; i++) {
                var pillar = a[i];
                let paFound = false;
                for (j = 0; j < pillarArr.length; j++) {
                    if (pillarArr[j] == pillar) {
                        paFound = true;
                        break;
                    }
                }
                if (!paFound) {
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
                    let permFound = false;
                    for (j = 0; j < permutations.length; j++) {
                        if (permutations[j] == a) {
                            permFound = true;
                            break;
                        }
                    }
                    if (!permFound) {
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
    if (arr.length > 1) {
        for (i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                sorted = false;
                return sorted;
            }
        }
    }
    return sorted;
}
