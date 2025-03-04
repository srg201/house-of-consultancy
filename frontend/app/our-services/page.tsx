import { Container } from "@/components/container";
import Heading from "@/components/heading";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { insurances } from "@/data/insurances";
import { getOurServices } from "@/lib/actions";
import { getMediaUrl } from "@/lib/utils";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const Page = async () => {
  const services = await getOurServices();
  console.log("services", services);
  return (
    <section className="py-16">
      <Container className="flex flex-col gap-7 items-center">
        <Heading as="h2" className="text-center">
          {services?.data?.title}
        </Heading>
        <ReactMarkdown className="text-center max-w-3xl">
          {services?.data?.subtitle}
        </ReactMarkdown>

        <Heading as="h2" className="mt-14">
          {services?.data?.classesTitle}
        </Heading>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services?.data?.classesList?.map(({ id, title, image }: any) => (
            <li key={id}>
              <Card>
                <CardHeader className="flex flex-col gap-4 items-center">
                  <img
                    src={getMediaUrl(image?.url)}
                    alt={title}
                    width={180}
                    height={100}
                    className="object-cover w-full h-auto max-h-48"
                  />
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Page;
