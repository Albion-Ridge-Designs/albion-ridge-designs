import React, { useRef } from "react";
import {
  Flex
} from '@chakra-ui/react';
import ApplicationSectionForm from "./applicationsectionform";

function Application({ packageSelection }) {

    return (
        <Flex id="application-section" direction="column" alignItems="center" bg="brand.600" color="brand.200" pt={20} pb={20}>
            <ApplicationSectionForm />
        </Flex>

    )
  }

  export default Application;
