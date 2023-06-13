// REGULAR EXPRESSIONS. MEMORY MANAGEMENT

// 📀💿💿💿

// 8-1.
// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні.
// Приклад роботи:
// upperCase('regexp');
// "String's not starts with uppercase character"
// upperCase('RegExp');
// "String's starts with uppercase character"
const checkUpperCase = function (str) {
  const rexExp = /^[A-Z]/;
  if (rexExp.test(str)) {
    return "String's starts with uppercase character";
  } else {
    return "String's not starts with uppercase character";
  }
};

// 8-2.
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються
// всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true
const checkEmail = function (email) {
  const rexExp =
    /(^\w+[!#$%&'*+-/=? ^_`{|}~]?\w+)\@(\w+([\.-]?\w+)\.(\w{2,6})+$)/;
  if (rexExp.test(email)) {
    return "E-mail is valid";
  } else {
    return "E-mail is not valid";
  }
};

// 8-3.
// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”

const changeString = function (string) {
  return string.replace(/(\w+) (\w+)/, "$2, $1");
};

// 8-4.
// Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
const checkNumberPhone = function (numberPhone) {
  const rexExp = /\d{4}[-]\d{4}[-]\d{4}[-]\d{4}/;

  if (rexExp.test(numberPhone)) {
    return "The bank card number is valid";
  } else {
    return "The bank card number is not valid";
  }
};

// 8-5.
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Вимоги:
// •  Цифри (0-9).
// •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
// •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//  •  Символ “-” не може повторюватися.
const validEmail = function (email) {
  const rexExp = /^\w+[\-]?\w+\@(\w+([\-]?\w+)\.(\w{2,6})$)/;
  if (rexExp.test(email)) {
    return "Email is correct!";
  } else {
    return "Email is not correct!";
  }
};

// console.log(validEmail("my_mail@gmail.com"));
// "Email is correct!"
// console.log(validEmail("#my_mail@gmail.com"));
// "Email is not correct!"
// console.log(validEmail("my_ma--il@gmail.com"));
// "Email is not correct!"

// 8-6.
// Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа,
// номер не може бути першим.
// Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
// Приклад роботи:
// checkLogin('ee1.1ret3');
// true
// //1.1, 3


const checkLogin = function (login) {
  const rexExp = /^[A-Za-z][a-zA-Z\d.]{1,9}$/;
  const numbers = login.match(/[\d]*\.[\d]+/g);
  const loginValid = rexExp.test(login);
  return { loginValid, numbers };
};
// checkLogin('ee1*1ret3');
// false
//1, 1, 3
1;
