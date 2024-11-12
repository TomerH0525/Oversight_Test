import ClientType from "@/models/enum/ClientType";
import User from "@/models/User";
import { authStore, login } from "@/stores/AuthStore";

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
  public async login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        let isSuccesfull = false;

        if (
          username === adminData.username &&
          password === adminData.password
        ) {
          let admin: User = {
            userId: adminData.userId,
            username: adminData.username,
            isLocked: adminData.isLocked,
            clientType: adminData.clientType,
          };

          authStore.dispatch(login(admin));
          isSuccesfull = true;
        }
        resolve(isSuccesfull);
      }, 1000);
    });
  }
}
//creates a singleton service object
const authService = new AuthService();
export default authService;
