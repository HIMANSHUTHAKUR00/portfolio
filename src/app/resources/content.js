import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Himanshu',
    lastName:  'Thakur',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Aspiring Software Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Kolkata',
    display: false,
    languages: []
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/HIMANSHUTHAKUR00',
    },
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/__him.anshu_/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:himanshuthakur.er@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <> Aspiring Web Designer and Developer</>,
    subline: <>I'm Himanshu, an aspiring software developer.After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Hello! I’m Himanshu, a passionate and driven software developer with a recent B.Tech in Computer Science Engineering from Accurate Institute of Technology. I’ve been honing my skills in C, JAVA, Java and have completed projects that have given me hands-on experience in [mention key skills or technologies, e.g., web development, mobile apps, data analysis].
        I’m particularly interested in [mention specific areas of interest, e.g., building innovative web applications, solving complex problems with code, or developing user-friendly interfaces]. My goal is to contribute to a dynamic team where I can continue to grow and make an impact by leveraging my [mention skills or qualities, e.g., strong analytical abilities, attention to detail, or collaborative mindset].</>
    },
    work: {
        display: false, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Corewave',
                timeframe: '2022',
                role: 'Web Designing',
                achievements: [
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
                {
                company: 'Creativ3',
                timeframe: '2018 - 2022',
                role: 'Lead Designer',
                achievements: [
                    <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
                ],
                images: [ ]
            }
        ]
    },
    
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Accurate Institute of Management & Technology',
                description: <>BTech in Computer Science Engineering.</>,
            },
            {
                name: 'Integrated Institute of Technology',
                description: <>Diploma in Information Technology Enabled Services & Management(ITESM).</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'HTML5',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                 images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

export { person, social, newsletter, home, about, blog, work };
