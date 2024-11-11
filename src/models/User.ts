class User {
  userId: number;
  userName: string;
  password: string;
  isLocked: boolean;

  constructor(
    userId: number,
    userName: string,
    password: string,
    isLocked: boolean
  ) {
    this.userId = userId;
    this.userName = userName;
    this.password = password;
    this.isLocked = isLocked;
  }

}

export default User;
