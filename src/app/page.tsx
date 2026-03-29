import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight">Welcome to CMMTY</h1>
      <p className="text-muted-foreground max-w-md text-center text-lg">
        A modern landing page built with Next.js, Tailwind CSS, and Shadcn UI.
      </p>
      <div className="flex gap-4">
        <Button size="lg">Get Started</Button>
        <Button variant="outline" size="lg" render={<Link href="/about" />}>
          About
        </Button>
      </div>
    </div>
  );
}
