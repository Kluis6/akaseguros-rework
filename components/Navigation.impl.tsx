"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cva } from "class-variance-authority";

export const navigationTriggerVariants = cva(
  "px-4 py-2 rounded-md transition-colors",
  {
    variants: {
      variant: {
        clean: `bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent `,
      },
    },
    defaultVariants: { variant: "clean" },
  },
);

const components: { title: string; href: string; description: string }[] = [
  {
    title: "RC Profissional",
    href: "/docs",
    description:
      "O seguro que protege o profissional contra os riscos da profissão.",
  },
  {
    title: "RC Executivo",
    href: "/docs/primitives/hover-card",
    description: "Proteção para quem toma grandes decisões.",
  },
  {
    title: "RC Geral",
    href: "/docs/primitives/progress",
    description: "A proteção do patrimônio de quem tem atividades comerciais.",
  },
  {
    title: "RC Condutor",
    href: "/docs/primitives/scroll-area",
    description:
      "O seguro oferece proteção para terceiros e você dirige tranquilo.",
  },
  {
    title: "Cyber",
    href: "/docs/primitives/tabs",
    description: "Proteja os dados da sua empresa dos Riscos Cibernéticos.",
  },
  {
    title: "Equipamentos",
    href: "/docs/primitives/tooltip",
    description: "Tranquilidade para continuar trabalhando.",
  },
  {
    title: "Empresarial",
    href: "/docs/primitives/tooltip",
    description:
      "Seguros para o patrimônio de empresas de todos os tamanhos. Proteja seu negócio.",
  },
  {
    title: "Engenharia",
    href: "/docs/primitives/tooltip",
    description:
      "Proteção contra imprevistos que podem acontecer durante a sua obra.",
  },
  {
    title: " Transporte",
    href: "/docs/primitives/tooltip",
    description:
      "Proteja a entrega dos seus produtos e garanta a tranquilidade do seu negócio.",
  },
  {
    title: "Garantia",
    href: "/docs/primitives/tooltip",
    description:
      "Tranquilidade para a conclusão de contratos, operações e para garantia de processos judiciais.",
  },
  {
    title: "DPEM",
    href: "/docs/primitives/tooltip",
    description: "Proteção obrigatória para embarcações em favor de terceiros.",
  },
];

export function Navigation() {
  return (
    <NavigationMenu className="hidden lg:flex text-white">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:text-gray-400 hover:bg-blue-brand focus:bg-transparent active:bg-transparent data-[state=open]:bg-transparent data-active:bg-transparent ">
            Nossos Seguros
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-4xl gap-2 md:grid-cols-3 ">
              {components.map((component, index) => (
                <ListItem
                  key={index}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-blue-brand focus:bg-transparent active:bg-transparent data-[state=open]:bg-transparent data-active:bg-transparent ">
            Seguradora Digital
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-4xl gap-2 md:grid-cols-3">
              <ListItem href="/docs" title="História"></ListItem>
              <ListItem href="/docs/installation" title="Equipe"></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Eventos"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Imprensa"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Prêmios"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Parcerias e Afinidades"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-blue-brand focus:bg-transparent active:bg-transparent data-[state=open]:bg-transparent data-active:bg-transparent ">
            Para Corretores
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-4xl gap-2 md:grid-cols-3">
              <ListItem href="/docs" title="Akademia"></ListItem>
              <ListItem href="/docs/installation" title="APIs"></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Cadastro corretor"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Central de relacionamento"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Clube de benefícios"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Parcerias e Afinidades"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Cotação online"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Universidade Akad"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-blue-brand focus:bg-transparent active:bg-transparent data-[state=open]:bg-transparent data-active:bg-transparent ">
            Blog dos Seguros
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-4xl gap-2  md:grid-cols-3">
              <ListItem href="/docs" title="Produtos"></ListItem>
              <ListItem href="/docs/installation" title="APIs"></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Mercado"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Tecnologia"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Emprego"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Gestão"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-blue-brand focus:bg-transparent active:bg-transparent data-[state=open]:bg-transparent data-active:bg-transparent ">
            Contatos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-4xl gap-2  md:grid-cols-3">
              <ListItem
                href="/docs"
                title="Encontre um corretor Akad"
              ></ListItem>
              <ListItem
                href="/docs/installation"
                title="Aviso de sinistro"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Central de atendimento"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Serviços e assistências"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Emprego"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Segunda via de boleto"
              ></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Sugestões?"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Portal do corretor</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
