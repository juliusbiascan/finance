"use client";
import qs from "query-string";
import {
  usePathname,
  useParams,
  useSearchParams,
  useRouter,
} from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useGetAccounts } from "@/features/accounts/api";
import useGetSummary from "@/features/summary/api/use-get-summary";
type Props = {};
const AccountFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const accountId = params.get("accountId") || "all";
  const from = params.get("from") || "";
  const to = params.get("to") || "";
  const { data: accounts, isLoading: isLoadingAccounts } = useGetAccounts();
  const { isLoading: isLoadingSummary } = useGetSummary();

  const onChange = (newValue: string) => {
    const query = qs.stringify(
      {
        accountId: newValue === "all" ? "" : newValue,
        from,
        to,
      },
      { skipNull: true, skipEmptyString: true }
    );
    router.push(`${pathname}?${query}`);
  };

  return (
    <Select
      value={accountId}
      onValueChange={onChange}
      disabled={isLoadingAccounts || isLoadingSummary}
    >
      <SelectTrigger className="lg:w-56 w-full h-10 rounded-lg px-3 font-normal bg-white/80 hover:bg-white border border-gray-200 focus:ring-offset-0 focus:ring-transparent outline-none text-gray-900 focus:bg-white transition shadow-sm">
        <SelectValue placeholder="Filter by account" />
      </SelectTrigger>
      <SelectContent className="rounded-lg shadow-lg bg-white">
        <SelectItem value="all">All accounts</SelectItem>
        {accounts?.map((account) => (
          <SelectItem key={account.id} value={account.id}>
            {account.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default AccountFilter;
