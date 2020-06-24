// Import stylesheets
import "./style.css";

const data: number[] = [2, 3, 4, 8, 11, 12, 34, 35, 36, 37];

const orig = [
  true,
  false,
  false,
  true,
  true,
  false,
  false,
  true,
  false,
  true,
  true,
  false,
  false,
  false,
  false
].reduce((acc, cur, idx) => {
  !cur ? acc.push(idx + 1) : null;
  return acc;
}, []);

// debugger;
let result = orig
  .reduce((acc, cur, idx, arr) => {
    let curArray = acc.pop() || [];
    let nextVal = arr[idx + 1] || 0;
    curArray.push(cur);
    acc.push(curArray);
    if (nextVal !== 0 && nextVal - cur !== 1) {
      acc.push([]);
    }
    return acc;
  }, [])
  .map((arr: any[]) =>
    arr.length > 1 ? `${arr[0]}-${arr[arr.length - 1]}` : `${arr[0]}`
  )
  .join(", ");

console.log(result);
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>${result}</h1>`;
