import ClientType from "./enum/ClientType";

class User {
  userId: number;
  username: string;
  isLocked?: boolean;
  clientType: ClientType;

  constructor(
    userId: number,
    username: string,
    isLocked: boolean,
    clientType: ClientType,
  ) {
    this.userId = userId;
    this.username = username;
    this.isLocked = isLocked;
    this.clientType = clientType;
  }

}

export default User;
