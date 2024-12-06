function permutationSort(a) {
    var counter = 1;
    var permutations = [];
    permutations.push([...a]);
    console.log("permutations = ", permutations);
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
        } else {
            return counter;
        }
        
    
    // else {
    //     var pillarArr = [];
    //     while (pillarArr.length < a.length) {
    //         for (i = 0; i < a.length; i++) {
    //             var pillar = a[i];
    //             console.log("pillar = ", pillar);
    //             let paFound = false;
    //             for (j = 0; j < pillarArr.length; j++) {
    //                 if (pillarArr[j] == pillar) {
    //                     paFound = true;
    //                     break;
    //                 }
    //             }
    //             if (!paFound) {
    //                 pillarArr.push(pillar);
    //                 var pillarIndex = a.indexOf(pillar);
    //                 console.log("pillarIndex = ", pillarIndex);
    //                 if (pillarIndex != 0) {
    //                     [a[0], a[pillarIndex]] = [a[pillarIndex], a[0]];
    //                     console.log("a adjusted for pillar = ", a);
    //                 }
    //                 break;
    //             }
    //             // if (!pillarArr.includes(pillar)) {
    //             //     pillarArr.push(pillar);
    //             //     var pillarIndex = a.indexOf(pillar);
    //             //     console.log("pillarIndex = ", pillarIndex);
    //             //     if (pillarIndex != 0) {
    //             //         [a[0], a[pillarIndex]] = [a[pillarIndex], a[0]];
    //             //         console.log("a adjusted for pillar = ", a);
    //             //     }
    //             //     break;
    //             // }
    //         }
    //         console.log("pillarArr = ", pillarArr);
    //         var numMovingElems = 0;
    //         while (numMovingElems < a.length - 1) {
    //             //don't use set, use array
    //             //maybe use helper function that generates different permutations
    //             //to keep track of permutations, use an array of lists
    //             var movingElem = a[1];
    //             console.log("movingElem = ", movingElem);
    //             for (var i = a.indexOf(movingElem) + 1; i < a.length; i++) {
    //                 console.log("i = ", i);
    //                 console.log("a.indexOf(movingElem) = ", a.indexOf(movingElem));
    //                 [a[a.indexOf(movingElem)], a[i]] = [a[i], a[a.indexOf(movingElem)]];
    //                 console.log(a);
    //                 let permFound = false;
    //                 for (j = 0; j < permutations.length; j++) {
    //                     if (JSON.stringify(permutations[j]) === JSON.stringify(a)) {
    //                         permFound = true;
    //                         break;
    //                     }
    //                 }
    //                 if (!permFound) {
    //                     counter += 1;
    //                     permutations.push([...a]);
    //                 }
    //                 console.log("counter = ", counter);
    //                 console.log("permutations = ", permutations);
    //                 if (isSorted(a)) {
    //                     return counter;
    //                 }
    //                 //console.log(a);
    //             }
    //             numMovingElems += 1;
    //             console.log("numMovingElems = ", numMovingElems);
    //         }
    //     }


    // }
    
    } else {
        var allPerms = getAllPermutations(a);

        for (var i=0; i< allPerms.length; i++){
            if (i!=0) {
                counter++;

            }
            if (isSorted(allPerms[i])){
                a.length = 0;
                Array.prototype.push.apply(a, allPerms[i]);
                return counter;
            }
        }

        return counter;
    }
    

}

function getAllPermutations(arr) {
    if (arr.length === 0) {
        return [[]];
    }
    
    if (arr.length === 1) {
        return [arr];
    }

    var results = [];

    for (var i = 0; i < arr.length; i++) {
        var first = arr[i];
        var rest = arr.slice(0, i).concat(arr.slice(i + 1));

        var subPerms = getAllPermutations(rest);
        for (var j = 0; j < subPerms.length; j++) {
            results.push([first].concat(subPerms[j]));
        }
    }
    return results;
}

function isSorted(arr) {
    // var sorted = true;
    // if (arr.length > 1) {
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
                return false;
                
        }
    }
    return true;
}

let a = [4, -2, 9, 0, 1];
//console.log(isSorted(a));
console.log(permutationSort(a));
