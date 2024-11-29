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
import { CardPreview } from "@/components/cards/card-preview";

const cardCustomizationSchema = z.object({
  design: z.string().min(1, "Please select a design"),
  color: z.string().min(1, "Please select a color"),
  material: z.string().min(1, "Please select a material"),
  text: z.string().max(50, "Text must be less than 50 characters"),
});

export function CardCustomizer() {
  const router = useRouter();
  const form = useForm<z.infer<typeof cardCustomizationSchema>>({
    resolver: zodResolver(cardCustomizationSchema),
    defaultValues: {
      design: "",
      color: "",
      material: "",
      text: "",
    },
  });

  function onSubmit(data: z.infer<typeof cardCustomizationSchema>) {
    console.log(data);
    router.push("/dashboard/cards/order");
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="design"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Design</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a design" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="minimal">Minimal</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="creative">Creative</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Color</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a color" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="black">Matte Black</SelectItem>
                      <SelectItem value="white">Pearl White</SelectItem>
                      <SelectItem value="gold">Gold</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="material"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Material</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a material" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="plastic">Premium Plastic</SelectItem>
                      <SelectItem value="metal">Metal</SelectItem>
                      <SelectItem value="wood">Wood</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Custom Text</FormLabel>
                  <FormControl>
                    <Input placeholder="Your custom text here" {...field} />
                  </FormControl>
                  <FormDescription>
                    This text will be printed on your card
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit">Proceed to Order</Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="hidden md:block">
        <CardPreview form={form} />
      </div>
    </div>
  );
}