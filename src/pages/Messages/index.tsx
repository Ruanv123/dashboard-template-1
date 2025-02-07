import { PageTitle } from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

export function MessagesPage() {
  return (
    <>
      <div>
        <PageTitle title="Manage Messages Templates" />
      </div>

      <Sheet>
        <SheetTrigger>
          <Button></Button>
        </SheetTrigger>
      </Sheet>
    </>
  );
}
