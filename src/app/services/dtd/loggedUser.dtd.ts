import { ChannelInfoDTO } from './channel.dtd';

export interface LoggedUser{
    name: string;
    userId: number;
    email: string;
    userName: string;
    profileUrl: string;
    expiration: number;
    hospitalStaffId?: number;
    position?: string;
    channels?: any[];
    accessToken: string;
    refreshToken: string;
}

export interface LogingResponceDTO {
    displayUserDTO: DisplayUserDTO;
    hospitelStaff?: HospitelStaff;
    patient?: Patient;
}

export interface AuthToken {
    accessToken: string;
    refreshToken: string;
}

export interface DisplayUserDTO {
    authToken: AuthToken;
    name: string;
    userId: number;
    email: string;
    userName: string;
    profileUrl: string;
    expiration: number;
}

export interface HospitelStaff {
    hospitalStaffId: number;
    position: string;
    channels: any[];
}

export interface Patient{
    patientId: number,
    displayUserDataDTO: DisplayUserDTO
}

export interface Doctor{
    doctorid:number,
    displayUserDataDTO: DisplayUserDTO,
    channels: ChannelInfoDTO[]
}
