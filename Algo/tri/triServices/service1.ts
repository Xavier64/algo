import ServiceInterface from "./serviceInterface";

class Service1 implements ServiceInterface {
    clgName(): void {
        console.log("service1");
    }
}

export default Service1;