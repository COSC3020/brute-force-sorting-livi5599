function permutationSort(a) { //O(n!)
    var counter = 1; //O(1)
    var permutations = []; //O(1)
    permutations.push([...a]); //O(n)
    if (a.length == 0 || a.length == 1) { //O(1)
        return counter; //O(1)
    }
    else if (isSorted(a)) { //O(n)
        return counter; //O(1)
    }
    else if (a.length == 2) { //O(n)
        if (!isSorted(a)) { //isSorted runtime = O(n) -> O(n) + O(n) = O(n)
            a.reverse(); //O(n)
            counter += 1; //O(1)
            return counter; //O(1)
        } else { //O(1)
            return counter; //O(1)
        }
    }
    else {
        var allPerms = getAllPermutations(a); //O(n!)

        for (var i=0; i < allPerms.length; i++){ //O(n!)
            if (i!=0) { //O(1)
                counter++; //O(1)
            }
            if (isSorted(allPerms[i])){ //O(n)
                a.length = 0; //O(1)
                Array.prototype.push.apply(a, allPerms[i]); //O(n)
                return counter; //O(1)
            }
        }
        return counter; //O(1)
    }
}

function getAllPermutations(arr) { //O(n!)
    if (arr.length === 0) { //O(1)
        return [[]]; //O(1)
    }
    
    if (arr.length === 1) { //O(1)
        return [arr]; //O(1)
    }

    var results = []; //O(1)

    for (var i = 0; i < arr.length; i++) { //runs n times
        var first = arr[i]; //O(1)
        var rest = arr.slice(0, i).concat(arr.slice(i + 1)); //O(n^2)

        var subPerms = getAllPermutations(rest); //O(n^3)
        for (var j = 0; j < subPerms.length; j++) { //runs (n-1)! times -> O(n!)
            results.push([first].concat(subPerms[j])); //O(n)
        }
    }
    return results; //O(1)
}

function isSorted(arr) { //O(n)
    for (i = 0; i < arr.length - 1; i++) { //O(n)
        if (arr[i] > arr[i+1]) {
                return false; //O(1)
        }
    }
    return true; //O(1)
}
