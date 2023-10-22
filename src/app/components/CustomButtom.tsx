type Props = {
    label: string;
    onclick: () => void
}

export const  CustomButtom = ({label, onclick}: Props) =>{
    return(
        <div className="bottomClick">
            <button onClick={onclick}>{label}</button>
        </div>
    )
}