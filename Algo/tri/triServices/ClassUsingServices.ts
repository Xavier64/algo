import ServiceInterface from "./serviceInterface"

class ClassUsingServices {
    
    public addService(service: ServiceInterface) {
        service.clgName();
    }
}

export default ClassUsingServices;