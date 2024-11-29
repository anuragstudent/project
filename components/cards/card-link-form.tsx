"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const linkFormSchema = z.object({
  cardId: z.string().min(1, "Please enter your card ID"),
  profileId: z.string().min(1, "Please select a profile"),
});

export function CardLinkForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof linkFormSchema>>({
    resolver: zodResolver(linkFormSchema),
    defaultValues: {
      cardId: "",
      profileId: "",
    },
  });

  function onSubmit(data: z.infer<typeof linkFormSchema>) {
    console.log(data);
    router.push("/dashboard");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="cardId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter the ID from your NFC card" {...field} />
              </FormControl>
              <FormDescription>
                You can find this ID on the back of your NFC card
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profileId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Profile</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a profile to link" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Personal Profile</SelectItem>
                  <SelectItem value="2">Business Profile</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select the profile you want to associate with this card
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Back
          </Button>
          <Button type="submit">Link Card</Button>
        </div>
      </form>
    </Form>
  );
}