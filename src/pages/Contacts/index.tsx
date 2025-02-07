import { PageTitle } from "@/components/page-title";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function ContactsPage() {
  return (
    <>
      <PageTitle
        title="Contatos"
        description="lista com todos os contatos importados"
      />

      <div className="grid gap-1">
        <div>
          <div>
            <Input />
          </div>
        </div>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>#</TableHead>
                <TableHead>#</TableHead>
                <TableHead>#</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
      </div>
    </>
  );
}
