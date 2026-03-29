import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight">About CMMTY</h1>
      <p className="text-muted-foreground max-w-md text-center text-lg">
        This is an example route to demonstrate that the project supports
        multiple pages out of the box.
      </p>
      <Button variant="outline" size="lg" render={<Link href="/" />}>
        Back to Home
      </Button>
    </div>
  );
}
