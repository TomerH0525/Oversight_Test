class Coupon {
  couponID: string;
  couponCode: string;
  couponDescription: string;
  creation: { userId: number; timeOfCreation: Date };
  hasExpiryDate: boolean;
  expiryDate: Date;
  canBeStacked: boolean;
  isQuantityLimited: boolean;
  amount: number;

  constructor(
    couponID: string,
    couponCode: string,
    couponDescription: string,
    creation: { userId: number; timeOfCreation: Date },
    hasExpiryDate: boolean,
    expiryDate: Date,
    canBeStacked: boolean,
    isQuantityLimited: boolean,
    amount: number
  ) {
    this.couponID = couponID;
    this.couponCode = couponCode;
    this.couponDescription = couponDescription;
    this.creation = creation;
    this.hasExpiryDate = hasExpiryDate;
    this.expiryDate = expiryDate;
    this.canBeStacked = canBeStacked;
    this.isQuantityLimited = isQuantityLimited;
    this.amount = amount;
  }
}

export default Coupon;
