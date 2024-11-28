import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
export const metadata = {
  title: "Threads",
  description: "A New Application For Threads",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  childern,
}: {
  childern: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html>
        <body className={inter.className}>{childern}</body>
      </html>
    </ClerkProvider>
  );
}
