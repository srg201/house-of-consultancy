import { Container } from "@/components/container";
import Heading from "@/components/heading";
import { cn } from "@/lib/utils";
import React from "react";
import ReactMarkdown from "react-markdown";
interface Props {
  className?: string;
  data: any;
}

export const OurVision: React.FC<Props> = ({ className, data }) => {
  return (
    <section className={cn("py-16", className)}>
      <Container className="flex flex-col gap-4">
        <Heading className="text-center">{data?.data?.ourVisionTitle}</Heading>
        <ReactMarkdown className="text-center text-lg markdown">
          {data?.data?.ourVisionSubtitle}
        </ReactMarkdown>
      </Container>
    </section>
  );
};
