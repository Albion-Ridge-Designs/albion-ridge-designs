import React, { useState, useEffect } from "react";
import {
  Button,
  Heading,
  Text,
  Textarea,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Box,
  Stack,
  Image
} from '@chakra-ui/react';
import { 
    useForm,
    useFormState
} from "react-hook-form";
import emailjs from "emailjs-com";
import { ErrorMessage } from "@hookform/error-message";
import { BiErrorCircle } from "react-icons/bi";
import heavensgategif from "../../assets/heavensgategif.gif";
import hgmembers from "../../assets/hgmembers.jpeg";

function HeavensGateName() {
    const { register, watch, setValue, setError, clearErrors, reset, handleSubmit, control } = useForm();
    const { errors, isSubmitSuccessful } = useFormState({
        control,
    });
    const [heavensGateName, setHeavensGateName] = useState(false);
    const name = watch("name");

    // useEffect(() => {
    //     register({ name: "name", type: "custom" }, { validate: { hasThreeConsonants } });
    // });

    // const handleNameChange = (fieldData) => (name) => {
    //     if (!hasThreeConsonants(name)) {
    //       setError(fieldData, "hasThreeConsonants");
    //     } else {
    //       setError(fieldData, "hasThreeConsonants");
    //     }
    //     // setValue(dateType, date);
    //     // alert(date);
    //   };

    const hasThreeConsonants = (name) => {
        console.log("name", name)
        const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
        if (!name) {
          return false;
        }
        // code to check for starts with vowel and two consonants
        if (name.startsWith("A" || name.startsWith("E") || name.startsWith("I") || name.startsWith("O") || name.startsWith("U"))) {
            let newNameArr = []
            let firstLetter = name.charAt(0);
            let restOfName = name.slice(1);
            let restOfNameArr = restOfName.split("");

            newNameArr.push(firstLetter);
            restOfNameArr.map((letter, idx) => {
                if (!vowels.includes(letter) && newNameArr.length < 3) {
                    newNameArr.push(letter);
                }
            })
            let startOfNewName = newNameArr.join("");
            setHeavensGateName(`${startOfNewName}-ody`);
            return true;
        }
        // code to check for three consonants
        if (!name.startsWith("A" || !name.startsWith("E") || !name.startsWith("I") || !name.startsWith("O") || !name.startsWith("U"))) {
            let newNameArr = []
            let oldNameArr = name.split("");

            oldNameArr.map((letter, idx) => {
                if (!vowels.includes(letter) && newNameArr.length < 3) {
                    newNameArr.push(letter);
                }
            })
            let startOfNewName = newNameArr.join("");
            setHeavensGateName(`${startOfNewName}-ody`);
            return true;
        }
        return false;
      };

    const onFormSubmit = async (data) => {
        console.log("data", data);
        const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
        if (!data.name) {
          return false;
        }
        // code to check for starts with vowel and two consonants
        if (data.name.startsWith("A" || data.name.startsWith("E") || data.name.startsWith("I") || data.name.startsWith("O") || data.name.startsWith("U"))) {
            let newNameArr = []
            let firstLetter = data.name.charAt(0);
            let restOfName = data.name.slice(1);
            let restOfNameArr = restOfName.split("");

            newNameArr.push(firstLetter);
            restOfNameArr.map((letter, idx) => {
                if (!vowels.includes(letter) && newNameArr.length < 3) {
                    newNameArr.push(letter);
                }
            })
            let startOfNewName = newNameArr.join("");
            if (startOfNewName.length === 3) {
                setHeavensGateName(`${startOfNewName}-ody`);
                return true;
            }
            if (startOfNewName.length !== 3) {
                setHeavensGateName(false);
                setError("name", "hasThreeConsonants")
            }
        }
        // code to check for three consonants
        if (!data.name.startsWith("A" || !data.name.startsWith("E") || !data.name.startsWith("I") || !data.name.startsWith("O") || !data.name.startsWith("U"))) {
            let newNameArr = []
            let oldNameArr = data.name.split("");

            oldNameArr.map((letter, idx) => {
                if (!vowels.includes(letter) && newNameArr.length < 3) {
                    newNameArr.push(letter);
                }
            })
            let startOfNewName = newNameArr.join("");
            if (newNameArr.length === 3) {
                setHeavensGateName(`${startOfNewName}-ody`);
                return true;
            }
            if (newNameArr.length !== 3) {
                setHeavensGateName(false);
                setError("name", "hasThreeConsonants")
            }
        }
        console.log("errors", errors);
        return false;
    }

    return (
        <Flex id="heavens-gate-generator" direction="column" align="center" bg="brand.400" pt={20} pb={20}>
            {!isSubmitSuccessful &&
                <Stack
                    spacing={10}
                    pl={10}
                    pr={10}
                    minWidth={{base: "80%", md: "700px"}} 
                    maxWidth="800px"
                >
                    {/* <Heading size="2xl" color="brand.500" fontFamily="Amalta" fontWeight="500" width="100%" textAlign="center">Heaven's Gate Name Generator</Heading> */}
                    <Flex width="100%" justifyContent="center" alignItems="center">
                        <Image src={hgmembers} maxWidth="500px" borderRadius="110px" border="2px solid #333333" m={2} />
                    </Flex>
                    <form onSubmit={handleSubmit(onFormSubmit)}> 
                        <FormControl id="name">
                            <FormLabel htmlFor="name" color="brand.800" fontWeight="600" fontSize="lg">Name:</FormLabel>
                            <Input name="name" backgroundColor="brand.500" color="brand.200" size="lg" fontSize="lg" focusBorderColor='brand.500' style={{ border: "2px solid #FEFAF1"}} {...register("name", { required: "This is required."})} />
                            <ErrorMessage errors={errors} name="name" render={({ message }) => <div style={{color: "#BBDB9B", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle /> <Text ml={2}>Input name must have at least 3 consonants or 2 consonants if the first letter is a vowel.</Text></div>}/>
                        </FormControl>
                        <FormControl id="email" mt={5}>
                            <FormLabel htmlFor="email" color="brand.800" fontWeight="600" fontSize="lg">Email:</FormLabel>
                            <Input name="email" backgroundColor="brand.500" color="brand.200" size="lg" fontSize="lg" focusBorderColor='brand.500' style={{ border: "2px solid #FEFAF1"}} {...register("email", { required: "This is required."})} />
                            {/* <ErrorMessage errors={errors} name="email" render={({ message }) => <div style={{color: "#D76A03", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle /> {message} </div>}/> */}
                        </FormControl>
                        <Button 
                            type="submit"
                            variant="brand.700"
                            mt={8}
                            size="lg"
                        >
                            <Text>
                                Generate Your Name!
                            </Text>
                        </Button>
                    </form> 
                </Stack>
            }
            {isSubmitSuccessful &&
                <Flex direction="column" justify="center" alignItems="center" minWidth="50%" ml="15%" mr="15%" mb={20} mt={20} height="450px">
                    <Heading size="xl" mt={5} fontFamily="Amalta" color="brand.800" fontWeight="500">Thank You, <Box as="span" color="brand.500">{heavensGateName}</Box>!</Heading>
                    <Heading size="md" mt={2} fontFamily="Produkt" color="brand.800">You've been added to our email list.</Heading>
                    <Image src={heavensgategif} m={10} />
                </Flex>
            }
      </Flex>
    )
  }

  export default HeavensGateName;
  