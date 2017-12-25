// import { ErrorService } from './../errors/error.service';
import {Http,Response,Headers} from "@angular/http";
import { Injectable} from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { Student } from '../models/student';

@Injectable()
export class StudentService {
    private students:Student[] = [];
    private student:Student;
    // messageIsEdit = new EventEmitter<Message>();
    
    constructor(private http: Http) {
    
    } 
    addStudent(student: Student){
        // this.messages.push(message); // just pushing to the front end, the post will actually persist the data to the dB

        const body = JSON.stringify(student);
        const headers = new Headers({
            'Content-Type' : 'application/json'
        });
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('https://dojobase-deployment.herokuapp.com/student' + token,body,{headers: headers})
            .map((response: Response) => {
                const result = response.json();
                // const student = new Student(result.obj.content,'Dummy',result.obj._id,null);
                const student = new Student(result.obj.firstName,result.obj.lastName,result.obj.gender,result.obj.dateOfBirth,result.obj.streetAddress,
                result.obj.city,result.obj.zipCode,result.obj.contactNumber,result.obj.email,result.obj.avatarSrc,result.obj._id, result.obj.createdBy.firstName, result.obj.createdBy._id);
                this.students.push(student);
                return student;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });// request not sent as yet, only sets up an observable
    }
    getStudents(){
        return this.http.get('https://dojobase-deployment.herokuapp.com/student')
            .map((response:Response) => {
                const students = response.json().obj;
                let transformedStudents:Student[] = [];
                for (let student of students) {
                    transformedStudents.push(
                        new Student(
                            student.firstName,
                            student.lastName,
                            student.gender,
                            student.dateOfBirth,
                            student.streetAddress,
                            student.city,
                            student.zipCode,
                            student.rank,
                            student.contactNumber,
                            student.email,
                            student.avatarSrc,
                            student._id,
                            student.createdBy.firstName,
                            student.createdBy._id
                            ));
                }
                this.students = transformedStudents;
                return transformedStudents;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }
    getStudent(studentId : string) {
        return this.http.get('https://dojobase-deployment.herokuapp.com/student/' + studentId).map((response:Response) =>{
            const student = response.json().obj;
            let transformedStudent:Student = new Student(
                student.firstName,
                student.lastName,
                student.gender,
                student.dateOfBirth,
                student.streetAddress,
                student.city,
                student.zipCode,
                student.rank,
                student.contactNumber,
                student.email,
                student.avatarSrc,
                student._id,
                student.createdBy.firstName,
                student.createdBy._id
            );
            this.student = transformedStudent;
            return this.student;
        })
        .catch((error: Response) => {
            return Observable.throw(error.json());
        });

    }
    deleteStudent(student: Student) {
        this.students.splice(this.students.indexOf(student),1);
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.delete('https://dojobase-deployment.herokuapp.com/student/' + student.studentId + token)
        .map((response:Response) => response.json())
        .catch((error: Response) => {
            return Observable.throw(error.json());
        });
    }

    updateStudent(student:Student){
        const body = JSON.stringify(student);
        const headers = new Headers({
            'Content-Type' : 'application/json'
        });
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.patch('https://dojobase-deployment.herokuapp.com/student/' + student.studentId + token,body, {headers : headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
        
    }
}