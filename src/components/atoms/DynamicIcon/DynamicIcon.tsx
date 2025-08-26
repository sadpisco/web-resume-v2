import { cn } from '@/lib/utils';
import { lazy } from 'react';

interface DynamicIconProps {
    iconname?: string;
    weight?: string;
    className?: string;
    size?: number;
}

interface IconProps {
    className?: string;
    weight?: string;
    size?: number;
}

async function DynamicPhosphor(iconName: string) {
    const module = await import(/* @vite-ignore */`@phosphor-icons/react/${iconName}`);
    let result = { default: module[iconName] };
    return result;
};

const DynamicIcon: React.FC<DynamicIconProps> = (props) => {
    const { iconname, className, weight, size, ...rest } = props;

    if (iconname) {
        const IconGenerator: React.FC<IconProps> = lazy(() =>
            DynamicPhosphor(iconname.replace(/\s+/g, ''))
        );
        return <IconGenerator className={cn('', className)} weight={weight} size={size} {...rest} />;
    }
    return null;
};

export default DynamicIcon;
