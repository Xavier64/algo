import ServiceInterface from "./serviceInterface";

class Service2 implements ServiceInterface {
    clgName(): void {
        console.log("service2");
    }
}

export default Service2;