import { IconType } from "react-icons/lib";
import { VariantProps, cva } from "class-variance-authority";
import { cn, formatCurrency, formatPercentage } from "@/lib/utils";
import CountUp from "@/components/count-up";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";
const boxVariants = cva(
  "rounded-xl p-4 flex items-center justify-center shadow-sm transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-blue-100",
        success: "bg-emerald-100",
        danger: "bg-rose-100",
        warning: "bg-yellow-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const iconVariants = cva("h-8 w-8", {
  variants: {
    variant: {
      default: "text-blue-500",
      success: "text-emerald-500",
      danger: "text-rose-500",
      warning: "text-yellow-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type BoxVariants = VariantProps<typeof boxVariants>;
type IconVariants = VariantProps<typeof iconVariants>;

interface Props extends BoxVariants, IconVariants {
  title: string;
  value?: number;
  percentChange?: number;
  icon: IconType;
  dateRange: string;
}

export const DataCard = ({
  title,
  value = 0,
  percentChange = 0,
  icon: Icon,
  variant,
  dateRange,
}: Props) => {
  return (
    <Card className="border-none drop-shadow-md rounded-2xl bg-white/90 hover:bg-white transition-all duration-200 group">
      <CardHeader className="flex flex-row items-center justify-between gap-x-6 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-1">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-1 text-gray-500">
            {dateRange}
          </CardDescription>
        </div>
        <div
          className={cn(
            "shrink-0",
            boxVariants({ variant }),
            "group-hover:scale-105"
          )}
        >
          <Icon className={iconVariants({ variant })} />
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <h1 className="font-extrabold text-3xl mb-1 line-clamp-1 break-all text-gray-900">
          <CountUp
            start={0}
            end={value}
            preserveValue
            decimals={2}
            decimalPlaces={2}
            formattingFn={formatCurrency}
          />
        </h1>
        <p
          className={cn(
            "text-xs font-medium flex items-center gap-x-1",
            percentChange > 0
              ? "text-emerald-600"
              : percentChange < 0
                ? "text-rose-600"
                : "text-gray-400"
          )}
        >
          {formatPercentage(percentChange, { addPrefix: true })}{" "}
          <span className="text-gray-400 font-normal">from last period</span>
        </p>
      </CardContent>
    </Card>
  );
};

export const DataCardLoading = () => {
  return (
    <Card className="border-none drop-shadow-md rounded-2xl bg-white/80 h-[192px]">
      <CardHeader className="flex flex-row items-center justify-between gap-x-6 pb-2">
        <div className="space-y-1">
          <Skeleton className="h-6 w-24 rounded" />
          <Skeleton className="h-4 w-40 rounded" />
        </div>
        <Skeleton className="size-14 rounded-xl" />
      </CardHeader>
      <CardContent className="pt-0">
        <Skeleton className="shrink-0 h-10 w-28 mb-2 rounded" />
        <Skeleton className="shrink-0 h-4 w-32 rounded" />
      </CardContent>
    </Card>
  );
};
