let a=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    console.log(a[i]);
}

let b=a.map(n=n*2);
console.log(b);
let c=a.filter(n=n>3);
console.log(c)
let d=a.reduce((acc,n=acc+n));

