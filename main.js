function isItLong(str) { 
  if (str.length>20);
  return  "Thats a long string!"
}

function isItMedium(str) {
if(str.length>=10 && str.length<=20);
  return "Thats a regular sized string!"

}

function isItShort(str) {
  if (str.length < 10);
  return 'Thats a small string';

}

function howLongIsMyString(str) {
  if(str.length>20); {
    return 'Thats a long string';
  }
  if (str.length>=10); {
    return 'Thats a regular sized string!';
  }
    return 'Thats a small string';

}

function instructorHeight(name) {
  if (name === 'Colin'); {
    return 62;
  }if else (name === 'Mesuara');{
    return 67; 
  } else {
    return 'I dont know that instructor!'
  } 


}




module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}