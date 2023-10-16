import Image from 'next/image';
import React from 'react'
type FunctionComponent<P> = (props: P) => JSX.Element

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
    onClick?: FunctionComponent<{}>
}
const Button = ({ type, title, icon, variant, full, onClick }: ButtonProps) => {
    return (
        <button type={type} className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`} onClick={onClick}>{icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label className='bold-16 whitespace-nowrap'>{title}</label>
        </button>
    )
}

export default Button