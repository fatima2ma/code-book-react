import { FaCodepen, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <div className="flex justify-center">
        <div className="flex w-1/2 md:w-full gap-4 flex-wrap items-center py-6 justify-center md:justify-between">
            <p className="text-sm text-center text-gray-700 dark:text-gray-200">© 2030 CodeBook. All Rights Reserved.</p>
            <ul className="flex gap-6 text-gray-700 dark:text-gray-200">
                <li><Link><FaCodepen/></Link></li>
                <li><Link><FaTwitter/></Link></li>
                <li><Link><FaGithub/></Link></li>
            </ul>
        </div>
        </div>
    )
}

export default Footer;