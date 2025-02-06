import { PageTitle } from "@/components/page-title";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone } from "lucide-react";

export function IntegrationsPage() {
  const data = Array(10).fill(0);

  console.log(data);
  return (
    <div>
      <div className="flex items-end justify-between">
        <PageTitle
          title="Integrar conta WPP"
          description="Faça integração com sua conta do wpp"
        />
        <Button size={"default"}>Novo Numero</Button>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data.map((item) => (
          <Card key={item}>
            <CardHeader>
              <div className="flex items-center gap-5 mb-3">
                <div className="p-3 bg-zinc-200 w-fit rounded-lg">
                  <Phone size={25} />
                </div>
                <h4 className="font-bold">31 98644-1470</h4>
              </div>
              <CardTitle>Numero comercial 1</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit qui sint magnam, quam, ratione
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant={"outline"} className="w-full">
                Disconnect
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
