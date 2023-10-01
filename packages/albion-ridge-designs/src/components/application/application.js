import React, { useRef } from "react";
import {
  Flex
} from '@chakra-ui/react';
import ApplicationSectionForm from "./applicationsectionform";

function Application({ packageSelection }) {
  const applicationSection = useRef();

    return (
        <Flex id="application-section" ref={applicationSection} direction="column" alignItems="center" bg="brand.500" color="brand.200" pt={20} pb={20}>
            <ApplicationSectionForm />
        </Flex>

    )
  }

  export default Application;
