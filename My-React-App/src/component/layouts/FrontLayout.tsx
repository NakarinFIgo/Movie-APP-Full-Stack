import Footer from "@/component/shared/Footer"
import Navbar from "@/component/shared/Navbar"

type Props = {
    children: JSX.Element | JSX.Element[]
}

function FrontLayout({ children }: Props) {
  return (
    <>
        <Navbar />
        <div className="sm:pt-20 lg:pt-8">
            { children }
        </div>
        <Footer />
    </>
  )
}

export default FrontLayout