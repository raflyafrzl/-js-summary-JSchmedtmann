//class declaration
class PersonCl {
  constructor(fullname, birthYear) {
    //this.fullname itu akan memanggil method setter nya(sifatnya seperti property karena method setter)
    this.fullname = fullname;
    this.birthYear = birthYear;
  }
  //setelah dipanggil di constructor
  //maka parameter "name" itu akan berisikan variable "fullname" dari constructor
  set fullname(name) {
    //pada bagian sini kenapa menggunakan "this._fullname, karena kalau menggunakan this.fullname maka akan terjadi rekursif"
    //karena itu memanggil method setter berkali2 dengan mengassign nilainya kembali dengan "name"
    if (name.includes(" ")) this._fullname = name;
  }
  //kita memanggil method get dengan fullname disini tanpa perlu mengisi atau mengassign nilainya
  get fullname() {
    return this._fullname;
  }
}

const rafly = new PersonCl("Rafly Afrizal", 2001);

console.log(rafly.fullname);

//Setter and getter

//Ringkasan

//Class itu sebenarnya sama seperti sebuah function spesial (terjadi dibelakang layar JS)
// Jika kita membuat sebuah method pada lingkup class, maka meethod tersebut akan masuk kedalam prototype dari class tersebut
//bukan ke object yang jadi instansiasi dari sebuah class nya

//======================GETTER AND SETTER===============================

//1. Pada Object literal
const account = {
  owner: "Jonas",
  movements: [200, 530, 100, 400],
  get latest() {
    return this.movements.slice(-1).pop();
  },
};

// console.log(account);
