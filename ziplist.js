/**
 * Been having issues when I create a new repository for github so I have been using a new one.
 * Couldn't figure out how to fix this issue
 */
function zipList(list1, list2) {
  const list3 = [];
  for (let i = 0; i < list1.length; i++) {
    list3.push(list1[i], list2[i]);
  }
  return list3;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const a = ['a', 'b', 'c'];
const b = [1, 2, 3];

console.log(zipList(a, b));
console.log(zipListTheSimpleWay(a, b));
