
type ButtonProps = {
    title: string,
    url: string,
    color: keyof typeof colorList,
}

const colorList = {
    white: 'border-white bg-[linear-gradient(45deg,_white_50%,_transparent_50%)] hover:text-white',
    blue: 'border-[#02499D] bg-[linear-gradient(45deg,_#02499D_50%,_transparent_50%)] text-white hover:text-[#02499D]'
}

const ButtonView = (props: ButtonProps) => {
    
    return (
        <a href={props.url} className={`transition-all duration-700 buttonView ${colorList[props.color]} hover:bg-[100%]`}>
            <span>VIEW <br /> {props.title}</span>
        </a>
    )
}

export default ButtonView