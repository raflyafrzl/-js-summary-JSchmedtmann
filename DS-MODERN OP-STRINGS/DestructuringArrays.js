
//Destructuring
// Digunakan untuk memecah/mendestruksi sebuah array atau objek yang sudah kompleks, menjadi lebih kecil 

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) { 
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; 
    }


}


//tanpa destructuring 

const arr  = ["Muhammad", "Rafly","Afrizal" , "Pratama"]; 
const a = arr[0]; 
const b = arr[1]; 
const c = arr[2];
const d = arr[3]; 


//Destructuring assignment menggunakan [variable1,var2,var3,dst ] = namaArray; 
//Dengan distructuring 



//==============Mengambil sebagian saja dari obj restaurant=================

//Untuk menskip nilainya maka cukup tambahkan kategori kosong contoh: a, ,b
let [main, , secondary] = restaurant.categories;
console.log(main,secondary);// Italian Vegetarian 

//Menukar nilai tanpa menggunakan variable temp 
[main , secondary] = [secondary, main];
console.log(main,secondary); //Vegetarian Italian




//Dengan destructuring kita dapat memiliki function return array lalu langsung mendestruct nya hasilnya ke 
//variable yang berbeda, jadi dapat mereturn multiple value/berbagai nilai 

const [starter,mainCourse]  = restaurant.order(2,0); 
console.log(starter, mainCourse);


//Nested Destructuring 

const nestedArr = [1,2,[3,4]]; 

const [one, ,[oneOne, oneTwo]] = nestedArr; 

console.log(one, oneOne, oneTwo); 


//Default Values Destructuring 
//Terjadi ketika nilai array tidak ada/tidak didapatkan maka akan mengganti dengan nilai default 


const [p=1,q=2, x = 10] = [4,4]; 
console.log(p,q,x); //1,2,10. Karena panjang array hanya 2 



