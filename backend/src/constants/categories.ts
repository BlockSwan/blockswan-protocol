export const categories = [
    {
        name: 'Web design & development',
        emoji: '💻',
        description: 'Create a professional website that meets your needs.',
        url: 'web-design',
        faqs: [
            {
                question: 'What is web design & development?',
                answer: 'Web design & development refers to the process of creating and maintaining a website. This involves a range of skills and disciplines, including graphic design, user experience design, and web programming.',
            },
            {
                question:
                    'What services can I expect from a web design & development provider?',
                answer: 'A web design & development provider can offer a variety of services, including website design, development, and maintenance; e-commerce development; and responsive design for mobile devices. They may also offer search engine optimization (SEO) and social media integration.',
            },
            {
                question:
                    'What should I look for in a web design & development provider?',
                answer: 'When looking for a web design & development provider, you should consider their experience, portfolio, and customer reviews. You should also make sure they are able to meet your specific needs and requirements, and can provide support and maintenance for your website after it is launched.',
            },
        ],
        subCategories: [
            {
                name: 'Responsive design',
                description: 'Create websites that look great on any device.',
                url: 'responsive-design',
                booleanDeliverables: [
                    'Flexible layout',
                    'Mobile-friendly',
                    'Adaptive design',
                    'User-friendly interface',
                    'Scalable images',
                    'Fast loading time',
                    'Customizable design',
                ],
                selectableDeliverable: [
                    {
                        name: 'Browser Compatibility',
                    },
                ],
            },
            {
                name: 'Front-end development',
                description: 'Build the user-facing part of a website.',
                url: 'front-end-development',
                booleanDeliverables: [
                    'Flexible layout',
                    'Mobile-friendly',
                    'Adaptive design',
                    'User-friendly interface',
                    'Scalable images',
                    'Fast loading time',
                    'Customizable design',
                ],
                selectableDeliverable: [
                    {
                        name: 'Browser Compatibility',
                    },
                ],
            },
            {
                name: 'Back-end development',
                description:
                    'Develop the server-side and behind-the-scenes functionality of a website.',
                url: 'back-end-development',
                booleanDeliverables: [
                    'Implementation of business logic and data processing',
                    'Integration with databases and other back-end systems',
                    'Creation of APIs for communication with the front-end and other applications',
                    'Scalability and performance of the back-end components',
                ],
                selectableDeliverables: [
                    {
                        name: 'Back-end languages',
                    },
                    {
                        name: 'Back-end frameworks',
                    },
                ],
            },
            {
                name: 'CMS development',
                description:
                    'Build online stores and enable online transactions.',
                url: 'e-commerce-development',
                booleanDeliverables: [
                    'Shopping cart integration',
                    'Product catalog management',
                    'Order fulfillment and tracking',
                    'Customer account management',
                    'Sales and tax reporting',
                    'Mobile optimization',
                ],
                selectableDeliverable: [
                    {
                        name: 'Payment integration',
                    },
                    {
                        name: 'CMS',
                    },
                ],
            },
        ],
    },
    {
        name: 'Graphic design & branding',
        emoji: '🎨',
        description: 'Develop a unique and memorable brand identity.',
        url: 'graphic-design',
        faqs: [
            {
                question: 'What is graphic design?',
                answer: 'Graphic design is the art and practice of creating visual content, such as logos, brochures, packaging, and advertisements, to communicate ideas and information to a specific audience.',
            },
            {
                question: 'What is branding?',
                answer: "Branding refers to the overall marketing strategy that defines a company's identity, including its name, tone, and visual appearance. It encompasses everything from the company's logo and color scheme to its messaging and tone of voice.",
            },
            {
                question:
                    'What is the relationship between graphic design and branding?',
                answer: 'Graphic design and branding are closely related, as graphic design is often used to create the visual elements that represent a brand. Graphic design helps to bring a brand to life through the use of color, typography, imagery, and other visual elements, while branding helps to define the overall strategy and direction for the use of these visual elements.',
            },
            {
                question:
                    'What are some common services offered in the category of graphic design and branding in a digital services marketplace?',
                answer: 'Some common services offered in the category of graphic design and branding in a digital services marketplace include logo design, branding strategy development, brand guidelines creation, and packaging design.',
            },
        ],
        subCategories: [
            {
                name: 'Logo design',
                description:
                    'Create a unique and memorable logo for your brand.',
                url: 'logo-design',
                booleanDeliverables: [
                    'Original design',
                    'Vector format',
                    'Multiple variations',
                    'Unlimited revisions',
                    'Free revisions for 30 days',
                    'Delivery within 7 days',
                    'Copyright transfer',
                ],
                selectableDeliverables: [
                    {
                        name: 'Logo Style',
                    },
                ],
            },
            {
                name: 'Branding',
                description:
                    'Develop a consistent and cohesive brand identity.',
                url: 'branding',
                booleanDeliverables: [
                    'Logo design',
                    'Brand guidelines',
                    'Color palette',
                    'Typography',
                    'Business cards',
                    'Letterhead and envelopes',
                    'Social media graphics',
                ],
                selectableDeliverables: [],
            },
            {
                name: 'Print design',
                description: 'Design effective and attractive print materials.',
                url: 'print-design',
                booleanDeliverables: [
                    'Brochure designs',
                    'Business card designs',
                    'Catalogs',
                    'Flyer designs',
                    'Poster designs',
                    'Signage designs',
                    'Packaging designs',
                ],
                selectableDeliverables: [
                    {
                        name: 'Print format',
                    },
                ],
            },
            {
                name: 'Packaging design',
                description:
                    'Design packaging that showcases your product and stands out on the shelf.',
                url: 'packaging-design',
                booleanDeliverables: ['Compliance with regulation'],
                selectableDeliverables: [
                    {
                        name: 'Packaging format',
                    },
                ],
            },
            {
                name: 'Illustration',
                description:
                    'Create original and compelling illustrations for your brand and marketing materials.',
                url: 'illustration',
                booleanDeliverables: [
                    'Concept sketches',
                    'Final illustrations',
                    'Multiple revisions',
                    'Vector graphics',
                    'Digital coloring',
                    'Hand-drawn elements',
                ],
                selectableDeliverables: [
                    {
                        name: 'Illustration style',
                    },
                    {
                        name: 'Illustration medium',
                    },
                ],
            },
        ],
    },
    {
        name: 'Content writing & editing',
        emoji: '✍️',
        description: 'Produce high-quality and engaging content.',
        url: 'content-writing',
        faqs: [
            {
                question:
                    'What kind of services can I expect to find in the content writing and editing category?',
                answer: 'In the content writing and editing category, you can expect to find a range of services related to creating and refining written content. This can include services such as writing articles, blog posts, product descriptions, and marketing copy, as well as editing and proofreading existing content to improve its clarity, accuracy, and effectiveness.',
            },
            {
                question:
                    'Who typically provides content writing and editing services in a digital marketplace?',
                answer: 'In a digital marketplace, content writing and editing services are typically provided by freelance writers and editors who have experience creating written content for a variety of purposes and audiences. These professionals may have backgrounds in journalism, marketing, communications, or a related field, and may specialize in a specific type of content or industry.',
            },
            {
                question:
                    'What should I look for when choosing a content writer or editor in a digital marketplace?',
                answer: "When choosing a content writer or editor in a digital marketplace, there are several key factors to consider. These can include the professional's experience and expertise, their portfolio of past work, their ability to meet deadlines, and their willingness to collaborate and communicate effectively. It can also be helpful to read reviews from previous clients to get a sense of the quality of their work and their level of professionalism.",
            },
        ],
        subCategories: [
            {
                name: 'Copywriting',
                description:
                    'Write persuasive and engaging content for marketing purposes.',
                url: 'copywriting',
                booleanDeliverables: [
                    'Brand voice development',
                    'SEO optimization',
                    'Proofreading and editing',
                    'Multiple revisions',
                    'Content strategy',
                    'Keyword research',
                ],
                selectableDeliverables: [
                    {
                        name: 'Copy type',
                    },
                    {
                        name: 'Industry',
                    },
                ],
            },
            {
                name: 'Editing',
                description:
                    'Improve the clarity, style, and accuracy of your written content.',
                url: 'editing',
                booleanDeliverables: [
                    'Grammar and punctuation corrections',
                    'Spelling and typos corrections',
                    'Sentence structure improvements',
                    'Fact checking',
                    'Consistency checks',
                    'Style guide adherence',
                ],
                selectableDeliverables: [
                    {
                        name: 'Editing type',
                    },
                    {
                        name: 'Document type',
                    },
                ],
            },
            {
                name: 'Proofreading',
                description:
                    'Check your written content for grammar, spelling, and punctuation errors.',
                url: 'proofreading',
                booleanDeliverables: [
                    'Grammar and punctuation corrections',
                    'Spelling and typos corrections',
                    'Consistency checks',
                    'Style guide adherence',
                    'Marking up document with changes',
                    'Summary of changes',
                ],
                selectableDeliverables: [
                    {
                        name: 'Document type',
                    },
                ],
            },
            {
                name: 'SEO writing',
                description:
                    'Write content that is optimized for search engines.',
                url: 'seo-writing',
                booleanDeliverables: [
                    'Keyword research',
                    'Meta tags and titles',
                    'Alt tags for images',
                    'Internal linking',
                    'Sitemap creation',
                    'Robots.txt optimization',
                    'URL optimization',
                ],
                selectableDeliverables: [
                    {
                        name: 'Word count',
                    },
                    {
                        name: 'Number of keywords',
                    },
                    {
                        name: 'Target audience',
                    },
                    {
                        name: 'Target location',
                    },
                ],
            },
            {
                name: 'Ghostwriting',
                description:
                    'Write content on behalf of another person or organization.',
                url: 'ghostwriting',
                booleanDeliverables: [
                    'Original content',
                    'Editing and proofreading',
                    'Research and fact-checking',
                    'Consultation with the client',
                    'Multiple revisions',
                    'Confidentiality',
                ],
                selectableDeliverables: [
                    {
                        name: 'Word count',
                    },
                    {
                        name: 'Number of revisions',
                    },
                    {
                        name: 'Style of writing',
                    },
                    {
                        name: 'Subject matter',
                    },
                ],
            },
        ],
    },
    {
        name: 'Social media & strategy',
        emoji: '📱',
        description: 'Build and manage your social media presence.',
        url: 'social-media',
        faqs: [
            {
                question:
                    'What kind of services can I expect to find in the social media management and strategy category?',
                answer: "In the social media management and strategy category, you can expect to find a range of services related to planning, implementing, and managing a company's presence on social media platforms. This can include services such as creating and scheduling posts, engaging with followers, monitoring and responding to comments and messages, and analyzing the performance of a company's social media accounts.",
            },
            {
                question:
                    'Who typically provides social media management and strategy services in a digital marketplace?',
                answer: 'In a digital marketplace, social media management and strategy services are typically provided by professionals who have experience planning and implementing effective social media campaigns for businesses. These individuals may have backgrounds in marketing, communications, or a related field, and may have expertise in specific social media platforms or industries.',
            },
            {
                question:
                    'What should I look for when choosing a social media manager or strategist in a digital marketplace?',
                answer: "When choosing a social media manager or strategist in a digital marketplace, there are several key factors to consider. These can include the professional's experience and expertise in social media, their ability to develop and implement a cohesive and effective strategy, their understanding of the target audience and market, and their ability to measure and analyze the performance of social media campaigns.",
            },
        ],
        subCategories: [
            {
                name: 'Content creation',
                description:
                    'Create engaging content for your social media channels.',
                url: 'content-creation',
                booleanDeliverables: [
                    'Blog posts',
                    'Articles',
                    'Social media posts',
                    'Infographics',
                    'E-books',
                    'Whitepapers',
                    'Case studies',
                ],
                selectableDeliverables: [
                    {
                        name: 'Content format',
                    },
                    {
                        name: 'Content topic',
                    },
                ],
            },
            {
                name: 'Community management',
                description: 'Manage and grow your social media community.',
                url: 'community-management',
                booleanDeliverables: [
                    'Moderation of online community',
                    'Creation of community guidelines',
                    'Engagement with community members',
                    'Generation of content for community',
                    'Organization of community events and activities',
                    'Tracking and analysis of community metrics',
                ],
                selectableDeliverables: [
                    {
                        name: 'Community platform',
                    },
                    {
                        name: 'Frequency of engagement',
                    },
                ],
            },
            {
                name: 'Advertising',
                description:
                    'Promote your business and reach your target audience on social media.',
                url: 'advertising',
                booleanDeliverables: [
                    'Audience research',
                    'Campaign planning',
                    'Ad design',
                    'Placement',
                    'Performance tracking',
                    'Optimization',
                ],
                selectableDeliverables: [
                    {
                        name: 'Ad platform',
                    },
                    {
                        name: 'Ad format',
                    },
                ],
            },
            {
                name: 'Analytics',
                description:
                    'Track and analyze the performance of your social media campaigns.',
                url: 'analytics',
                booleanDeliverables: [
                    'Data collection',
                    'Data cleaning',
                    'Data analysis',
                    'Reporting',
                    'Recommendations',
                ],
                selectableDeliverables: [
                    {
                        name: 'Data source',
                    },
                    {
                        name: 'Reporting format',
                    },
                ],
            },
            {
                name: 'Strategy development',
                description:
                    'Develop a comprehensive social media strategy to achieve your business goals.',
                url: 'strategy-development',
                booleanDeliverables: [
                    'Goal identification',
                    'Market research',
                    'SWOT analysis',
                    'Strategy creation',
                    'Implementation planning',
                    'Monitoring and adjustment',
                ],
                selectableDeliverables: [
                    {
                        name: 'Industry',
                    },
                    {
                        name: 'Strategy type',
                    },
                ],
            },
        ],
    },
    {
        name: 'Video & animation',
        emoji: '🎥',
        description: 'Create professional and engaging videos.',
        url: 'video-animation',
        faqs: [
            {
                question:
                    'What kind of services can I expect to find in the video and animation category?',
                answer: 'In the video and animation category, you can expect to find a range of services related to creating visual media for various purposes. This can include services such as creating promotional videos, explainer videos, animations, and visual effects for video content, as well as editing and post-production work to enhance the quality and impact of the final product.',
            },
            {
                question:
                    'Who typically provides video and animation services in a digital marketplace?',
                answer: 'In a digital marketplace, video and animation services are typically provided by professionals who have experience creating and producing visual media. These individuals may have backgrounds in film, television, graphic design, or a related field, and may have expertise in specific techniques or styles of video and animation.',
            },
            {
                question:
                    'What should I look for when choosing a video or animation provider in a digital marketplace?',
                answer: "When choosing a video or animation provider in a digital marketplace, there are several key factors to consider. These can include the professional's portfolio of past work, their ability to meet deadlines and work within a budget, their level of creativity and artistic vision, and their ability to understand and fulfill the specific needs and goals of the project.",
            },
        ],
        subCategories: [
            {
                name: 'Video editing',
                description: 'Edit and enhance your videos.',
                url: 'video-editing',
                booleanDeliverables: [
                    'Importing and organizing footage',
                    'Trimming and cutting clips',
                    'Adding transitions and effects',
                    'Incorporating audio',
                    'Color correction and grading',
                    'Exporting and delivering final video',
                ],
                selectableDeliverables: [
                    {
                        name: 'Video format',
                    },
                    {
                        name: 'Delivery method',
                    },
                ],
            },
            {
                name: 'Animation',
                description: 'Create animated videos and graphics.',
                url: 'animation',
                booleanDeliverables: [
                    'Storyboarding',
                    'Character design',
                    'Background design',
                    'Animation production',
                    'Audio integration',
                    'Rendering and exporting',
                ],
                selectableDeliverables: [
                    {
                        name: 'Animation style',
                    },
                    {
                        name: 'Delivery format',
                    },
                ],
            },
            {
                name: 'Motion graphics',
                description: 'Design engaging graphics that move on screen.',
                url: 'motion-graphics',
                booleanDeliverables: [
                    'Concept development',
                    'Storyboarding',
                    'Design and layout',
                    'Animation production',
                    'Audio integration',
                    'Rendering and exporting',
                ],
                selectableDeliverables: [
                    {
                        name: 'Software',
                    },
                    {
                        name: 'Delivery format',
                    },
                ],
            },

            {
                name: 'Visual effects',
                description:
                    'Add special effects to your videos to make them more impactful.',
                url: 'visual-effects',
                booleanDeliverables: [
                    'Planning and pre-visualization',
                    '3D modeling and animation',
                    'Rotoscoping and compositing',
                    'Color correction and grading',
                    'Editing and post-production',
                    'Rendering and exporting',
                ],
                selectableDeliverables: [
                    {
                        name: 'Software',
                    },
                    {
                        name: 'Delivery format',
                    },
                ],
            },
        ],
    },
    {
        name: 'Online marketing & advertising',
        emoji: '📢',
        description: 'Reach and engage your target audience online.',
        url: 'online-marketing',
        faqs: [
            {
                question:
                    'What is the online marketing and advertising category in the Blockswan Protocol?',
                answer: 'The online marketing and advertising category in the Blockswan Protocol is a collection of services related to promoting and advertising a business or organization on the internet. This can include services such as search engine optimization (SEO), pay-per-click (PPC) advertising, content marketing, email marketing, and social media advertising, as well as consulting and strategy services to help businesses develop and implement effective online marketing campaigns.',
            },
            {
                question:
                    'Who provides online marketing and advertising services in the Blockswan Protocol?',
                answer: 'In the Blockswan Protocol, online marketing and advertising services are provided by professionals who have experience and expertise in promoting and advertising businesses on the internet. These individuals may have backgrounds in marketing, advertising, communications, or a related field, and may have specialized knowledge and skills in specific online marketing techniques and platforms.',
            },
            {
                question:
                    'What should I look for when choosing an online marketing and advertising provider in the Blockswan Protocol?',
                answer: "When choosing an online marketing and advertising provider in the Blockswan Protocol, there are several key factors to consider. These can include the professional's experience and track record, their ability to understand and meet the specific needs and goals of the project, their knowledge of the latest trends and best practices in online marketing, and their ability to provide clear and concise reports and analysis of campaign performance.",
            },
        ],
        subCategories: [
            {
                name: 'Search engine optimization (SEO)',
                description:
                    "Increase your website's visibility on search engines.",
                url: 'search-engine-optimization',
                booleanDeliverables: [
                    'Keyword research',
                    'Competitor analysis',
                    'On-page optimization',
                    'Off-page optimization',
                    'Link building',
                    'Reporting and analysis',
                ],
                selectableDeliverables: [
                    {
                        name: 'Search engine',
                    },
                    {
                        name: 'Reporting frequency',
                    },
                ],
            },
            {
                name: 'Pay-per-click (PPC) advertising',
                description:
                    'Advertise on search engines and pay only for clicks.',
                url: 'pay-per-click-advertising',
                booleanDeliverables: [
                    'Keyword research',
                    'Ad copywriting',
                    'Ad targeting and placement',
                    'Budget and bid management',
                    'Conversion tracking',
                    'Reporting and analysis',
                ],
                selectableDeliverables: [
                    {
                        name: 'Ad platform',
                    },
                    {
                        name: 'Campaign type',
                    },
                ],
            },
            {
                name: 'Email marketing',
                description: 'Send targeted and personalized emails.',
                url: 'email-marketing',
                booleanDeliverables: [
                    'Audience segmentation',
                    'Template design',
                    'Copywriting',
                    'Scheduling and sending',
                    'Tracking and analysis',
                    'Optimization',
                ],
                selectableDeliverables: [
                    {
                        name: 'Email service provider',
                    },
                    {
                        name: 'Campaign frequency',
                    },
                ],
            },
            {
                name: 'Social media marketing',
                description:
                    'Promote your business and engage with your audience.',
                url: 'social-media-marketing',
                booleanDeliverables: [
                    'Audience research and targeting',
                    'Content creation and scheduling',
                    'Advertising and promotion',
                    'Engagement with followers',
                    'Tracking and analysis',
                    'Optimization',
                ],
                selectableDeliverables: [
                    {
                        name: 'Social media platform',
                    },
                    {
                        name: 'Campaign frequency',
                    },
                ],
            },
        ],
    },
    {
        name: 'Virtual assistance & support',
        emoji: '🤖',
        description: 'Professional support for a variety of tasks.',
        url: 'virtual-assistance',
        faqs: [
            {
                question:
                    'What is the virtual assistance and support category in the Blockswan Protocol?',
                answer: 'The virtual assistance and support category in the Blockswan Protocol is a collection of services related to providing remote assistance and support to businesses and organizations. This can include services such as scheduling and calendar management, data entry and research, customer service and support, and general administrative tasks, as well as specialized support services in areas such as IT, HR, and legal.',
            },
            {
                question:
                    'Who provides virtual assistance and support services in the Blockswan Protocol?',
                answer: 'In the Blockswan Protocol, virtual assistance and support services are provided by professionals who have experience and expertise in providing remote support to businesses and organizations. These individuals may have backgrounds in administration, customer service, or a related field, and may have specialized knowledge and skills in specific areas of support and assistance.',
            },
            {
                question:
                    'What should I look for when choosing a virtual assistant or support provider in the Blockswan Protocol?',
                answer: "When choosing a virtual assistant or support provider in the Blockswan Protocol, there are several key factors to consider. These can include the professional's experience and track record, their ability to understand and meet the specific needs and goals of the project, their ability to communicate and collaborate effectively, and their availability and flexibility to provide support as needed.",
            },
        ],
        subCategories: [
            {
                name: 'Virtual receptionist',
                description: 'Answer calls and greet visitors virtually.',
                url: 'virtual-receptionist',
                booleanDeliverables: [
                    'Answering calls during business hours',
                    'Responding to inquiries via phone and email',
                    'Scheduling appointments',
                    'Providing basic information about the business',
                    'Handling emergency calls and forwarding important messages',
                    'Maintaining customer information and records',
                ],
                selectableDeliverables: [
                    {
                        name: 'Call forwarding',
                    },
                    {
                        name: 'Operating hours',
                    },
                ],
            },
            {
                name: 'Technical support',
                description:
                    'Provide technical assistance to customers and clients.',
                url: 'technical-support',
                booleanDeliverables: [
                    'Responding to customer inquiries via phone, email, or chat',
                    'Diagnosing and troubleshooting technical issues',
                    'Providing step-by-step instructions for resolving issues',
                    'Escalating complex issues to higher level support teams',
                    'Maintaining customer records and tracking issues',
                    'Providing updates and follow-up to customers',
                ],
                selectableDeliverables: [
                    {
                        name: 'Support channels',
                    },
                    {
                        name: 'Support hours',
                    },
                ],
            },
            {
                name: 'Travel and event coordination',
                description:
                    'Organize and plan your travel and events seamlessly.',
                url: 'travel-event-coordination',
                booleanDeliverables: [
                    'Booking flights and accommodations',
                    'Creating itineraries and schedules',
                    'Coordinating with vendors and suppliers',
                    'Arranging transportation and activities',
                    'Managing budgets and expenses',
                    'Providing updates and changes',
                ],
                selectableDeliverables: [
                    {
                        name: 'Travel type',
                    },
                    {
                        name: 'Event type',
                    },
                ],
            },
            {
                name: 'Data entry and research',
                description: 'Enter and organize data, and conduct research.',
                url: 'data-entry-research',
                booleanDeliverables: [
                    'Entering data into spreadsheets or databases',
                    'Cleaning and organizing data',
                    'Conducting online and offline research',
                    'Verifying and validating information',
                    'Summarizing and presenting findings',
                    'Maintaining accurate and up-to-date records',
                ],
                selectableDeliverables: [
                    {
                        name: 'Data format',
                    },
                    {
                        name: 'Research focus',
                    },
                ],
            },
        ],
    },
    {
        name: 'Translation & localization',
        emoji: '🌐',
        description: 'Translate and adapt your product to new markets.',
        url: 'translation',
        faqs: [
            {
                question:
                    'What is the translation and localization category in the Blockswan Protocol?',
                answer: 'The translation and localization category in the Blockswan Protocol is a collection of services related to translating and adapting content for different languages and cultural contexts. This can include services such as translating written text, audio and video recordings, and software and website localization, as well as proofreading and quality assurance to ensure the accuracy and effectiveness of the final product.',
            },
            {
                question:
                    'Who provides translation and localization services in the Blockswan Protocol?',
                answer: 'In the Blockswan Protocol, translation and localization services are provided by professionals who have experience and expertise in translating and adapting content for different languages and cultural contexts. These individuals may have backgrounds in translation, linguistics, or a related field, and may have specialized knowledge and skills in specific languages, industries, or formats.',
            },
            {
                question:
                    'What should I look for when choosing a translation or localization provider in the Blockswan Protocol?',
                answer: "When choosing a translation or localization provider in the Blockswan Protocol, there are several key factors to consider. These can include the professional's experience and track record, their ability to deliver high-quality translations that accurately and effectively convey the meaning and tone of the original content, their knowledge of the target language and culture, and their ability to meet deadlines and work within a budget.",
            },
        ],
        subCategories: [
            {
                name: 'Document translation',
                description: 'Translate your documents accurately.',
                url: 'document-translation',
                booleanDeliverables: [
                    'Translating written documents',
                    'Ensuring accuracy and clarity',
                    'Maintaining tone and style',
                    'Editing and proofreading',
                    'Providing certified translations',
                    'Delivering translated documents in desired format',
                ],
                selectableDeliverables: [
                    {
                        name: 'Language pair',
                    },
                    {
                        name: 'Document type',
                    },
                ],
            },
            {
                name: 'Website translation',
                description:
                    'Make your website accessible to a global audience.',
                url: 'website-translation',
                booleanDeliverables: [
                    'Translating website content',
                    'Ensuring consistency and accuracy',
                    'Maintaining design and layout',
                    'Integrating translated content into website',
                    'Providing ongoing updates and maintenance',
                    'Testing and debugging',
                ],
                selectableDeliverables: [
                    {
                        name: 'Target languages',
                    },
                    {
                        name: 'Website platform',
                    },
                ],
            },
            {
                name: 'Localization testing',
                description:
                    'Ensure that your translations work properly in different languages and cultures.',
                url: 'localization-testing',
                booleanDeliverables: [
                    'Language translation accuracy',
                    'Cultural appropriateness',
                    'Functionality in target language and locale',
                    'User experience in target language and locale',
                ],
                selectableDeliverables: [
                    {
                        name: 'Target languages and locales',
                    },
                ],
            },
            {
                name: 'Audio and video translation',
                description: 'Translate your audio and video content.',
                url: 'audio-video-translation',
                booleanDeliverables: [
                    'Accurate translation of spoken words',
                    'Synchronization with lip movements',
                    'Appropriate tone and style for the content and target audience',
                    'High-quality audio and video recording',
                ],
                selectableDeliverables: [
                    {
                        name: 'Target languages',
                    },
                    {
                        name: 'Translation style',
                        options: ['Literal', 'Adaptive', 'Creative'],
                    },
                ],
            },
            {
                name: 'Subtitling and captioning',
                description:
                    'Add subtitles and captions to your audio and video content.',
                url: 'subtitling-captioning',
                booleanDeliverables: [
                    'Accurate translation of spoken words',
                    'Synchronization with audio and video',
                    'Clear and readable text',
                    'Proper grammar and punctuation',
                ],
                selectableDeliverables: [
                    {
                        name: 'Target languages',
                    },
                    {
                        name: 'Captioning type',
                        options: ['Closed', 'Open'],
                    },
                ],
            },
        ],
    },
    {
        name: 'Data entry & analysis',
        emoji: '📊',
        description: 'Collect, organize, and analyze data.',
        url: 'data-entry',
        faqs: [
            {
                question:
                    'What is the data entry and analysis category in the Blockswan Protocol?',
                answer: 'The data entry and analysis category in the Blockswan Protocol is a collection of services related to collecting, organizing, and analyzing data for businesses and organizations. This can include services such as data entry and formatting, database management, and data cleaning and preparation, as well as advanced analysis services such as statistical modeling, predictive analytics, and data visualization.',
            },
            {
                question:
                    'Who provides data entry and analysis services in the Blockswan Protocol?',
                answer: 'In the Blockswan Protocol, data entry and analysis services are provided by professionals who have experience and expertise in working with data for businesses and organizations. These individuals may have backgrounds in fields such as statistics, computer science, or a related field, and may have specialized knowledge and skills in specific software, techniques, or industries.',
            },
            {
                question:
                    'What should I look for when choosing a data entry or analysis provider in the Blockswan Protocol?',
                answer: "When choosing a data entry or analysis provider in the Blockswan Protocol, there are several key factors to consider. These can include the professional's experience and track record, their ability to understand and meet the specific needs and goals of the project, their knowledge of the latest trends and best practices in data management and analysis, and their ability to provide clear and concise reports and insights based on the data.",
            },
        ],
        subCategories: [
            {
                name: 'Data entry and processing',
                description: 'Enter and organize your data.',
                url: 'data-entry-processing',
                booleanDeliverables: [
                    'Entering data into spreadsheets or databases',
                    'Cleaning and organizing data',
                    'Conducting online and offline research',
                    'Verifying and validating information',
                    'Summarizing and presenting findings',
                    'Maintaining accurate and up-to-date records',
                ],
                selectableDeliverables: [
                    {
                        name: 'Data format',
                    },
                    {
                        name: 'Research focus',
                    },
                ],
            },
            {
                name: 'Data cleaning and formatting',
                description:
                    'Improve the quality and consistency of your data.',
                url: 'data-cleaning-formatting',
                booleanDeliverables: [
                    'Removal of errors and inconsistencies',
                    'Standardization of formatting',
                    'Consolidation of data from multiple sources',
                    'Filtering of unnecessary data',
                ],
                selectableDeliverables: [
                    {
                        name: 'Output format',
                    },
                    {
                        name: 'Data structure',
                    },
                ],
            },
            {
                name: 'Data visualization and reporting',
                description: 'Turn your data into insights and reports.',
                url: 'data-visualization-reporting',
                booleanDeliverables: [
                    'Clear and informative visualizations',
                    'Accurate and relevant data',
                    'User-friendly and professional design',
                    'Customization to fit specific needs',
                ],
                selectableDeliverables: [
                    {
                        name: 'Visualization types',
                    },
                    {
                        name: 'Visualization Output ',
                        options: ['PDF', 'Excel', 'PowerPoint', 'Other'],
                    },
                ],
            },
            {
                name: 'Data mining and scraping',
                description:
                    'Extract data from websites and other sources for your use.',
                url: 'data-mining-scraping',
                booleanDeliverables: [
                    'Accurate and relevant data',
                    'Scraping of dynamic and hidden data',
                    'Handling of pagination and authentication',
                    'Avoidance of detection and banning',
                ],
                selectableDeliverables: [
                    {
                        name: 'Data sources',
                    },
                    {
                        name: 'Output format',
                    },
                ],
            },
            {
                name: 'Statistical analysis and modeling',
                description:
                    'Analyze your data to discover patterns and trends.',
                url: 'statistical-analysis-modeling',
                booleanDeliverables: [
                    'Identification of trends and correlations',
                    'Construction of predictive models',
                    'Evaluation of model performance',
                    'Communication of findings and implications',
                ],
                selectableDeliverables: [
                    {
                        name: 'Statistical tests and techniques',
                        options: [
                            'Regression',
                            'ANOVA',
                            'Chi-square',
                            'T-test',
                            'Other',
                        ],
                    },
                    {
                        name: 'Stats output',
                    },
                ],
            },
            {
                name: 'Survey design and administration',
                description:
                    'Design and conduct surveys to collect data from others.',
                url: 'survey-design-administration',
                booleanDeliverables: [
                    'Creation of survey questions and response options',
                    'Determination of sample size and sampling method',
                    'Distribution of survey to respondents',
                    'Collection and analysis of survey results',
                ],
                selectableDeliverables: [
                    {
                        name: 'Survey type',
                    },
                    {
                        name: 'Survey format',
                    },
                ],
            },

            {
                name: 'Data security and privacy',
                description:
                    'Protect your data from unauthorized access and use.',
                url: 'data-security-privacy',
                booleanDeliverables: [
                    'Protection against unauthorized access and tampering',
                    'Encryption of sensitive data',
                    'Compliance with relevant laws and regulations',
                    'Management of user permissions and access levels',
                ],
                selectableDeliverables: [
                    {
                        name: 'Security measures',
                    },
                    {
                        name: 'Data location',
                    },
                ],
            },
            {
                name: 'Data backup and recovery',
                description:
                    'Create copies of your data to prevent loss and enable restoration.',
                url: 'data-backup-recovery',
                booleanDeliverables: [
                    'Regular and automated backups',
                    'Storage of backups in secure and accessible locations',
                    'Testing of backups to ensure their integrity',
                    'Plans and procedures for data recovery in case of disaster',
                ],
                selectableDeliverables: [
                    {
                        name: 'Backup frequency',
                    },
                    {
                        name: 'Recovery time objective (RTO)',
                    },
                ],
            },
        ],
    },
    {
        name: 'Development & engineering',
        emoji: '⌨️',
        description: 'Design, develop, and maintain custom software.',
        url: 'development-engineering',
        faqs: [
            {
                question:
                    'What is the software development and engineering category in the Blockswan Protocol?',
                answer: 'The software development and engineering category in the Blockswan Protocol is a collection of services related to creating and maintaining software applications for businesses and organizations. This can include services such as custom software development, website and mobile app development, and systems integration, as well as support and maintenance services to ensure the smooth and reliable operation of software systems.',
            },
            {
                question:
                    'Who provides software development and engineering services in the Blockswan Protocol?',
                answer: 'In the Blockswan Protocol, software development and engineering services are provided by professionals who have experience and expertise in creating and maintaining software applications for businesses and organizations. These individuals may have backgrounds in fields such as computer science, software engineering, or a related field, and may have specialized knowledge and skills in specific programming languages, platforms, or frameworks.',
            },
            {
                question:
                    'What should I look for when choosing a software development or engineering provider in the Blockswan Protocol?',
                answer: "When choosing a software development or engineering provider in the Blockswan Protocol, there are several key factors to consider. These can include the professional's experience and track record, their ability to understand and meet the specific needs and goals of the project, their knowledge of the latest trends and best practices in software development, and their ability to deliver high-quality, reliable, and maintainable software solutions.",
            },
        ],
        subCategories: [
            {
                name: 'Custom software development',
                description: 'Build tailored solutions for your unique needs.',
                url: 'custom-software-development',
                booleanDeliverables: [
                    "Functionality that meets the client's needs",
                    'User-friendly and intuitive design',
                    'Scalability and flexibility to accommodate future changes',
                    'Compatibility with existing systems and technologies',
                ],
                selectableDeliverables: [
                    {
                        name: 'Software type',
                    },
                    {
                        name: 'Programming languages',
                    },
                ],
            },
            {
                name: 'Web and mobile app development',
                description: 'Create engaging online experiences.',
                url: 'web-mobile-app-development',
                booleanDeliverables: [
                    "Functionality that meets the client's needs",
                    'Responsive and mobile-friendly design',
                    'Scalability and flexibility to accommodate future changes',
                    'Compatibility with various devices and operating systems',
                ],
                selectableDeliverables: [
                    {
                        name: 'App type',
                    },
                    {
                        name: 'Programming languages',
                    },
                ],
            },
            {
                name: 'Cloud computing and hosting',
                description: 'Host and manage your applications in the cloud.',
                url: 'cloud-computing-hosting',
                booleanDeliverables: [
                    "Scalability and flexibility to meet the client's changing needs",
                    'Reliability and uptime guarantees',
                    'Security and privacy of data',
                    'Technical support and maintenance',
                ],
                selectableDeliverables: [
                    {
                        name: 'Cloud services',
                    },
                    {
                        name: 'Hosting options',
                    },
                ],
            },
            {
                name: 'Software testing and QA',
                description: 'Ensure quality and reliability in your software.',
                url: 'software-testing-qa',
                booleanDeliverables: [
                    'Identification of bugs and defects',
                    'Ensuring compliance with requirements and specifications',
                    'Creation of comprehensive test plans and cases',
                    'Communication of test results and recommendations',
                ],
                selectableDeliverables: [
                    {
                        name: 'Testing methods',
                        description: 'Pick testing methods',
                    },
                    {
                        name: 'Test coverage',
                        description: 'Choose test coverage.',
                    },
                ],
            },
            {
                name: 'DevOps and continuous integration',
                description:
                    'Streamline your software development and deployment.',
                url: 'devops-continuous-integration',
                booleanDeliverables: [
                    'Automation of the build, test, and release process',
                    'Continuous integration and delivery of code changes',
                    'Monitoring and reporting of the health and performance of applications',
                    'Collaboration and communication among development and operations teams',
                ],
                selectableDeliverables: [
                    {
                        name: 'DevOps tools',
                        description: 'Pick DevOps tools.',
                    },
                    {
                        name: 'Delivery model',
                        description: 'Select delivery model.',
                    },
                ],
            },
            {
                name: 'Software maintenance and support',
                description: 'Keep your systems running smoothly.',
                url: 'software-maintenance-support',
                booleanDeliverables: [
                    'Regular updates and patches to fix bugs and improve performance',
                    'Technical support for users and troubleshooting of issues',
                    'Backward compatibility with older versions and systems',
                    'Evaluation and implementation of new features and requirements',
                ],
                selectableDeliverables: [
                    {
                        name: 'Maintenance frequency',
                        description: 'Choose frequency.',
                    },
                    {
                        name: 'Support channels',
                        description: 'Choose description.',
                    },
                ],
            },
            {
                name: 'Agile and Scrum methodologies',
                description:
                    'Use agile frameworks to efficiently manage your projects.',
                url: 'agile-scrum-methodologies',
                booleanDeliverables: [
                    'Creation of user stories and acceptance criteria',
                    'Formation of cross-functional teams and self-organization',
                    'Regular review and adaptation to changes in requirements and priorities',
                    "Transparency and visibility in the project's progress and issues",
                ],
                selectableDeliverables: [
                    {
                        name: 'Agile framework',
                        description: 'Choose frameworks.',
                    },
                    {
                        name: 'Scrum roles',
                        description: 'Choose roles.',
                    },
                ],
            },
            {
                name: 'Software architecture and design',
                description: 'Design efficient and scalable software systems.',
                url: 'software-architecture-design',
                booleanDeliverables: [
                    "Definition of the software's high-level structure and components",
                    'Selection of appropriate design patterns and frameworks',
                    'Consideration of performance, security, scalability, and other non-functional requirements',
                    'Communication of the design to the development team and stakeholders',
                ],
                selectableDeliverables: [
                    {
                        name: 'Architecture styles',
                        description: 'Choose the architecture',
                    },
                    {
                        name: 'Design tools',
                        description: 'Pick your tools.',
                    },
                ],
            },
        ],
    },
    {
        name: 'Blockchain & Crypto',
        emoji: '🔒',
        url: 'blockchain-crypto',
        description: 'Revolutionize your finances with blockchain and crypto!',
        faqs: [
            {
                question:
                    'What is the blockchain category in the Blockswan Protocol?',
                answer: 'The blockchain category in the Blockswan Protocol is a collection of services related to the development and implementation of blockchain technology for businesses and organizations. This can include services such as blockchain strategy and consulting, smart contract development, and blockchain-based application development, as well as support and maintenance services to ensure the smooth and reliable operation of blockchain systems.',
            },
            {
                question:
                    'Who provides blockchain services in the Blockswan Protocol?',
                answer: 'In the Blockswan Protocol, blockchain services are provided by professionals who have experience and expertise in developing and implementing blockchain technology for businesses and organizations. These individuals may have backgrounds in fields such as computer science, software engineering, or a related field, and may have specialized knowledge and skills in specific blockchain platforms or applications.',
            },
            {
                question:
                    'What should I look for when choosing a blockchain provider in the Blockswan Protocol?',
                answer: "When choosing a blockchain provider in the Blockswan Protocol, there are several key factors to consider. These can include the professional's experience and track record, their ability to understand and meet the specific needs and goals of the project, their knowledge of the latest trends and best practices in blockchain technology, and their ability to deliver high-quality, secure, and scalable blockchain solutions.",
            },
        ],
        subCategories: [
            {
                name: 'Cryptocurrency Exchange',
                description: 'Easily convert your digital assets.',
                url: 'cryptocurrency-exchange',
                booleanDeliverables: [
                    'Support for multiple cryptocurrencies',
                    'Real-time pricing and market data',
                    'Security of user accounts and funds',
                    'Ease of use and intuitive interface',
                ],
                selectableDeliverables: [
                    {
                        name: 'Exchange type',
                        description: 'Choose exchange type.',
                    },
                    {
                        name: 'Trading options',
                        description: 'Select trading options.',
                    },
                ],
            },
            {
                name: 'Cryptocurrency Wallet',
                description: 'Safely store your cryptocurrencies.',
                url: 'cryptocurrency-wallet',
                booleanDeliverables: [
                    'Support for multiple cryptocurrencies',
                    'Security of user funds and private keys',
                    'Ability to send and receive cryptocurrencies',
                    'Ease of use and intuitive interface',
                ],
                selectableDeliverables: [
                    {
                        name: 'Wallet type',
                        description: 'Pick wallet type.',
                    },
                    {
                        name: 'Accessibility',
                        description: 'Select accessibility',
                    },
                ],
            },
            {
                name: 'Blockchain Development',
                description: 'Build secure, decentralized applications.',
                url: 'blockchain-development',
                booleanDeliverables: [
                    'Creation of smart contracts and DApps',
                    'Integration with existing blockchain networks',
                    'Security and immutability of data on the blockchain',
                    'Scalability and performance of the blockchain solution',
                ],
                selectableDeliverables: [
                    {
                        name: 'Blockchain platform',
                        description: 'Choose blockchain platform.',
                    },
                    {
                        name: 'Programming languages',
                        description: 'Pick programming languages.',
                    },
                ],
            },
            {
                name: 'Smart Contract Development',
                description: 'Automate your business with smart contracts.',
                url: 'smart-contract-development',
                booleanDeliverables: [
                    'Implementation of business logic in the form of code',
                    'Execution of the contract automatically and transparently',
                    "Security and reliability of the contract's code and execution",
                    'Integration with other systems and applications',
                ],
                selectableDeliverables: [
                    {
                        name: 'Blockchain platform',
                        description: 'Choose blockchain platform.',
                    },
                    {
                        name: 'Programming languages',
                        description: 'Pick programming languages.',
                    },
                ],
            },
            {
                name: 'Cryptocurrency Tax Consulting',
                description: 'Save money on your crypto taxes.',
                url: 'cryptocurrency-tax-consulting',
                booleanDeliverables: [
                    "Assessment of the client's cryptocurrency transactions and holdings",
                    'Calculation of tax liabilities and reporting requirements',
                    'Recommendations on tax-efficient strategies and planning',
                    'Communication and support throughout the tax filing process',
                ],
                selectableDeliverables: [
                    {
                        name: 'Tax jurisdiction',
                        description: 'Select tax jurisdiction.',
                    },
                    {
                        name: 'Scope of services',
                        description: 'Choose scope of services.',
                    },
                ],
            },

            {
                name: 'Blockchain Consulting',
                description: 'Get expert guidance on blockchain technology.',
                url: 'blockchain-consulting',
                booleanDeliverables: [
                    "Assessment of the client's business and objectives",
                    'Identification of potential use cases and applications of blockchain technology',
                    'Recommendations on the most suitable blockchain platforms and solutions',
                    'Support in the planning and implementation of the blockchain project',
                ],
                selectableDeliverables: [
                    {
                        name: 'Blockchain platform',
                        description: 'Choose blockchain platform.',
                    },
                    {
                        name: 'Web3 scope',
                        description: 'Choose scope of services.',
                    },
                ],
            },
            {
                name: 'Cryptocurrency Payment Processing',
                description: 'Easily accept crypto payments.',
                url: 'cryptocurrency-payment-processing',
                booleanDeliverables: [
                    'Support for multiple cryptocurrencies',
                    'Real-time processing of payments',
                    'Security of transactions and funds',
                    "Ease of integration with merchants' existing systems",
                ],
                selectableDeliverables: [
                    {
                        name: 'Payment methods',
                    },
                    {
                        name: 'Settlement options',
                    },
                ],
            },
        ],
    },
]
