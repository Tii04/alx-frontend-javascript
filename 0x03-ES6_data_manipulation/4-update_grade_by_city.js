export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((students) => students.location === city)
    .map((students) => {
      const grades = newGrades.find((grade) => grade.studentId === students.id);
      const grade = grades ? grades.grade : 'N/A';
      return { ...students, grade };
    });
}
