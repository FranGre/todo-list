export default function Footer({msg, className}:{msg:string, className?: string}){

    return (
        <footer className={className}>{msg}</footer>
    )
}