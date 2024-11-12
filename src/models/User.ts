import ClientType from "./enum/ClientType";

class User {
  userId: number;
  username: string;
  password: string;
  isLocked?: boolean;
  clientType: ClientType;

  constructor(
    userId: number,
    userName: string,
    password: string,
    isLocked: boolean,
    clientType: ClientType,
  ) {
    this.userId = userId;
    this.username = userName;
    this.password = password;
    this.isLocked = isLocked;
    this.clientType = clientType;
  }

}

export default User;
