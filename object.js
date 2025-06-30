const student = {
  name: "Bhavani",
  age: 20,
  id: "2311it010235",
  dept: "Information Technology",
};
const{$name,age,id,dept}=student
console.log(student);

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`${this.name}`);
    }
}
const c = new Student("Bob", 28);
c.greet();


function change(){
    document.getElementById("p1").innerText="hello";
    document.querySelector(".h1").innerHTML +="<button>h1</button>";
}

function Show(){
    let uname=document.getElementById("uname").value;
    document.getElementById("un").innerText=uname;
}

