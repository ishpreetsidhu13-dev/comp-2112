import Technology from "@/app/components/technology";

export default function About() {
    return (
        <main>
            <h1>About this Site</h1>
            <p>Built using Next.js in Fall 2026 for COMP2112.</p>
            <section>
                <h2>We are using the following technologies:</h2>
                <Technology name="React.js" url="https://react.dev" />
                <Technology name="Next.js" url="https://nextjs.org" />
                <Technology name="Tailwind CSS" url="https://tailwindcss.com" />
            </section>
        </main>
    );
}