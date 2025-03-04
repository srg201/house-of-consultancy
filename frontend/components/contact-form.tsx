"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/lib/actions";
import { toast } from "sonner";

const ComponentForm = ({ setOpen }: { setOpen?: (value: boolean) => void }) => {
  const [isPending, startTransition] = useTransition();
  const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email().min(2).max(50),
    message: z.string().min(2).max(500),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        console.log(values);
        await sendEmail(values);
        toast.success("Email sent successfully! We will contact you soon.");
      } catch (error) {
        toast.error("Failed to send email. Please try again later.");
      } finally {
        form.reset();
        setOpen && setOpen(false);
      }
    });
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Your Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@gmail.com" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    placeholder="Your Message"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </>
  );
};

const ContactForm = ({
  children,
  isDialog = true,
}: {
  children?: React.ReactNode;
  isDialog?: boolean;
}) => {
  const [open, setOpen] = React.useState(false);

  if (!isDialog) {
    return <ComponentForm />;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contacts us in Few Steps!</DialogTitle>
          <DialogDescription>
            You need just enter the form and we will contact you.
          </DialogDescription>
        </DialogHeader>

        <ComponentForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
