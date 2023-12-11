import Image from "@/Components/Custom/Image";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";

interface DetailsProps {
    email: string;
    card: string;
    exchange_rate: string;
    amount: number;
    date: string;
}

const DetailsDialog: React.FC<DetailsProps> = ({
    email,
    card,
    exchange_rate,
    amount,
    date,
}) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="outline"
                    className="justify-start w-full border-0 mt-1 "
                    size="sm"
                >
                    Payment Details
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader className="flex flex-col justify-center items-center gap-8 py-6">
                    <AlertDialogTitle className="text-violet-500 text-2xl">
                        Payment Details
                    </AlertDialogTitle>
                    <div className="grid grid-cols-2 justify-center items-center sm:grid-cols-3 lg:grid-cols-4 gap-8 mx-2 mr-4">
                        <div className="flex flex-col text-center gap-3">
                            <Badge className="w-28 h-8 bg-gradient-to-b from-pink-500 to-violet-700 flex justify-center">
                                Product
                            </Badge>
                            <span className="text-sm font-semibold text-slate-500">
                                {card}
                            </span>
                        </div>
                        <div className="flex flex-col text-center gap-3">
                            <Badge className="w-28 h-8 bg-gradient-to-b from-pink-500 to-violet-700 flex justify-center">
                                Exchange Rate
                            </Badge>
                            <div className="">
                                <span className="text-sm font-semibold text-slate-500">
                                    {exchange_rate}-per dollar
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col text-center gap-3">
                            <Badge className="w-28 h-8 bg-gradient-to-b from-pink-500 to-violet-700 flex justify-center">
                                Return
                            </Badge>
                            <span className="text-sm font-semibold text-slate-500">
                                {amount}
                            </span>
                        </div>
                        <div className="flex flex-col text-center gap-3">
                            <Badge className="w-28 h-8 bg-gradient-to-b from-pink-500 to-violet-700 flex justify-center">
                                Date
                            </Badge>
                            <span className="text-sm font-semibold text-slate-500">
                                {date}
                            </span>
                        </div>
                    </div>
                    <AlertDialogDescription>
                        <Image
                            src="/images/block_card.png"
                            alt="Block Card"
                            width={255}
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-violet-500 text-white">
                        Close
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DetailsDialog;
