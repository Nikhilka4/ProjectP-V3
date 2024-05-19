"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import buildingImage from "../assets/construct.jpg";
import Footer from "./Footer";

type Props = {};

const formSchema = z.object({
  fullName: z
    .string()
    .min(6, {
      message: "Full Name must be at least 6 characters.",
    })
    .refine((value) => /^[A-Za-z\s]+$/.test(value), {
      message: "Full Name can only contain alphabets and spaces.",
    }),
  emailAddress: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().length(10, {
    message: "Phone number must be 10 digits.",
  }),
});

const FormAndFooter = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      phone: "",
    },
  });

  const handleSubmit = () => {
    alert(`Form submitted! ${JSON.stringify(form.getValues(), null, 2)}`);
  };

  return (
    <div className="lg:pt-[12vh] lg:min-h-screen">
      <div className="container mx-auto p-4">
        <div className="my-5">
          <p className="text-3xl font-bold text-center mb-3">All set to begin?</p>
          <p className="text-lg font-light text-center">
          Fill out the Appointment Form to begin the procedure 
          </p>
        </div>
        <div className="lg:flex">
          <div className="lg:basis-2/3">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="bg-[#fff5ea] bg-opacity-20 backdrop-filter backdrop-blur-3xl border border-gray-300 rounded-lg p-6 shadow-lg  mx-auto max-w-[800px] flex flex-col justify-center gap-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john doe"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="johndoe@gmail.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="1234567890"
                            type="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <Button
                  type="submit"
                  className="lg:w-[200px] shadow-2xl rounded-xl"
                  variant="primary"
                >
                  Book an appointment
                </Button>
              </form>
            </Form>
          </div>
          <div className="hidden lg:block lg:basis-1/3">
            <Image
              src={buildingImage}
              alt="Building"
              width={500}
              height={300}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormAndFooter;

{
  /* <div className="hidden md:block mt-8 md:mt-0 md:w-1/2">
      <Image src={buildingImage} alt="Building" width={500} height={300} />
    </div> */
}
