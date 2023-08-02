import Header from "@/components/Header";
import Showcase from "@/components/Showcase";

interface NavProps {
  children: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({children}) => {
  return ( 
    <div>
      <Showcase>
        {children}
      </Showcase>
    </div>
   );
}
 
export default Nav;
