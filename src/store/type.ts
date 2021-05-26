export interface RespBean{
    code?: number;
    message?: string;
    data?: object;
}

export interface Role {
    id?: number;
    name?: string;
}

export interface Lab{
    id?: number;
    name?: string;
    number?: number;
    detail?: string;
}

export interface User{
    id?: number;
    name?: string;
    username?: string;
    password?: string;
    roles?: Role[];
}

export interface Course{
    id?: number;
    name?: string;
    studentNumber?: number;
    periods?: number;
}