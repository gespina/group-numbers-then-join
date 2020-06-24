// Import stylesheets
import './style.css';

const data = [2, 3, 4, 8, 11, 12, 34, 35, 36, 37];

let result = data.reduce( (acc, cur, idx, arr) => {
  // debugger;
  let curArray = acc.pop() || [];
  // console.log(curArray)
  let nextVal = arr[idx + 1] || 0;
  if(nextVal - cur === 1){
    curArray.push(cur);
    acc.push(curArray);
  } else {
    curArray.push(cur)
    acc.push(curArray);
    acc.push([])
  }
  return acc;
}, [] )
.filter(x => !!x)
.map( (arr:any[]) => arr.length > 1 ? `${arr[0]}-${arr[arr.length-1]}` : `${arr[0]}`)

console.log(result)
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;