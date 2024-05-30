import Link from "next/link";

export default function NotFoundBoundary() {
    return (
        <div>
            <h1>This page cannot be found.</h1>
            <Link href={'/'}>Go to home</Link>
        </div>
    );
}