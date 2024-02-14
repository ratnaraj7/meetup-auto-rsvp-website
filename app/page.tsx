import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { code?: string };
}) {
  if (!!searchParams?.code) {
    let url = new URL(process.env.REDIRECT_CODE_AT);
    url.searchParams.set("code", searchParams.code);
    redirect(url.toString());
  }
  return (
    <section className="min-h-[100vh] bg-primary text-secondary px-4 selection:bg-tertiary">
      <div className="w-full border-2 py-10 border-transparent border-b-tertiary mb-20">
        <h1 className="font-bold text-4xl">Auto-RSVP Meetup CLI Tool</h1>
      </div>
      <p className="mb-4">
        Welcome to Auto-RSVP Meetup CLI tool! This command-line tool simplifies
        the process of managing your Meetup event RSVPs.
      </p>
      <p className="mb-4">
        Stay tuned for updates! We&apos;re working hard to bring you a tool that
        simplifies the process of managing your Meetup event RSVPs.
      </p>
      <p>For progress updates and announcements, check back on this page.</p>
      <p className="mb-4">
        If you have any questions or want to get in touch, feel free to contact
        us via email at{" "}
        <Link
          className="decoration-dashed underline hover:text-tertiary underline-offset-4 font-semibold"
          href="mailto:developerx167@gmail.com"
        >
          developerx167@gmail.com
        </Link>
        .
      </p>
    </section>
  );
}
