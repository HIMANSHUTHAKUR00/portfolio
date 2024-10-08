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
    languages: []
}

const newsletter = {
    display: false,
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
        link: 'mailto:himanshuthakur.er@gmail.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Hello! I’m Himanshu, a passionate and driven software developer with a recent B.Tech in Computer Science Engineering from Accurate Institute of Technology. I’ve been honing my skills in C, JAVA, JavaScript, HTML5, CSS3, MongoDb, NextJs, ExpressJs and have completed projects that have given me hands-on experience in web development.
        I’m particularly interested in building innovative web applications, solving complex problems with code, or developing user-friendly interfaces. My goal is to contribute to a dynamic team where I can continue to grow and make an impact by leveraging my analytical abilities.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Internship',
        experiences: [
            {
                company: 'Corewave',
                timeframe: '2022',
                role: 'Web Designing',
                achievements: [
                    <>I worked as an intern in this company. The internship was a duration of 3 months(feb'22 - April'22).</>,
                    <>I developed my skills in web designing & worked upon some of the projects to enhance those skills. </>
                ],
                images: [
                      {
                        src: '/images/projects/project-01/Internship certificate.jpg',
                        alt: 'Internship Certificate',
                        width: 12,
                        height: 15
                    }
                ]
            },
        
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
                title: 'HTML CSS JavaScript',
                description: <>Able to prototype in Bootstrap with JavaScript & used PHP for sending data.</>,
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
                description: <>Built this portfolio with Next.js + Once UI.</>,
                images: [
                    {
                        src: '/images/projects/project-01/portfolio.jpg',
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
