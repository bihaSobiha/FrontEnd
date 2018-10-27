import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LeaveRequest } from '../model/leave-request';
import { LeaveRequestProcess } from '../model/leave-request-process';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  constructor(private http:HttpClient) { }
  leaveRequestProcess= new LeaveRequestProcess();
  private leaveRequestUrl = "http://localhost:8080/hrm_system/leaverequest";

  public getLeaveRequest(){
    return this.http.get<LeaveRequest[]>(this.leaveRequestUrl);
  }

  public approveLeaveRequest(leaveRequest){
    // this.changeRequestStatus(leaveRequest.statusId);
    this.leaveRequestProcess.statusId=leaveRequest.statusId.id;
    this.leaveRequestProcess.processedBy=leaveRequest.userId.id;
    this.leaveRequestProcess.leaveRequestId=leaveRequest.id;
    console.log(this.leaveRequestProcess);
    if(leaveRequest.statusId.id==1){
      this.leaveRequestProcess.statusId=2;
    }
    console.log(this.leaveRequestProcess);
    return this.http.post<LeaveRequest>(this.leaveRequestUrl+'/leaveapprove',this.leaveRequestProcess)

  }

  public changeRequestStatus(statusId){
    
  }
}
