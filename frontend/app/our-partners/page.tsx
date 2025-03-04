import { Container } from "@/components/container";
import Heading from "@/components/heading";
import { Card, CardHeader } from "@/components/ui/card";
import { ourPartners } from "@/data/our-partners";
import { getOurPartners } from "@/lib/actions";
import { getMediaUrl } from "@/lib/utils";
import Image from "next/image";

const Page = async () => {
  const partners = await getOurPartners();
  return (
    <section className="py-16">
      <Container className="flex flex-col gap-7 items-center">
        <Heading as="h3" className="mt-14">
          {partners?.data?.title}
        </Heading>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7">
          {partners?.data?.partnersList?.map(({ name, image, id }: any) => (
            <li key={id}>
              <Card>
                <CardHeader className="flex flex-col gap-4 items-center">
                  <img
                    src={getMediaUrl(image?.url)}
                    alt={name}
                    width={180}
                    height={100}
                  />
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
