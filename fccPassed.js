function hasPassingGrade(score) {
  var grade = getGrade(score);
  if (grade != "F") {
    return true
  } else {return false}
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
