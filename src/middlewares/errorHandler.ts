import {
    Request,
    Response,
    NextFunction
} from "express";

import {isBoom } from "@hapi/boom";

export const errorHandlerBoom = (
    err: Error,
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    if (isBoom(err)) {
        const { statusCode, payload } = err.output
        res.status(statusCode).json({
            statusCode, error: payload.error, message: payload.message
        })
    }

    next(err);
};

export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    /* console.error(err); */
    res.status(500).json({ error: `Ocurrió un error en el servidor ---------- ${err.message}` });
};
