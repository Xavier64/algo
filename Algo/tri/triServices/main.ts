import ClassUsingServices from "./ClassUsingServices";
import Service1 from "./service1";
import Service2 from "./service2";

const classUsingServices = new ClassUsingServices();
const service1 = new Service1();
const service2 = new Service2();

classUsingServices.addService(service1);
classUsingServices.addService(service2);