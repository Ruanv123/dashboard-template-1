import { PageTitle } from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function SenderPage() {
  return (
    <div className="grid gap-5">
      <PageTitle
        title="WPP Sender"
        description="send infinite mensages via wpp api"
      />
      <div className="flex items-center gap-5">
        <div>
          <Label>Numero</Label>
          <Select>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="número para disparo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">+55 31 98644 1470</SelectItem>
              <SelectItem value="pineapple">+55 31 98840 5616</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label>Enviar quantidade de msgs</Label>
          <Input type="text" className="w-[250px]" />
        </div>
        <div className="grid gap-3">
          <Label>no gap de tempo de</Label>
          <Input type="text" className="w-[250px]" />
        </div>
      </div>
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <Label>Telefones</Label>
          <Button size="sm">Importar planilha</Button>
        </div>
        <Textarea
          placeholder="insira os numeros de telefone formatados (ex: 5531986441470,5531988405616"
          rows={8}
        />
      </div>
      <div className="grid gap-3">
        <Label>Mensagem</Label>
        <Textarea placeholder="Insira a mensagem que deseja enviar" rows={8} />
      </div>
      <Button type="submit" className="w-[350px] ml-auto">
        Disparar
      </Button>
    </div>
  );
}
