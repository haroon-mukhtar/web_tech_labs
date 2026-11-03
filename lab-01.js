// Task 1
console.log("Task 1");
function addition(a, b) {
    return a + b;
}
console.log(addition(1, 2));


// Task 2
console.log("Task 2");
function bitwiseAND(a, b) {
    return a & b;
}
function bitwiseOR(a, b) {
    return a | b;
}
function bitwiseXOR(a, b) {
    return a ^ b;
}
console.log(bitwiseAND(5, 3));
console.log(bitwiseOR(5, 3));
console.log(bitwiseXOR(5, 3));


// Task 3
console.log("Task 3");
function addUp(a) {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum += i;
    }
    return sum;
}
console.log(addUp(4));


// Task 4
console.log("Task 4");
function progressBar(a) {
    let filled = Math.floor(a / 10);
    let str = "";
    for (let i = 0; i < 10; i++) {
        if (i < filled) {
            str += "#";
        } else {
            str += "-";
        }
    }
    return str;
}
console.log(progressBar(10));
console.log(progressBar(40));
console.log(progressBar(49));


// Task 5
console.log("Task 5");
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
console.log(minMax([1, 2, 3, 4, 5, 6]));


// Task 6
console.log("Task 6");
function calculateRepoStats(repos) {
    let stars = repos.map(function (repo) {
        return repo.stars;
    });

    let max = Math.max(...stars);
    let min = Math.min(...stars);
    let total = stars.reduce(function (sum, s) {
        return sum + s;
    }, 0);

    return {
        maxStars: max,
        minStars: min,
        avgStars: Math.floor(total / stars.length),
        varianceScore: Math.abs(max - min)
    };
}
const repos = [
    { name: 'repo-a', stars: 12 },
    { name: 'repo-b', stars: 45 },
    { name: 'repo-c', stars: 3 }
];
console.log(calculateRepoStats(repos));



// Task 7
console.log("Task 7");
function calculateFinalPrice(basePrice, taxRate, discountPercentage) {

    let discounted = basePrice * (1 - discountPercentage / 100);
    discounted = Math.round(discounted * 100) / 100;

    let tax = discounted * (taxRate / 100);
    tax = Math.round(tax * 100) / 100;

    let finalPrice = Math.round((discounted + tax) * 100) / 100;

    let loyaltyPoints = Math.ceil(finalPrice);

    return {
        finalPrice: finalPrice,
        loyaltyPoints: loyaltyPoints
    };
}
console.log(calculateFinalPrice(300, 10, 10));


// Task 8
console.log("Task 8");
function paginateData(items, pageNumber, pageSize = 5) {
    let totalPages = Math.ceil(items.length / pageSize);
    let start = (pageNumber - 1) * pageSize;
    let end = start + pageSize;

    return {
        data: items.slice(start, end),
        currentPage: pageNumber,
        totalPages: totalPages,
        hasNext: pageNumber < totalPages,
        hasPrev: pageNumber > 1
    };
}
const allProducts = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Desk', 'Chair', 'Webcam', 'Headphones'];
const result = paginateData(allProducts, 2, 3);
console.log(result);
