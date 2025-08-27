export interface HeroBlockProps {
    name?: string;
    position?: string;
    email?: string;
    age?: string;
    phone?: string;
    location?: {
        address?: string;
        postalCode?: string;
        city?: string;
        countryCode?: string;
        region?: string;
        link?: string;
    };
    profiles?: {
        network?: string;
        icon?: string;
        username?: string;
        url?: string;
    }[];
}

export interface SummaryBlockProps {
    title?: string;
    summary?: string;
}

export interface StackBlockProps {
    title?: string;
    items?: {
        name?: string;
        icon?: string;
        url?: string;
    }[];
}

export interface ProjectsBlockProps {
    title?: string;
    projects?: {
        name?: string;
        stack?: string[];
        description?: string;
        image?: string;
        status?: string;
        url?: string;
        gitHub?: string;
        technologies?: string[];
    }[];
}

export interface ExperienceBlockProps {
    title?: string;
    experience?: {
        name?: string;
        position?: string;
        startDate?: string;
        endDate?: string;
        summary?: string;
        location?: string;
    }[];
}