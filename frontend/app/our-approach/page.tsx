import { Container } from "@/components/container";
import Heading from "@/components/heading";
import { getOurApproach } from "@/lib/actions";
import { getMediaUrl } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

const Page = async () => {
  const approach = await getOurApproach();
  return (
    <section className="py-16">
      <Container className="flex flex-col gap-7 items-center">
        <Heading as="h2" className="text-center">
          {approach?.data?.title}
        </Heading>

        <ReactMarkdown className="text-center max-w-3xl">
          {approach?.data?.subtitle}
        </ReactMarkdown>

        <img
          src={getMediaUrl(approach?.data?.image?.url)}
          alt={approach?.data?.title}
          className="rounded-lg w-full h-auto "
        />
      </Container>
    </section>
  );
};

export default Page;
