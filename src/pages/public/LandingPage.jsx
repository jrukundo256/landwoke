import { NavBar } from "../../landingPageComponents/Navbar";
import { HeroContent } from "../../landingPageComponents/Hero";
import { Intro } from "../../landingPageComponents/Intro";
import { LandDealsGrid } from "../../landingPageComponents/LandDealsGrid";
import { ArticlesCards } from "../../landingPageComponents/ArticleCards";
import { Footer } from "../../landingPageComponents/Footer";

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

export function LandingPage() {
    return (
        <main className="flex w-full">
            {/* <main className="flex w-screen items-center justify-between outline fixed"></main> */}
            <section className="w-full">
                <NavBar links={links} />
                <HeroContent />
                <Intro />
                <LandDealsGrid />
                <ArticlesCards />
                <Footer />
                {/* <section className="px-5 py-5 text-[#434C50] h-[calc(100vh-70px-2rem)] overflow-y-scroll rounded-sm mx-7 my-2">{children}</section> */}
            </section>
        </main>
    );
}
