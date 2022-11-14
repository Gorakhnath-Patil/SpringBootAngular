export class Policy {
    id?: number;
    name?: string;
    category?: string;
    startDate?: Date;
    endDate?: Date;
    duration?: string;
    initialDeposit?: string;
    userType?: string;
    termPerYear?: string;
    termAmount?: string;
    rateOfInterest?: string;
    maturityAmount?: string;
    status?: string;
    vendorName?: string;
    slab1?: number;
    slab2?: number;
    slab3?: number;
    slab4?: number;
    buyCount?: number;

    vendor?: {
        address?: string;
        contact?:string;
        email?:string;
        id?:number;
        name?:string;
    }
}