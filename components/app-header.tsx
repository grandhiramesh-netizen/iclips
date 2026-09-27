import { Suspense } from "react";
import { BellIcon, UploadIcon, UserIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { MenuButton } from "@/components/menu-button";
import { SearchForm, SearchFormFallback } from "@/components/search-form";

export function AppHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background px-3 sm:px-4">
      <div className="flex h-14 items-center gap-2 sm:gap-3">
        <div className="flex shrink-0 items-center gap-1 lg:flex-1">
          <MenuButton />
          <Logo />
        </div>
        <div className="min-w-0 flex-1 lg:w-[min(640px,46vw)] lg:flex-none">
          <Suspense fallback={<SearchFormFallback />}>
            <SearchForm />
          </Suspense>
        </div>
        <div className="flex shrink-0 items-center justify-end gap-1 lg:flex-1">
          <button
            type="button"
            aria-label="Upload"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-2.5 py-2 text-sm font-medium hover:bg-white/10 sm:px-3"
          >
            <UploadIcon className="size-5" />
            <span className="hidden md:inline">Upload</span>
          </button>
          <button
            type="button"
            aria-label="Notifications"
            className="grid size-10 place-items-center rounded-full hover:bg-white/10"
          >
            <BellIcon className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="grid size-8 place-items-center rounded-full bg-[#e040a0] text-white"
          >
            <UserIcon className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
