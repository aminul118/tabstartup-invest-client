/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

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
import { ApiResponse } from "@/types";

// ---------- Validation (keep amount as string in the form, convert on submit) ----------
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  profession: z
    .string()
    .min(2, { message: "Profession must be at least 2 characters." }),
  email: z.string().email({ message: "Enter a valid email address." }),
  whatsapp: z.string().min(2, { message: "WhatsApp number must be valid." }),
  amount: z
    .string()
    .min(1, { message: "Please enter your investment amount." }),
});

// ---------- API response type (optional but nice) ----------

// ---------- Component ----------
const InvestmentForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      profession: "",
      email: "",
      whatsapp: "",
      amount: "",
    },
  });

  // Submit handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Build payload EXACTLY like Postman (amount as number)
    const payload = {
      name: values.name,
      email: values.email,
      profession: values.profession,
      whatsapp: values.whatsapp,
      amount: Number(values.amount),
    };

    // For your verification in dev:
    console.log("Sending payload:", payload);

    const toastId = toast.loading("Investment message sending...");
    try {
      const { data } = await axios.post<ApiResponse<unknown>>(
        "https://server.tabstartup.com/api/v1/invest/create-invest",
        payload
      );

      toast.success(data?.message || "Investment message sent successfully", {
        id: toastId,
      });

      // (optional) reset the form after success
      form.reset({
        name: "",
        profession: "",
        email: "",
        whatsapp: "",
        amount: "",
      });
    } catch (err) {
      const ax = err as AxiosError<any>;
      const serverMsg =
        ax.response?.data?.message ||
        ax.message ||
        "Investment message failed to send";
      toast.error(serverMsg, { id: toastId });
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
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp Number</FormLabel>
                <FormControl>
                  <Input placeholder="017XXXXXXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Investment Amount */}
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Investment Amount</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    placeholder="Enter amount (e.g., 5000)"
                    {...field}
                    // Keep value as string in the input; convert on submit
                    onChange={(e) => field.onChange(e.target.value)}
                  />
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

export default InvestmentForm;
