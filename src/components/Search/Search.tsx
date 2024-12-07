import cn from "classnames";
import React from "react";
import {SearchProps} from "@/components/Search/Search.props";
import {SearchIcon} from "lucide-react";

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 w-full bg-background px-2 py-5 dark:bg-sidebar items-center rounded-lg border border-input text-sm ring-offset-background transition-all duration-150 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2",
          className,
        )}
      >
          <SearchIcon className='pl-2' size={24} />
        <input
          {...props}
          type="search"
          ref={ref}
          className="p-2 w-full font-normal bg-transparent placeholder:text-muted-foreground placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    );
  },
);

Search.displayName = "Search";

export { Search };