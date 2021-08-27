const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] };
// console.log(data.result[0].userName.name);

const p=[1,2,3];
//  const q=p.__?__(  n=> Math.pow(n, 3));

const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`
console.log(bondCode);

/* fetch(url)
.then(res=>res.json())
.then(data => console.log(data)

 */


// function async loadData(){

    const res = await fetch(url);
     const data = await res.json();
      console.log(data);
    
    // }
    loadData();
    
    
