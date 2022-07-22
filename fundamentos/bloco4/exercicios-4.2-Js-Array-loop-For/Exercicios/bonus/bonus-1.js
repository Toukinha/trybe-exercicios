let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiple = [];
let sla = 0;




for (let index = 0; index < numbers.length; index++) {
        
    if (index + 1 < numbers.length) {
        multiple.push(numbers[index] * numbers[index + 1]);
        } else {
            multiple.push(numbers[index] * 2);
        }

        console.log(multiple[index]);
}
