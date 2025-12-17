import { contactInfo, footerLists, socialIcons } from "../constant/data";

export function Footer() {
 return (
  <footer className="pt-14 pb-8">
   <div className="container">
    <div className="">
     <div className="">
      <div className="">
       <img src="assets/images/logo.png" alt="footer logo" width={150} height={50} />
      </div>

      <div className="">
       {contactInfo.map((item) => (
        <a href="#" key={item.id}>
         {<item.icon />}
         {item.label}
        </a>
       ))}
      </div>
     </div>
     {footerLists.map((item) => (
      <div key={item.id}>
       <p>{item.title}</p>
       <ul className="">
        {item.links.map((link, index)=>(
         <li key={index}>
          <a href="#">{link.label}</a>
         </li>
        ))}
       </ul>
      </div>
     ))}

     <div className="">
      <p>Social Profiles</p>
      <div>
       {socialIcons.map((icon)=>(
        <button>
         <a href="#">{<icon.icon />}</a>
        </button>
       ))}
      </div>
     </div>
    </div>

    <p>&copy; {new Date().getFullYear()} Skillbridge. All rights reserved.</p>
   </div>
  </footer>
 );
}