import ClientType from "./enum/ClientType";

class User {
  userId?: number;
  username: string;
  isLocked?: boolean;
  clientType: ClientType;

  constructor(
    username: string,
    clientType: ClientType,
    userId?: number,
    isLocked?: boolean,

  ) {
    this.userId = userId;
    this.username = username;
    this.isLocked = isLocked;
    this.clientType = clientType;
  }

  

}

export default User;
