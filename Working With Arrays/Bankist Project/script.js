'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

let accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (el, index) {
    const type = el > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    }  ${type} </div>
          <div class="movements__value">${el}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//Slice Method

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// console.log(arr.slice(2));
// //bisa juga negative number
// console.log(arr.slice(-1)); //index terakhir
// console.log(arr.slice(1, -2)); //dari index satu sampe 2 terakhir

// //SPLICE
// const arr2 = [1, 2, 3, 4, 5, 6];
// console.log(
//   arr2.splice(1, 2)
// ); /* memangkas dari index ke 1 dan 2 nilai array yang ingin dihpaus  */
// console.log(arr2); /* hasil akhir menjadi 1,4,5,6  */

//reverse

/* END SECTION 1 */

/* The New At Method */

const arr = [1, 2, 3];

// console.log(arr.at(0)); //mengambil data pada index ke - 0
// console.log(arr.at(-1)); //dengan at kita bisa menggunakan -1 untuk mengambil index terakhir

/*  For Each Method  */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [index, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`You deposited  ${movement}`);
//   } else {
//     console.log(`You withdrew ${-1 * movement}`);
//   }
// }
// console.log(`=========With Foreach=========`);

// With forEach array

// movements.forEach(function (movement, index, fullArray) {
//   if (movement > 0) {
//     console.log(`You deposited  ${movement}`);
//   } else {
//     console.log(`You withdrew ${-1 * movement}`);
//   }
// });

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
// /* ForEach for Maps */

// currencies.forEach(function (value, key, map) {
//   console.log(`${value} memiliki key berupa ${key}`);
// });

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(el => el[0])
      .join('');
  });
  return accs;
};

accounts = createUsername(accounts);

console.log(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((ac, mov) => ac + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(el => el > 0)
    .reduce((acc, el) => acc + el, 0);
  labelSumIn.textContent = income;
  const outcome = acc.movements
    .filter(el => el < 0)
    .reduce((acc, el) => acc + el, 0);
  labelSumOut.textContent = -1 * outcome;

  const interest = acc.movements
    .filter(el => el > 0)
    .map(el => (el * acc.interestRate) / 100)
    .filter(el => el >= 1)
    .reduce((accu, el) => accu + el, 0);
  labelSumInterest.textContent = `${interest}`;
};

const updateUI = function (acc) {
  //Display Movements
  displayMovements(acc.movements);
  //display Balance
  calcDisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc);
};

let currentAccount;
// Event handler login
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Welcome Message
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Update the UI

    //clear fields
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

//Implementing Transfer

btnTransfer.addEventListener('click', function (ev) {
  ev.preventDefault();
  const amount = Number(inputTransferAmount.value);
  console.log(amount);
  const receiver = accounts.find(acc => acc.username === inputTransferTo.value);

  if (
    receiver &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiver?.username !== currentAccount.username
  ) {
    console.log('valid');
    receiver.movements.push(amount);
    currentAccount.movements.push(-amount);
    updateUI(currentAccount);
  }

  inputTransferTo.value = inputTransferAmount.value = '';
});

btnClose.addEventListener('click', function (el) {
  el.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    inputCloseUsername.value = inputClosePin.value = '';
    containerApp.style.opacity = 0;
  }
});

btnLoan.addEventListener('click', function (el) {
  el.preventDefault();
  const amountLoan = Number(inputLoanAmount.value);

  if (
    amountLoan > 0 &&
    currentAccount.movements.some(mov => mov >= (amountLoan * 10) / 100)
  ) {
    //Add Movmements
    currentAccount.movements.push(amountLoan);

    //UpdateUI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});
