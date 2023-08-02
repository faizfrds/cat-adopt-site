//allows for state component from navbar to be delivered to header component without header being rendered in every page

import Header from "./Header";

interface HeaderStateProps {
    isOpen: boolean;
}

const HeaderState: React.FC<HeaderStateProps> = ({isOpen}) => {
    return ( 
        <div>
            <Header isOpen={isOpen}/>
        </div>
     );
}
 
export default HeaderState;