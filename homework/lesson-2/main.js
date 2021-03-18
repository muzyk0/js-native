var arr = [1, 2, 3, 7, 6, 9];
let num = 0;

for (let i = 0; i < arr.length; i++) {
    num += arr[i]
}
num = num / arr.length
console.log(num)

document.write(arr.join(' '))
