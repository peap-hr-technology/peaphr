import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "peap.hr",
description: "The HR Platform for Growing Businesses",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body style={{
margin: 0,
padding: 0,
background: "#080c14",
color: "#dde4f0",
fontFamily: "system-ui, sans-serif",
minHeight: "100vh",
}}>
{children}
</body>
</html>
);
}