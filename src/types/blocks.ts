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