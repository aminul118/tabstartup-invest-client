/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

// ✅ Zod schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  profession: z.string().min(2, {
    message: "Profession must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Enter a valid email address.",
  }),
  whatApp: z.string().min(2, {
    message: "WhatsApp number must be valid.",
  }),
  invest: z.string().min(1, {
    message: "Please enter your investment amount.",
  }),
});

const InvestmentFrom = () => {
  // ✅ Setup form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      profession: "",
      email: "",
      whatApp: "",
      invest: "",
    },
  });

  // Form Submit Handle function
  const onSubmit = async (payload: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", payload);
    const toastId = toast.loading("Investment message sending...");
    try {
      const res = await axios.post(
        "https://server.tabstartup.com/invest/create-invest",
        payload
      );
      console.log(res);
      toast.success("Investment message send successfully", {
        id: toastId,
      });
    } catch (error: any) {
      toast.error("Investment message failed to send", { id: toastId });
    } finally {
      form.reset();
    }
  };

  return (
    <div className="rounded-xl shadow-md p-6 border sticky top-0 lg:min-w-md">
      <p className="text-sm mb-6">
        আপনার স্মার্ট ইনভেস্টমেন্ট জার্নি শুরু করতে নিচের ফর্মটি পূরণ করুন।
        আমাদের এক্সপার্ট টিম আপনার সাথে দ্রুত যোগাযোগ করবে।
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Profession */}
          <FormField
            control={form.control}
            name="profession"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profession</FormLabel>
                <FormControl>
                  <Input placeholder="Your profession" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@mail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* WhatsApp */}
          <FormField
            control={form.control}
            name="whatApp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp Number</FormLabel>
                <FormControl>
                  <Input placeholder="+8801XXXXXXXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Investment */}
          <FormField
            control={form.control}
            name="invest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Investment Amount</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter amount" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default InvestmentFrom;
