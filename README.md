# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The runtime complexity of my algorithm is O(n!).  A best case input would be an array that is already sorted, which would have a worst-case runtime of O(n).  A worst case input would be an array that is in reverse order.  I believe the complexity would get worse if I generated permutations randomly without memory, as it would be possible for the algorithm to never return anything, as the same permutation could continue to be generated since there would be no way to keep track of the already generated permutations.

I added comments to my code stating what I believe the runtime for each line/function is.

-----

I worked on this assignment with Cole (Nathanael), Ashlyn, and Megan, and I recieved help from Ali and ChatGPT.  Cole, Ashlyn, Megan and I discussed the logic of the algorithm (like using a pillar element and moving all other elements to generate the different permutations).  Ali first helped me by giving me the idea of storing the different permutations in an array of lists in order to determine when to increase the counter.  He then helped me adjust my code so that the test would pass.  I first wrote code that has the else statement that is commented out.  When testing it on my own, it worked fine, but when I tried committing it, the test would run infinitely.  So, Ali helped me figure out what needed to be changed so that the test would pass.  Regarding ChatGPT, I used it to help me figure out why certain sections of my code weren't working correctly.  For example, I asked it why the pillar element wasn't being swapped correctly so that it would be moved to the beginning of the array.  I originally used the line [a[0], a[a.indexOf(pillar)]] = [a[a.indexOf(pillar)], a[0]], and ChatGPT mentioned that I should use the variable pillarIndex to store the index and use that to swap instead of trying to swap using a.indexOf(pillar).

When determining the runtime, I recieved help from ChatGPT.  I asked it for help when determining the runtime of some of the complicated lines in my code, such as Array.prototype.push.apply(a, allPerms[i]) and the line that contains the recursive call to getAllPermutations.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models.  All of the work is my own, except where stated otherwise.  I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
