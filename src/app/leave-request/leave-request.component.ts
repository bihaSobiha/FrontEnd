import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from '../model/leave-request';
import {LeaveRequestService} from '../services/leave-request.service';
import { LeaveRequestProcess } from '../model/leave-request-process';


@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {

  leaveRequests:LeaveRequest[];

  leaveRequestObj = new LeaveRequest();

  leaveRequestProcess:LeaveRequestProcess;

  approvedObj:any;
  constructor(private leaveRequestService: LeaveRequestService) { }

  ngOnInit() {
    this.viewLeaveRequest();
  }

  viewLeaveRequest(){
    this.leaveRequestService.getLeaveRequest().subscribe(data=>{
      // console.log(data);
      this.leaveRequests=data;
    })
  }

  getleaveRequest(leaveRequest){
    this.approvedObj=leaveRequest;
    // console.log(this.approvedObj);
  }

  updateLeaveRequest(){
    // this.leaveRequestToLeaveRequestProcess(this.leaveRequestObj);
    this.leaveRequestService.approveLeaveRequest(this.approvedObj).subscribe(data=>{
      // alert("updated");
      this.viewLeaveRequest();
    })
  }

  // leaveRequestToLeaveRequestProcess(leaveRequest:LeaveRequest){
  //   this.leaveRequestProcess= new LeaveRequestProcess();
  //   this.leaveRequestProcess.leaveRequestId=leaveRequest.id;
  //   this.leaveRequestProcess.statusId=leaveRequest.statusId;
  //   this.leaveRequestProcess.processedBy=leaveRequest.userId;
  // }

}
