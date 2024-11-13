import ClientType from "@/models/enum/ClientType";
import User from "@/models/User";
import { authStore, login } from "@/stores/AuthStore";
import CryptoJS from 'crypto-js';


// default hardcoded Admin user data
const adminData = {
  userId: 1,
  username: "Admin",
  password: "Adm!n100900",
  isLocked: false,
  clientType: ClientType.Administrator,
};

//singleton service class responsible for authentication calls
class AuthService {


  //mimicking api call
  //if successfull return true could be a loggedUserObject with data..
  //if unsuccessfull rejects and returns error..
  public async login(username: string, password: string): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
  
        if (username === adminData.username && password === adminData.password) {
          const admin: User = {
            userId: adminData.userId,
            username: adminData.username,
            isLocked: adminData.isLocked,
            clientType: adminData.clientType,
          };
          authStore.dispatch(login(admin));
          resolve(true);
        } else {
          reject(new Error('Invalid username or password'));
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  public async registerUser(username: string, password: string): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try{
        //delay the call to mimik real api call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if(localStorage.getItem(username)){
          reject(new Error("Username already exists..."))
        }else{
          const hashedPassword = CryptoJS.SHA256(password).toString();
          localStorage.setItem(username,hashedPassword)
          resolve(true)
        }
      }catch (error){
        reject(error)
      }
    })
  }
  

}

//creates a singleton service object
const authService = new AuthService();
export default authService;
