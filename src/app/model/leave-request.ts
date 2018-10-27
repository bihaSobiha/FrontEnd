export class LeaveRequest{
    id:number;
    userId:number;
    leaveTypeId:number;
    statusId:number;
    startDate:Date;
    endDate:Date;
    reason:String;
    leaveDays:number;
    medicalReports:String;
    recommendedBy:number;
    approvedBy:number;
    createdAt:Date;
    updatedAt:Date;
}
