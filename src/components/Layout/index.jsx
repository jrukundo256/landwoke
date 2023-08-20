// import { Sidebar } from "../menu/Sidebar";
// import { NavBar } from "../Navbar";

import { NavBar } from "../Navbar";
import { HeroContent } from "../Hero";

const links = [
    {
        "link": "/about",
        "label": "Features"
    },
    {
        "link": "#1",
        "label": "Learn",
        "links": [
            {
                "link": "/docs",
                "label": "Documentation"
            },
            {
                "link": "/resources",
                "label": "Resources"
            },
            {
                "link": "/community",
                "label": "Community"
            },
            {
                "link": "/blog",
                "label": "Blog"
            }
        ]
    },
    {
        "link": "/about",
        "label": "About"
    },
    {
        "link": "/pricing",
        "label": "Pricing"
    },
    {
        "link": "#2",
        "label": "Support",
        "links": [
            {
                "link": "/faq",
                "label": "FAQ"
            },
            {
                "link": "/demo",
                "label": "Book a demo"
            },
            {
                "link": "/forums",
                "label": "Forums"
            }
        ]
    }
]

export function Layout({ children }) {
    return (
        <main className="flex w-screen h-screen items-center justify-between outline fixed">
            <section className="w-full min-h-screen">
                <NavBar links={links} />
                <HeroContent />
                {/* <section className="px-5 py-5 text-[#434C50] h-[calc(100vh-70px-2rem)] overflow-y-scroll rounded-sm mx-7 my-2">{children}</section> */}
            </section>
        </main>
    );
}
