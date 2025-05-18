import AccountFilter from "@/components/account-filter";
import DateFilter from "@/components/date-filter";

const Filters = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-y-3 lg:gap-y-0 lg:gap-x-4 bg-white/30 rounded-xl px-4 py-3 shadow-sm mt-6">
      <AccountFilter />
      <DateFilter />
    </div>
  );
};

export default Filters;
