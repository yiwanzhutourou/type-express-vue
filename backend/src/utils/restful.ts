export type CommonResp<T> = {
    code: number,
    message: string,
    data?: T,
}

export const badRequst = (code: number = -1, message: string= 'error'): CommonResp<any> => {
    return {
        code, message,
    }
}

export const ok = (data: any): CommonResp<any> => {
    return {
        code: 0,
        message: 'OK',
        data,
    }
}
