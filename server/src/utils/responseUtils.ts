
export const responseUtils = (statusCode: number, status: string, message: string) => {
    return {
        statusCode: statusCode,
        status: status,
        message: message
    };
};

