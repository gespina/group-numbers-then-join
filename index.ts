// Import stylesheets
import "./style.css";

const data = [2, 3, 4, 8, 11, 12, 34, 35, 36, 37];

let result = data
  .reduce((acc, cur, idx, arr) => {
    let curArray = acc.pop() || [];
    let nextVal = arr[idx + 1] || 0;
    curArray.push(cur);
    acc.push(curArray);
    if (nextVal - cur !== 1) {
      acc.push([]);
    }
    return acc;
  }, [])
  .filter((x: any[]) => x.length > 0)
  .map((arr: any[]) =>
    arr.length > 1 ? `${arr[0]}-${arr[arr.length - 1]}` : `${arr[0]}`
  );

console.log(result);
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
