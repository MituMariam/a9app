import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private router:Router){}
  ngOnInit(): void {
  }
Register(regForm: any){
  console.log(regForm)
}
student(){
  this.router.navigate(['/student'])
}


//   dob = new Date(1993,2,09);
//   Students:any[]=[
//     {
//       'name':'mitu'
//     },
//     {
//       'name':'bindu'
//     },
//     {
//       'name':'jhorna'
//     }
//   ]


//   Employees: any[];
//   constructor(){
//     this.Employees = [
//       {
//         emp_id:1,
//         name:'hanif',
//         gender:'male',
//         age:25,
//         dept:'IT'

//       },
//       {
//         emp_id:2,
//         name:'rink',
//         gender:'female',
//         age:25,
//         dept:'IT'

//       },
//       {
//         emp_id:3,
//         name:'nishad',
//         gender:'male',
//         age:35,
//         dept:'IT'

//       }
//     ];
//   }
//   getmoreemployees():void{
//     this.Employees = [
//       {
//         emp_id:4,
//         name:'hanif',
//         gender:'male',
//         age:25,
//         dept:'IT'

//       },
//       {
//         emp_id:5,
//         name:'rink',
//         gender:'female',
//         age:25,
//         dept:'IT'

//       },
//       {
//         emp_id:6,
//         name:'nishad',
//         gender:'male',
//         age:35,
//         dept:'IT'

//       }
//     ];
//   }
//   trackbyemployee_id(index:number,employee:any):string{
//     return employee.emp_id;
//   }



//   Countrydetails:any[]=[
//     {
//       'contry':'bd',
//       'people':[
//         {
//           'name':'mitu',
//           'gender':'female',
//         }
//       ]
//     },
//     {
//       'contry':'vatican',
//       'people':[
//         {
//           'name':'titu',
//           'gender':'male',
//         }
//       ]
//     },
//   ];


//   getColor(people){
// switch(people){
//   case 'name':
//     return 'green';
//     case 'vatican':
//     return 'red';
// }
//   }
}
