export class Customer{
    id: number;
    firstName: string;
    lastName: string;
    dob: string;
    salary: number;
    address: string;
    contactNo: string;
    email: string;
    panNo: string;
    employerType: string;
    employerName: string;
    user: User[];
}
        export class User {
   
            id: number;
            username: string;
            password: string;
            userType: string;
            enabled: boolean;
            authorities: [
                {
                    authority: string
                }
            ];
            credentialsNonExpired: boolean;
            accountNonExpired: boolean;
            accountNonLocked: boolean
        }
