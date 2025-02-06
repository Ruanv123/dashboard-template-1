import { PageTitle } from "@/components/page-title";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Phone } from "lucide-react";
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

        <div></div>

        <div className="grid gap-5">
          <Input
            type="search"
            placeholder="digite algo..."
            className="w-[250px]"
          />
          <div className="border rounded-md overflow-hidden">
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
      </div>
    </>
  );
}
