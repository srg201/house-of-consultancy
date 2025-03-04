"use client";
import ContactForm from "@/components/contact-form";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { menu } from "@/data/menu";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  className?: string;
}

const Desktop = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex rounded-full bg-accent/50 backdrop-blur p-1">
          {menu.map((item) => (
            <li
              key={item.title}
              className={cn(
                "px-4 py-2 rounded-full font-medium border transition-colors duration-500 border-transparent hover:text-primary",
                {
                  "bg-primary text-primary-foreground shadow-inner border-border hover:text-white":
                    pathname === item.href,
                }
              )}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="gap-1 items-center hidden lg:flex">
        <ThemeToggle />
        <ContactForm>
          <Button>Contact Us</Button>
        </ContactForm>
      </div>
    </>
  );
};
const Mobile = () => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex gap-1 lg:hidden">
      <ThemeToggle />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-7 w-screen border-transparent">
          <DialogTitle className="hidden">Mobile Menu</DialogTitle>
          <nav>
            <ul className="flex flex-col">
              {menu.map((item) => (
                <li
                  key={item.title}
                  className={cn("py-2 text-xl font-medium", {
                    "text-primary": pathname === item.href,
                  })}
                >
                  <Link onClick={() => setOpen(false)} href={item.href}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-1 items-center">
            <ContactForm>
              <Button>Contact Us</Button>
            </ContactForm>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        "py-2 sticky w-full top-0 left-0 backdrop-blur bg-background/40 z-30",
        className
      )}
    >
      <Container className="flex justify-between gap-7 items-center">
        <Link href={"/"}>
          <Image
            src={"/logo.jpg"}
            alt="logo"
            width={90}
            height={56}
            className="w-16 lg:w-24"
          />
        </Link>
        <Desktop />
        <Mobile />
      </Container>
    </header>
  );
};
