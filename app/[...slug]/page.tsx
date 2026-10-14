
import { notFound } from "next/navigation";
import {
  WellnessPage,
  wellnessMetadata,
} from "@/components/wellness-page";

const validPages = ["about", "programs", "education", "privacy"];

export function generateStaticParams() {
  return validPages.map((page) => ({
    slug: [page],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = slug?.[0];

  if (!page || slug.length !== 1 || !validPages.includes(page)) {
    return {};
  }

  return wellnessMetadata(`/${page}`);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = slug?.[0];

  if (!page || slug.length !== 1 || !validPages.includes(page)) {
    notFound();
  }

  return <WellnessPage path={`/${page}`} />;
}
