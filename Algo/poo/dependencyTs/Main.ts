import Service1 from './Service1';
import Service2 from './Service2';



class Main {
    
    serv1 = new Service1();
    serv2 = new Service2();

    ClassUtilisantDesServices classUtilisantDesServices = new ClassUtilisantDesServices();
    classUtilisantDesServices.addService(serv1, serv2);    
}

