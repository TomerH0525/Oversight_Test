import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

//cart
const cart = [
  {
    price: 100,
    itemName: "Test",
    itemDescription: "This is a default 100NIS transaction for testing, basdasd asd asd asd asd asd asd asd asd das sadasd asd asd as das das das das das das das das das dsada sda sd das das das das dasd as dasd asd as dasd asd as",
    amount: 1,
    sku: "12345",
  },
];

function CartPage(): JSX.Element {
  const [couponCode, setCouponCode] = useState("");

  function applyCoupon() {
    console.log(couponCode);
    setCouponCode("");
  }

  function handleCouponCodeChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setCouponCode(event.target.value);
  }

  useEffect(() => {
    console.log("cartpage");
  }, [cart]);

  return (
    <div className="h-full content-center ">
      <Card className="w-[90%] xl:w-[68%] m-auto h-[90%] flex flex-col">
        <CardHeader className="border-b">
          <CardTitle>Shopping Cart</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col-reverse lg:flex-row justify-between m-0 p-0 grow">
          <div className="flex flex-row-reverse lg:flex-col justify-between lg:border-r lg:w-[30%] min-w-[200px] px-2">
            <div className="grow">
            Total price: 
            </div>
            <div className="flex flex-col gap-2">
              <div className="">Have a coupon?</div>
              <Input
                onChange={handleCouponCodeChange}
                className="m-auto text-center font-bold text-sm w-[150px]"
                value={couponCode}
                type="text"
              />
              <Button
                className="w-[150px] m-auto p-0 mb-2"
                variant={"secondary"}
                onClick={applyCoupon}
              >
                Apply coupon
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-1 grow ">
            {cart.map((item) => {
              return (
                <CartItem
                  key={item.sku}
                  price={item.price}
                  itemName={item.itemName}
                  amount={item.amount}
                  sku={item.sku}
                  itemDescription={item.itemDescription}
                ></CartItem>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CartPage;
