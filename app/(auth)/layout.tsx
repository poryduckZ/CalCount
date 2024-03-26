import Image from "next/image";
import MainImage from "@/public/auth.webp";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen w-screen overflow-hidden">{children}</div>
    );
}
