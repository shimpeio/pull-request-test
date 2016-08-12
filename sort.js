var sortNumber = function (number) {
   number.sort(function (a, b) {
       if (a === b) {
=======
       if (a == b) {
>>>>>>> origin/master
           return 0;
       }
       return a < b ? -1 : 1;
   });
};

var number = [19, 3, 81, 1, 24, 21];
sortNumber(number);
<<<<<<< HEAD
console.log(number);ar number = [19, 3, 81, 1, 24, 21];
=======
console.log(number);var number = [19, 3, 81, 1, 24, 21];
>>>>>>> origin/master
console.log(number);
