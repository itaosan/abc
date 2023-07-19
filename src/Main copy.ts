import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

type Product = { price: number; feature: number[] };

function isStrictlySuperior(product_i: Product, product_j: Product) {
    return (
        product_i.price >= product_j.price &&
        product_i.feature.every((v) => product_j.feature.includes(v)) &&
        (product_i.price > product_j.price || !product_i.feature.every((v) => product_j.feature.includes(v)))
    );
}

function hasSuperiorPair(products: Product[]) {
    return products.some((product_i) => {
        return products.some((product_j) => {
            // console.log(
            //     `product_i:price:${product_i.price} feature:${product_i.feature} product_j:price:${
            //         product_j.price
            //     } feature:${product_j.feature} return:${isStrictlySuperior(product_i, product_j)}`
            // );
            return isStrictlySuperior(product_i, product_j);
        });
    });
}

const [N, M] = readLine().split(" ").map(Number);

let products: Product[] = [];

for (let i = 0; i < N; i++) {
    let lines = readLine().split(" ").map(Number);
    const price = lines[0];
    const K = lines[1];
    const feature = lines.slice(2, 2 + K).map(Number);
    // console.log(`price:${price} feature:${feature}`);
    products.push({ price, feature });
}

console.log(hasSuperiorPair(products) ? "Yes" : "No");
