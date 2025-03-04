import ContactForm from "@/components/contact-form";
import { Container } from "@/components/container";
import Heading from "@/components/heading";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contacts } from "@/data/contacts";
import { getContactPage } from "@/lib/actions";
import Link from "next/link";

const Page = async () => {
  const contact = await getContactPage();
  return (
    <section className="py-16">
      <Container className="flex flex-col gap-7 items-center">
        <Heading as="h2" className="text-center">
          {contact?.data?.title}
        </Heading>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7 w-full">
          {contact?.data?.contactsList?.map(
            ({ title, id, link, value }: any) => (
              <li key={id} className="w-full">
                <Card className="h-full">
                  <CardHeader className="flex flex-col gap-4 items-center">
                    <CardTitle className="text-center">{title}</CardTitle>
                    <CardDescription className="text-center">
                      {(link && link.length > 0 && (
                        <Link href={link}>{value}</Link>
                      )) ||
                        value}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </li>
            )
          )}
        </ul>
        <div className="w-full">
          <ContactForm isDialog={false} />
        </div>
      </Container>
    </section>
  );
};

export default Page;
