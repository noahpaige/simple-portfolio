"use client";

import dynamic from "next/dynamic";

const DynamicHomePage = dynamic(() => import("./components/HomePage"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <DynamicHomePage />
    </main>
  );
}
