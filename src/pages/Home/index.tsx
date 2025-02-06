import { PageTitle } from "@/components/page-title";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";

export function HomePage() {
  return (
    <>
      <Helmet title="Home - RVM Sender" />
      <div className="grid gap-10">
        <PageTitle
          title="Olá, Ruan Victor"
          description="este é um overview das métricas das suas campanhas de disparos"
        />

        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
        </Card>

        <div>
          <Input
            type="search"
            placeholder="digite algo..."
            className="w-[250px]"
          />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>nome</TableHead>
                <TableHead>telefone</TableHead>
                <TableHead>template mensagem</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
      </div>
    </>
  );
}
