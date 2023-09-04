import Navbar from "@/app/components/navbar/Navbar";
import { Suspense } from "react";
import "../styles/globals.css";
import Loading from "./loading";

export const metadata = {
  title: "Continental Realty Group",
  description: "Top Tier Real Estate Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="relative overflow-y-auto"
        suppressHydrationWarning={true}
      >
        <div className="relative z-20">
          <Navbar />
        </div>
        <Suspense
          fallback={
            <div className="absolute top-1/2 left-1/2">
              <Loading />
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
