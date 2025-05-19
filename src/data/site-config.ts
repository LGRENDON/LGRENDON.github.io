export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    contact?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};



const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Luis Gerardo Rendón Tapia',
    subtitle: 'B.S. in Mechatronics Engineering (BME) // Concentration in Aeronautical Engineering',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/about'
            //href: '/blog'
        },
        {
            text: 'Tags',
            href: '/contact'
            //href: '/tags' quitar comentario cuando blog y tag este listo
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    contact: [
        {
            text: 'Dribble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Welcome to my portfolio! ',
        text: `I am a passionate mechatronics engineer-in-training with a creative spirit and a practical approach to solving complex problems. Beyond engineering, I see myself as a builder of ideas—combining innovation with technical discipline to transform concepts into real-world solutions that make an impact.

I love learning and experimenting, always seeking to connect different fields—mechanics, electronics, and programming—to create intelligent and efficient systems. I believe in the power of collaboration and leadership based on trust, respect, and a shared passion for what we do.

Every day, I enjoy tackling technical challenges, from designing prototypes to programming drones and developing autonomous vehicles. I also find great fulfillment in mentoring others in robotics. Fluent in three languages, I am committed to continuous growth, both professionally and personally.

My goal is to be a change-maker in engineering, driving projects that not only work but surprise and deliver real value. I am curious, methodical, and always ready to go the extra mile.`,

        image: {
            src: '/luis_foto.jpg',
            alt: 'This is me!'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },

    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
