export default function getStudentsByLocation(students, city) {
  return students.filter((arr) => arr.location === city);
  // grabs/filters only the ones matching city
}
