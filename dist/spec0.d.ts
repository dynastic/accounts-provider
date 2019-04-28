/** POST /api/v0/auth/register and /api/v0/auth/login */
export declare type AuthResponse = BasicUserResponse;
export interface Device {
    id: string;
    name: string;
    model?: string;
    suffix: string;
}
export declare type FieldType = "string" | "decimal" | "dollar";
export declare type RequestFieldType = FieldType | "device" | "service";
export interface Field {
    label: string;
    value: string;
    type: FieldType;
    backupValue?: string;
    iconClass?: string;
    href?: string;
    blankTarget?: boolean;
}
export interface RequestField {
    label: string;
    value: string;
    type: RequestFieldType;
    iconClass?: string;
}
export declare type TransactionStatus = "created" | "approved" | "failed" | "pending" | "completed" | "refunded" | "denied";
export interface Transaction {
    id: string;
    title: string;
    price: number;
    service: string;
    url: string | null;
    processorName: string;
    status: TransactionStatus;
    date: number;
    statusDate: number;
    fields: Field[];
}
export interface TransactionRequest {
    title: string;
    price: number;
    sku: string;
    url: string;
    fields?: RequestField[];
    redirectURL?: string | null;
    merchantID: string;
}
export interface LinkedService {
    id: string;
    name: string;
    service: string;
    linkedAt: number;
    allowsSignIn: boolean;
}
/** GET /api/v0/user */
export interface BasicUserResponse {
    id: string;
    email: string;
    emailVerificationState: 0 | 1 | 2;
    name: string;
    hasSetPassword: boolean;
    createdAt: number;
    administrator: boolean;
}
/** GET /api/v0/user */
export interface UserResponse extends BasicUserResponse {
    devices: Device[];
    transactions: Transaction[];
    services: LinkedService[];
}
