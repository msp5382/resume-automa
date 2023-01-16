interface IButtonProps {
    onClick?: () => void;
    text: string;
    color?: string;
}

export const Button = (
    { onClick=()=>{}, color,text }: IButtonProps
) => {
    return <button onClick={onClick} className="rounded p-2 text-xs text-white" style={{
        backgroundColor:color?? "#6366F1"
    }}>
    {text}
  </button>
}