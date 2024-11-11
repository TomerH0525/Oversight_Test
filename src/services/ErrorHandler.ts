import { toast } from "@/hooks/use-toast";

class ErrorHandler{
   
    public showError(err: any){
        if(typeof(err) == 'string'){
            toast({
                title: "ERROR",
                description: err,
                duration:5000,
            });

        } else {
            console.log(err);
            toast({
                title: "ERROR",
                description: "Opps something went wrong...",
                duration:5000,
            });
        }
    }
}

const errorHandler = new ErrorHandler();
export default errorHandler;