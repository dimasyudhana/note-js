import { ReactNode } from "react"

type SectionProps = {
    title?: string,
    children: ReactNode
}

// const Section: React.FC<{title: string}> = ({children, title}) => {
//     return (
//         <section>
//             <h2>{title}</h2>
//             <p>{children}</p>
//         </section>
//     )
// }

export const Section = ({ children, title = "My SubHeading" }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}
