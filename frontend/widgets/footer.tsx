import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn("py-4 border-t", className)}>
      <Container className="flex justify-center flex-wrap gap-7 items-center flex-col sm:flex-row">
        <Link href={"/"}>
          <Image
            src={"/logo.jpg"}
            alt="logo"
            width={90}
            height={56}
            className="w-16 lg:w-24"
          />
        </Link>

        {/* <nav>
          <ul className="flex flex-col sm:flex-row items-center flex-wrap gap-4">
            {footerMenu.map((item) => (
              <li key={item.title}>
                <Link className="hover:text-primary transition-colors duration-500" href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav> */}
      </Container>
    </footer>
  );
};
