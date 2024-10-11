export interface BasicUser {
    id: number,
  }
  export interface User extends BasicUser {
    nume: string,
    prenume: string,
    poza: File,
    datanastere:Date, //string
    email:string,
    telefon: string,
    cetatenie:string,
    dataadaugare?:Date,
    actiune?:string
  }
  export interface UserWithDetails extends BasicUser, User{
    userId: number,
    user: User,
    
  }