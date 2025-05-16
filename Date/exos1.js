function calculateAge(birthDate) {
  const birth = new Date(birthDate);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();

  const actualMonth = today.getMonth();
  const actualDay = today.getDate();
  const birthMonth = birth.getMonth();
  const dayBirth = birth.getDate();

  if (
 actualMonth < birthMonth ||
     (actualMonth === birthMonth && actualMonth < dayBirth)
  ) {
    age--;
  }
  return age;
}

console.log(calculateAge('1990-05-15'))   