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

interface dbUser {
  userId: string,
  username: string,
  password: string,
  isLocked: boolean,
  clientType: ClientType,
}

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
        const dbUser = localStorage.getItem(username)
        if (username === adminData.username && password === adminData.password) {
          const admin: User = {
            userId: adminData.userId,
            username: adminData.username,
            isLocked: adminData.isLocked,
            clientType: adminData.clientType,
          };
          authStore.dispatch(login(admin));
          resolve(true);
        } else if(dbUser){
          const jsonObject: dbUser = JSON.parse(dbUser);
          console.log("Starting to check password");
          checkPassword(password,jsonObject.password)
          .then(() => 
            {
              resolve(true);
              const loggedUser:User = {username:jsonObject.username,clientType:jsonObject.clientType,userId:parseInt(jsonObject.userId),isLocked:jsonObject.isLocked};
              authStore.dispatch(login(loggedUser))
            })
          .catch(() => resolve(false))
            console.log("passwword matches! logging in");
        } else {
            reject(new Error('Invalid username or password'));

        }
      }catch (error) {
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
          const hashedPassword = await hashPassword(password);
          
          localStorage.setItem(username,JSON.stringify({
            userId:new Date().getTime(),
            username: username,
            password: hashedPassword,
            clientType: ClientType.User,
          }))
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

async function checkPassword(password: string, dbUser: string):Promise<boolean> {
  const hashedInput = await CryptoJS.SHA256(password).toString
  const isValid = dbUser.toString === hashedInput
  return isValid
}

function hashPassword(password: string):string{
  const hashedUserPassword = CryptoJS.SHA256(password).toString();
  return hashedUserPassword;
}

