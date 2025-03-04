'use client';
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  className?: string;
}

const Page: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  return (
    <section className={cn("py-16 flex items-center h-full", className)}>
      <Container className="flex flex-col gap-7 items-center">
        <h1 className="text-3xl font-medium text-center">
          Sorry, we didn&apos;t find page you were looking for
        </h1>
        <p className="text-center">Maybe this page is in building process or you just missed it</p>
        <Button onClick={() => router.back()}>
          <ArrowLeft /> Go back
        </Button>
      </Container>
    </section>
  );
};

export default Page;
