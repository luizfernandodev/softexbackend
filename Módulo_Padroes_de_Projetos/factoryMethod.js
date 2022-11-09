class Pc{
    constructor(type,ram,hdd,cpu){
        this.ram = ram 
        this.hdd = cpu 
        this.cpu = hdd
        this.type = 'Pc'
    }

}
class Server{
    constructor(type,ram,hdd,cpu){
        this.ram = ram, 
        this.hdd = hdd,
        this.cpu = cpu,
        this.type = 'Server'
}
}

class Logistics{
    createComputer(type,ram,hdd,cpu){
        if (type === 'pc'){
            return new Pc(type,ram,hdd,cpu)
        }
        if(type === 'server'){
            return new Server(type,ram,hdd,cpu)
        }
    
}
}

createComputer.toString = () => console.log(`Type: ${computer.type}, CPU: ${computer.cpu}GHz, RAM: ${computer.ram}GB, HD: ${computer.hd}GB.`)

const logistic = new Logistics()
const pc = logistic.createComputer('pc','8GB','500GB','3,0GHz')
const server = logistic.createComputer('server','16GB','2000GB','3,5GHz')

pc.toString()
console.log(pc)
console.log(server)
