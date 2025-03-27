import { Rubik } from "next/font/google";

const rubikLight = Rubik({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const rubikMedium = Rubik({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

const rubikBold = Rubik({
  subsets: ["latin"],
  weight: "900",
  display: "swap",
});

export const metadata = {
  title: "Ghostbyte Library",
  description: "Categorized collections of useful websites and tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <style jsx global>{`
          * {
            font-family: ${rubikLight.style.fontFamily};
          }

          h1, .bold {
            font-family: ${rubikBold.style.fontFamily};
          }

          h2, h3, h4 {
            font-family: ${rubikMedium.style.fontFamily};
          }
        `}</style> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
