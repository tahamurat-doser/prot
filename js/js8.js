ad = "taha"
console.log(ad);

/* a = 'JavaScript' // bir değişkeni let veya const anahtar kelimeleri olamadan tanımlamako değişkeni global hale getirir ve geçerli dosya içerisinde her yerden erişilebilir.

b = 10  */// bu gloabl scope olarak tanımlanmıştır ve dosya içerisinde her yerden erişilebilir.
/* function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) */
/* 
let a = 'JavaScript' // bu dosyanın herhangi bir yerinde erişilebilecek global bir kapsamdır
let b = 10 // bu da dosyanın herhangi bir yerinde erişilebilecek global bir kapsamdır
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, erişilebilir
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b) */
let name = "Taha"
let surname ="Döşer"
function adSoyad(){
    console.log(name, surname);
    if (true){
        let name = "Yasin"
        let surname ="Akay"
        console.log(name, surname);
    }
    console.log(name, surname);
}
adSoyad()

function letsLearnScope() {
    // you can use let or const, but gravity is constant I prefer to use const
    const gravity = 9.81
    console.log(gravity)
  
  }
  letsLearnScope()
  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    isMarried: true,
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
      },
      'phone number': '+3584545454545',
      getFullName2: () => `${person.firstName} ${person.lastName}`
    }
  
  console.log(person)
  console.log(person.firstName);
  console.log(person.age);
  console.log(person.lastName);

  console.log(person["age"]);
  console.log(person["country"]);
  console.log(person["phone number"]);
 /*  console.log(person."phone number"); */
 
 let keyName = ""
 /* keyName = prompt("istediğiniz değeri girinixz") */

 console.log(person[keyName]);
 console.log(person.getFullName());
 console.log(person.getFullName2());

 person.nationality = "Ethiopian"
 console.log(person);
 person.title = "teacher"

 person.skills.push("meteor")
 person.skills.push("Sass")
 person.skills.push("swift, php")

 person.getPersonInfo = function() {
    let skillsWitoutLastSkill = this.skills.splice(0, this.skills.length-1).join(", ")
 }

const copyPerson = Object.assign({}, person)
console.log(copyPerson);

const keys = Object.keys(copyPerson)
console.log(keys);
len = keys.length
console.log(len);  

const values = Object.values(copyPerson)
console.log(values);

console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("city"));
console.log(copyPerson.hasOwnProperty("HTML"));

const keysAndValues = Object.entries(person)
console.log(keysAndValues);