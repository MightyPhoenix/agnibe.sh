import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
      {/* <nav className="mb-8 flex items-center justify-center space-x-4">
        <Link
          href="#"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          Articles
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          Projects
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          Contact
        </Link>
      </nav> */}
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-4xl font-bold tracking-tight font-['Courier_New', 'monospace'] text-foreground sm:text-5xl">
          Agnibesh M
        </h1>
        <p className="mt-4 text-xl font-medium font-['Courier_New', 'monospace'] text-muted-foreground">
          ✨ Leading Engineering @ GlowRadius
        </p>
        <p className="mt-6 text-base font-['Courier_New', 'monospace'] text-muted-foreground">
          ...
        </p>
      </div>
    </div>
  );
}
