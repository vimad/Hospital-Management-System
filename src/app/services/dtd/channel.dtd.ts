export interface SaveChannelDTO{
    channelDate:string;
    startTime:string;
    endTime:string;
    patientLimit:number;
    channelDoctorId:number;
}

export interface ChannelInfoDTO{
    channelDate:Date;
    startTime:string;
    endTime:string;
    patientLimit:number;
    appoinments:any[];
    id:number;
    appoinmentTime?:any;
    reserved?:boolean;
    reservedId: string;
}