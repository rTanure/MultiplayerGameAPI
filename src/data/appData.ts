type AppData = {
    time: number
    data: LineData
}[]

type LineData = {
    color: string
    coords: Coord[]
}

type Coord = {
    x: number
    y: number
}

class Data{
    public appData: AppData = []

    public appendData(data: LineData) {

        const finalData = {
            "time": Date.now(),
            "data": data
        }

        this.appData.push(finalData)
    }

    public get() {
        return this.appData
    }

    public getAfter(time: number) {
        let numberOfDatas = 0
        let datasAfterTime: AppData = []
        let dataSize = this.appData.length - 1
        if (dataSize != -1){
            for(let index = dataSize; index >= 0; index--) {
                let dataTime = this.appData[index].time
                if(dataTime > time) {
                    numberOfDatas++
                    datasAfterTime.unshift(this.appData[index])
                } else {
                    return datasAfterTime
                }
            } 
            return datasAfterTime
        } else {
            return datasAfterTime
        }
    }
}

export const data = new Data()