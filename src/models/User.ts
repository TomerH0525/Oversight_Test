class User {
  userId: number;
  username: string;
  password: string;
  isLocked: boolean;

  constructor(
    userId: number,
    userName: string,
    password: string,
    isLocked: boolean
  ) {
    this.userId = userId;
    this.username = userName;
    this.password = password;
    this.isLocked = isLocked;
  }

}

export default User;
