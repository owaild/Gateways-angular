export interface PeriodicElement {
    serialnumber: string;
    position: number;
    IPv4: number;
    humanName: string;
    devices: devices[];
    id?: string
}
export interface devices {
    UID: string;
    vendor: string;
    date: Date;
    status: boolean;
}