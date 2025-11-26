// app/layout.js (or your root layout)
import { ThemeProvider } from "../context/ThemeContext";
import "../styles/globals.css";
export const metadata = {
  title: "Shashank Shetty",
  description: "portfolio made with NextJS, R3F",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
