export interface Patients {
    patientId: number;
    specialArea: string;
    hibernateLazyInitializer: HibernateLazyInitializer;
}

export interface HibernateLazyInitializer {
}

export interface RootObject {
    appoinmentId: number;
    appoinentTime: string;
    patients: Patients;
}