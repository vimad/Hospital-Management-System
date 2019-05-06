export interface Patients {
    patientId: number;
    specialArea: string;
    hibernateLazyInitializer: HibernateLazyInitializer;
}

export interface HibernateLazyInitializer {
}

export interface Appoinment {
    appoinmentId: number;
    appoinentTime: string;
    patients: Patients;
}