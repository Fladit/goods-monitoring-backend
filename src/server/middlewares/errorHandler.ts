import {  Request, Response, NextFunction} from 'express'
import {RequestError} from "../../utils/RequestError";

export const errorHandler = (err: RequestError, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        const {statusCode} = err;
        res.status(statusCode).send(err)

        return ;
    }

    next();
}