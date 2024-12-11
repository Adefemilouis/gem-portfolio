import { link } from "fs";
import Link from "next/link"

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const Socials = [
    { icon: <FaGithub />, path: "https://www.github.com/Adefemilouis" },
    { icon: <FaLinkedinIn />, path: "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=louis-adefemi-191211337" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaTwitter />, path: "https://www.x.com/Adias85206028" },
];

// const Social = ({containerStyles, iconSyles}) => {
//     return <div className={containerStyles}>
//         {Socials.map((item, index))} => {
//             return (
//                 <Link key={index} href={item.path} className={iconStyles}>
//                     {item.icon}
//                 </Link>

//             )
//         }
//     </div>
// }
const Social = ({ containerStyles, iconStyles }) => {
    return  (
        <div className={containerStyles}>
            {Socials.map((item, index) =>{
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};
export default Social

