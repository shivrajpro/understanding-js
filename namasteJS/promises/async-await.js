const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ONE -Promise received value!!");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("TWO - Promise received value!!");
  }, 5000);
});

async function handlePromise() {
  console.log("helllo world");
  const val = await p1; //await can only be used in an async function
  console.log("namaste js");
  console.log(val);

  const val2 = await p2; //await can only be used in an async function
  console.log("namaste js 2");
  console.log(val2);
}

handlePromise();

async function getData() {
  p1.then((res) => console.log(res));
  console.log("namaste js");
}

// getData();
/*
const p = new Promise((resolve, reject)=>{
    resolve("Promise received value!!");
})

// always returns a promise
async function getData() {
  return p;
  return "NamasteJS"; //will wrap it inside a promise and return it
}

const dataPromise = getData();
console.log(dataPromise);

dataPromise.then((res) => console.log(res));
*/
