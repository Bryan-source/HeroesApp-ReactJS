

/* En concreto, un componente de orden superior es una función que recibe un componente y devuelve un nuevo componente.
El nombre lleva mayúsculas por lo mismo de que es un higherOrderComponent
const EnhancedComponent = higherOrderComponent(WrappedComponent);
Mientras que un componente transforma props en interfaz de usuario, un componente de orden superior transforma un componente en otro. */

/* Este componente no necesita ser probado debido a que esto ya es cuestión de React en sí */
import { createContext } from "react";

export const AuthContext = createContext();