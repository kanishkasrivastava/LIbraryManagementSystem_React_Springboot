import axios from 'axios';
const STUDENT_API_BASE_URL="http://localhost:8080/api/v1/students";

class StudentService
{
    getStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    }
    createStudents(student)
    {
        return axios.post(STUDENT_API_BASE_URL,student);
    }
    getStudentsById(studentId)
    {
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId);
    }
    updateStudents(student,studentId)
    {
        return axios.put(STUDENT_API_BASE_URL + '/' + studentId,student);
    }
    deleteStudents(studentId)
    {
        return axios.delete(STUDENT_API_BASE_URL+'/'+studentId);
    }
}
const studentService=new StudentService();
export default studentService;