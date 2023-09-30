import { createContext, useState } from 'react';
import useSticky from '../hooks/useSticky';

//create a context, with createContext api
export const stickyContext = createContext();

const StickyProvider = (props) => {
        // this state will be shared with all components 
    const [isSticky, setSticky] = useState(false);

    return (
                // this is the provider providing state
        <stickyContext.Provider value={[isSticky, setSticky]}>
            {props.children}
        </stickyContext.Provider>
    );
};

export default StickyProvider;
