import { Button } from "@/components/ui/button";

export function Header(): JSX.Element {
    return (
        <div className="inline-flex w-full justify-between p-3">
            <div>
			    <h1 className="text-4xl">Coupon site</h1>
            </div>

            <Button>Login</Button>
        </div>
    );
}
