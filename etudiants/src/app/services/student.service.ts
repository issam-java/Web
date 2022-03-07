import {Subject} from 'rxjs/Subject';

export class StudentService{

  studentsSubject = new Subject<any[]>();

    private students =[
        {
          id: 1,
          name:'Henri',
          status: 'present'
        },
        {
          id: 2,
          name:'Louis',
          status:'absent'
        },
        {
          id: 3,
          name:'Philippe',
          status:'present'
        }
      ];
      constructor(  ){}

      switchOnAll(){
          for(let student of this.students){
              student.status = 'present';
          } 
          this.emitStudentSubject;
      }
      switchOffAll(){
          for(let student of this.students){
              student.status ='absent';
              this.emitStudentSubject;
          }
          
      }
      switchOnOne(i:number){
          this.students[i].status='present';
          this.emitStudentSubject;
      }
      switchOffOne(i:number){
          this.students[i].status='absent';
          this.emitStudentSubject;
      }
      getStudentById(id:number):any{              // on a ajouter any 
        const student =this.students.find(
          (s)=>{
            return s.id === id;
          }
        );
        return student;
      }  
      
      emitStudentSubject() {
        this.studentsSubject.next(this.students.slice());
       }
       
       addStudent(name: string, status: string) {
        const studentObject = {
        id: 0,
        name: '',
        status: ''
        };
        studentObject.name = name;
        studentObject.status = status;
        studentObject.id = this.students[(this.students.length - 1)].id + 1;
        this.students.push(studentObject);
        this.emitStudentSubject();
       }
       
}