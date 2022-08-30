import { Request, Response } from "express";
import { data } from "../data/appData";


class AppFunctions{
    public getData(req: Request, res: Response) {
        return res.json(data.get())
    }

    public checkUpdate(req: Request, res: Response) {
        let hasUpdate: boolean = false
        const time = Number(req.params.time)

        const result = data.getAfter(time)
        console.log(result)
        
        return res.json({
            "data": result
        })
    }

    public appendLine(req: Request, res:Response) {
        let newLine = req.body

        data.appendData(newLine)

        return res.json({
            "status": "Linha adicionada com sucesso!"
        })
    }
}

export const appFunctions = new AppFunctions()