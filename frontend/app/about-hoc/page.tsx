import { Container } from "@/components/container";
import Heading from "@/components/heading";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ourValues } from "@/data/our-values";
import { getAboutPage } from "@/lib/actions";
import { getMediaUrl } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

const Page = async () => {
  const content = await getAboutPage();
  return (
    <section className="py-16">
      <Container className="flex flex-col gap-7 items-center">
        <Heading as="h2" className="text-center">
          {content?.data?.aboutTitle}
        </Heading>
        <ReactMarkdown className="text-center max-w-3xl">
          {content?.data?.aboutSubtitle}
        </ReactMarkdown>

        <Heading as="h2" className="mt-14">
          {content?.data?.foundersTitle}
        </Heading>
        <ReactMarkdown className="text-center max-w-3xl">
          {content?.data?.foundersSubtitle}
        </ReactMarkdown>

        <Heading as="h3" className="mt-14">
          Our values
        </Heading>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {content?.data?.valuesList?.map(({ subtitle, image, title }: any) => (
            <li key={title}>
              <Card>
                <CardHeader className="flex flex-col gap-4 items-center">
                  {/* <image size={60} className="stroke-primary" /> */}
                  <img
                    src={getMediaUrl(image?.url)}
                    alt={title}
                    width={180}
                    height={180}
                    className="object-contain h-auto max-h-48 rounded-lg"
                  />
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="text-center">
                    {subtitle}
                  </CardDescription>
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
