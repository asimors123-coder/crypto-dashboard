export const metadata = {
  title: "Crypto Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body style={{
        margin: 0,
        padding: 0,
        background: "#111",
        color: "white",
        fontFamily: "Arial"
      }}>
        {children}
      </body>
    </html>
  );
}
