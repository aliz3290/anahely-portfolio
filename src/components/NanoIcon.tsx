import Image from 'next/image';

type IconType = 'sparkle' | 'crown' | 'user' | 'star' | 'heart' | 'mail' | 'group' | 'warning' | 'camera' | 'music' | 'phone' | 'dress' | 'lipstick' | 'mirror' | 'kiss' | 'tie';

interface NanoIconProps {
    type: IconType;
    className?: string;
    size?: number;
}

const iconMap: Record<IconType, string> = {
    sparkle: '/assets/nano_sparkle.png',
    crown: '/assets/nano_crown.png',
    user: '/assets/nano_user.png',
    star: '/assets/nano_star.png',
    heart: '/assets/nano_star.png', // Fallback
    mail: '/assets/nano_star.png', // Fallback
    group: '/assets/nano_user.png', // Fallback
    warning: '/assets/nano_sparkle.png', // Fallback
    camera: '/assets/nano_sparkle.png', // Fallback
    music: '/assets/nano_sparkle.png', // Fallback
    phone: '/assets/nano_sparkle.png', // Fallback
    dress: '/assets/nano_crown.png', // Fallback
    lipstick: '/assets/nano_sparkle.png', // Fallback
    mirror: '/assets/nano_sparkle.png', // Fallback
    kiss: '/assets/nano_star.png', // Fallback
    tie: '/assets/nano_crown.png', // Fallback
};

export default function NanoIcon({ type, className = '', size = 24 }: NanoIconProps) {
    return (
        <span className={`inline-block align-middle ${className}`} style={{ width: size, height: size }}>
            <Image
                src={iconMap[type]}
                alt={`${type} icon`}
                width={size}
                height={size}
                className="object-contain w-full h-full"
            />
        </span>
    );
}
