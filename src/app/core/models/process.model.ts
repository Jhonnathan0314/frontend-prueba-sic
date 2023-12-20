import { Employee } from "./employee.model";
import { Person } from "./person.model";

export class Process {
    filingNumber: number;
    filingYear: string;
    processName: string;
    description: string;
    filingPerson: Person;
    officialReceived: Employee;
}

export class ProcessCreate {
    filingYear: string;
    processName: string;
    description: string;
}