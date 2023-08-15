import Link from "next/link"

interface IBusinessMenu {
  label: string,
  link: string,
}

interface crownbarProps {
  businessMenu: Array<IBusinessMenu>,
  showCountries?: boolean,
  showSignIn?: boolean,
}

export const Crownbar = ({businessMenu, showCountries = true, showSignIn = true}:crownbarProps) => {
  return (
    <div className="bg-white-head h-8 text-font-size-80 text-gray-55 flex items-center w-full">
      <div className="container flex justify-between items-center">
        <ul className="flex gap-4 uppercase">
          {
            businessMenu.map(item => <li key={item.label}><Link href={item.link}>{item.label}</Link></li>)
          }
        </ul>
        <div className="flex gap-4">
          {showSignIn && <div className="flex items-center gap-2">
            <Link href="https://mycwc.force.com/B2BCustomerCommunityPortal/s/login/?language=en_US">Sign In</Link>
          </div>}
          {showCountries && <div className="flex items-center gap-2">
            <img src="images/jamaica_flag.png" alt="jamaica" className="w-6 h-4"/>
            <span>Jamaica</span>
          </div>}
        </div>
      </div>
    </div>
  )
}
