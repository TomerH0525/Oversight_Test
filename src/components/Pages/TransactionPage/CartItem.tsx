import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useState } from "react";

interface DefaultTransaction {
  price: number;
  itemName: string;
  amount: number;
  sku: string;
  itemDescription: string;
}

const CartItem = React.memo((props: DefaultTransaction) => {
  const [price, setPrice] = useState(
    props.price ? props.price * props.amount : "null"
  );

  useEffect(() => {
    setPrice(props.price*props.amount)
    console.log("cartItem")

  },[props.amount])

  const changeValue = (newValue: string) => {
    const newAmount = parseInt(newValue);
    setPrice(props.price * newAmount);
  };

  return (
    <div className="flex flex-row flex-shrink-0 gap-2 p-2 w-full">
      <Card className="flex flex-row h-[150px] lg:h-[125px] grow">
        <CardHeader className="border-r-2 lg:w-[250px]">
          <CardTitle className="flex flex-col gap-1">
            <Badge
              className="sm:text-lg place-content-center"
              variant={"secondary"}
            >
              Price: {price}
              <span>₪</span>
            </Badge>

            <Select onValueChange={changeValue}>
              <SelectTrigger className="w-[58px] h-[35px] m-auto">
                <SelectValue placeholder={props.amount} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="6">6</SelectItem>
                <SelectItem value="7">7</SelectItem>
                <SelectItem value="8">8</SelectItem>
                <SelectItem value="9">9</SelectItem>
                <SelectItem value="10">10</SelectItem>
              </SelectContent>
            </Select>

            <CardDescription className="text-xs">
              SKU: {props.sku}
            </CardDescription>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-2 text-center m-auto w-[95%]">
          <div className="font-bold text-3xl">{props.itemName}</div>
          <CardDescription>{props.itemDescription}</CardDescription>
        </CardContent>
      </Card>
      <Button className="m-auto" size={"sm"} variant={"destructive"}>
        <FontAwesomeIcon icon={faTrashCan} />
      </Button>
    </div>
  );
})

export default CartItem;
