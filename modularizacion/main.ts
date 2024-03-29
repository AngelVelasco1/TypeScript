import { returnGreeting } from "./greetingFun";
import { returnGreeting as returnGreetingLenght } from "./greetingUtilities";
import * as allGreetingFuncion from "./greetingFun";

returnGreeting("Hi") // uso la funcion importada
allGreetingFuncion.returnGreeting("Hi Using all *") // Accedemos al archivo completo, mediante el punto definimos el componente especifico que usaremos
returnGreetingLenght("The lenght of message") // Uso de la funcion importada mediante su alias