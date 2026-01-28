"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BsList, BsXLg } from "react-icons/bs";
import Link from "next/link";

interface ItemContent {
  link: string;
  title: string;
}

interface Item {
  value: string;
  content: ItemContent[];
}

const items: Item[] = [
  {
    value: "Nossos Seguros",

    content: [
      {
        link: "/RCProfissional",
        title: "RC Profissional",
      },
      {
        link: "/RCExecutivos",
        title: "RC Executivos",
      },
      {
        link: "/RCGeral",
        title: "RC Geral",
      },
      {
        link: "/RCCondutor",
        title: "RC Condutor",
      },
      {
        link: "/Cyber",
        title: "Cyber",
      },
      {
        link: "/Equipamentos",
        title: "Equipamentos",
      },
      {
        link: "/Empresarial",
        title: "Empresarial",
      },
      {
        link: "/Transporte",
        title: "Transporte",
      },
      {
        link: "/Garantia",
        title: "Garantia",
      },
      {
        link: "/DPEM",
        title: "DPEM",
      },
    ],
  },
  {
    value: "Seguradora Digital",

    content: [
      {
        link: "/Historia",
        title: "História",
      },
      {
        link: "Equipe",
        title: "Equipe",
      },
      {
        link: "Eventos",
        title: "Eventos",
      },
      {
        link: "Imprensa",
        title: "Imprensa",
      },
      {
        link: "Prêmios",
        title: "Prêmios",
      },
      {
        link: "Parcerias e Afinidades",
        title: "Parcerias e Afinidades",
      },
    ],
  },
  {
    value: "Para Corretores",

    content: [
      {
        link: "Akademia",
        title: "Akademia",
      },
      {
        link: "APIs",
        title: "APIs",
      },
      {
        link: "Cadastro corretor",
        title: "Cadastro corretor",
      },
      {
        link: "Clube de benefícios",
        title: "Clube de benefícios",
      },
      {
        link: "Cotação online",
        title: "Cotação online",
      },
      {
        link: "Universidade Akad",
        title: "Universidade Akad",
      },
      {
        link: "Central de relacionamento",
        title: "Central de relacionamento",
      },
    ],
  },
  {
    value: "Blog dos Seguros",

    content: [
      {
        link: "Produtos",
        title: "Produtos",
      },
      {
        link: "Mercado",
        title: "Mercado",
      },
      {
        link: "Tecnologia",
        title: "Tecnologia",
      },
      {
        link: "Emprego",
        title: "Emprego",
      },
      {
        link: "Gestão",
        title: "Gestão",
      },
    ],
  },
  {
    value: "Contato",

    content: [
      {
        link: "Encontre um corretor Akad",
        title: "Encontre um corretor Akad",
      },
      {
        link: "Aviso de sinistro",
        title: "Aviso de sinistro",
      },
      {
        link: "Central de atendimento",
        title: "Central de atendimento",
      },
      {
        link: "Serviços e assistências",
        title: "Serviços e assistências",
      },
      {
        link: "Segunda via de boleto",
        title: "Segunda via de boleto",
      },
      {
        link: "Sugestões e duvidas",
        title: "Sugestões e duvidas",
      },
    ],
  },
];

export function SideMenu() {
  return (
    <>
      <Drawer direction="left">
        <DrawerTrigger asChild className="flex lg:hidden">
          <Button size="icon" className="bg-blue-brand" aria-label="Submit">
            <BsList className="text-white size-5" />
          </Button>
          {/* <div className="flex justify-center items-center size-8 hover:bg-white/10"></div> */}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="flex flex-row w-full justify-between">
            <div className="">
              <DrawerTitle className="text-pink-brand">
                Akad Seguros
              </DrawerTitle>
              <DrawerDescription>
                Uma nova forma de pensar e fazer seguros
              </DrawerDescription>
            </div>

            <DrawerClose asChild>
              <BsXLg />
            </DrawerClose>
          </DrawerHeader>
          <div className="no-scrollbar overflow-y-auto px-4">
            <Accordion type="single" collapsible className="">
              {items.map((item, index) => (
                <AccordionItem key={index} value={item.value}>
                  <AccordionTrigger>{item.value}</AccordionTrigger>
                  {item.content.map((info: ItemContent, index: number) => (
                    <AccordionContent key={index}>
                      <Link href={info.link}>{info.title}</Link>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <DrawerFooter>
            <Button className="bg-pink-brand">Encontre um Corretor</Button>
            <Button className="bg-blue-brand">Portal do Corretor</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
