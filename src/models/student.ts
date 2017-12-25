export class Student {
    firstName: string;
    lastName : string;
    gender : string;
    dateOfBirth : string;
    streetAddress : string;
    city : string;
    zipCode : number;
    rank : string;
    contactNumber? : number;
    email? : string;
    avatarSrc?: string;
    studentId?:string;
    createdBy?:string;
    createdById?:string;
    
    constructor(
                firstName:string,
                lastName:string,
                gender:string,
                dateOfBirth:string,
                streetAddress:string,
                city:string,
                zipCode:number,
                rank:string,
                contactNumber?:number,
                email?:string,
                avatarSrc?:string,
                studentId?:string,
                createdBy?:string,
                createdById?:string
            ) {

      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.dateOfBirth = dateOfBirth;
      this.streetAddress = streetAddress;
      this.city = city;
      this.zipCode = zipCode;
      this.rank = rank;
      this.contactNumber = contactNumber;
      this.email = email;
      this.avatarSrc = avatarSrc;
      this.studentId = studentId;
      this.createdBy = createdBy;
      this.createdById = createdById;
    }
} 