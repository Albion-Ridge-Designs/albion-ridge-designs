import React, { useState, useEffect } from "react";
import {
  Button,
  Heading,
  Text,
  HStack,
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
                setHeavensGateName(`${startOfNewName}ody`);
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
                setHeavensGateName(`${startOfNewName}ody`);
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
        <Flex id="heavens-gate-generator" direction="column" align="center" bg="brand.400">
            <Flex direction="row" bg="brand.200" height="50px" width="100%" alignItems="center">
            <marquee direction="right">
                    <HStack>
                        <HStack>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" letterSpacing="2px" pr={5}> Generate Your Name </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" letterSpacing="2px" pr={5}> Generate Your Name </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" letterSpacing="2px" pr={5}> Generate Your Name </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" letterSpacing="2px" pr={5}> Generate Your Name </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" letterSpacing="2px" pr={5}> Generate Your Name </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" letterSpacing="2px" pr={5}> Generate Your Name </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" letterSpacing="2px" pr={5}> Generate Your Name </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" letterSpacing="2px" pr={5}> Generate Your Name </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" letterSpacing="2px" pr={5}> Generate Your Name </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" letterSpacing="2px" pr={5}> Generate Your Name </Text>
                        </HStack>
                    </HStack>
                </marquee>
            </Flex>
            {!isSubmitSuccessful &&
                <Stack
                    spacing={10}
                    p={10}
                    minWidth={{base: "80%", md: "700px"}} 
                    maxWidth="800px"
                >
                    {/* <Heading size="2xl" color="brand.200" fontFamily="Amalta" fontWeight="500" width="100%" textAlign="center">Heavens Gate Name Generator</Heading> */}
                    {/* <Flex width="100%" justifyContent="center" alignItems="center">
                        <Image src={hgmembers} maxWidth="500px" borderRadius="110px" border="2px solid #333333" m={2} />
                    </Flex> */}
                    <form onSubmit={handleSubmit(onFormSubmit)}> 
                        <FormControl id="name">
                            <FormLabel htmlFor="name" color="brand.800" fontWeight="600" fontSize="lg">Name:</FormLabel>
                            <Input name="name" backgroundColor="brand.500" color="brand.200" size="lg" fontSize="lg" focusBorderColor='brand.500' style={{ border: "2px solid #FEFAF1"}} {...register("name", { required: "This is required."})} />
                            <ErrorMessage errors={errors} name="name" render={({ message }) => <div style={{color: "#FEFAF1", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle />  <Text ml={2}>Input name must have at least 3 consonants or 2 consonants if the first letter is a vowel.</Text></div>}/>
                        </FormControl>
                        <FormControl id="email" mt={5}>
                            <FormLabel htmlFor="email" color="brand.800" fontWeight="600" fontSize="lg">Email:</FormLabel>
                            <Input name="email" backgroundColor="brand.500" color="brand.200" size="lg" fontSize="lg" focusBorderColor='brand.500' style={{ border: "2px solid #FEFAF1"}} {...register("email", { required: "This is required."})} />
                            <ErrorMessage errors={errors} name="email" render={({ message }) => <div style={{color: "#FEFAF1", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle /> <Text ml={2}>{message}</Text> </div>}/>
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
                <Flex direction="column" justify="center" alignItems="center" minWidth="50%" height="450px" p={10}>
                    <Heading size="xl" mt={5} fontFamily="Amalta" color="brand.800" fontWeight="500">Thank You, <Box as="span" color="brand.500">{heavensGateName}</Box>!</Heading>
                    <Heading size="md" mt={2} fontFamily="Produkt" color="brand.800">You've been added to our email list.</Heading>
                    <Image src={heavensgategif} m={10} />
                </Flex>
            }
                        <Flex direction="row" bg="brand.200" height="50px" width="100%" alignItems="center">
                        <marquee>
                    <HStack>
                        <HStack>
                            <Text fontSize="xl" color="brand.300" fontFamily="Produkt" letterSpacing="2px" pr={5}> Jwnody </Text>
                            <Text fontSize="xl" color="brand.300" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.400" fontFamily="Produkt" letterSpacing="2px" pr={5}> Yrsody </Text>
                            <Text fontSize="xl" color="brand.400" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.500" fontFamily="Produkt" letterSpacing="2px" pr={5}> Anlody </Text>
                            <Text fontSize="xl" color="brand.500" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.600" fontFamily="Produkt" letterSpacing="2px" pr={5}> Ollody </Text>
                            <Text fontSize="xl" color="brand.600" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.700" fontFamily="Produkt" letterSpacing="2px" pr={5}> Dstody </Text>
                            <Text fontSize="xl" color="brand.700" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" letterSpacing="2px" pr={5}> Snnody </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.900" fontFamily="Produkt" letterSpacing="2px" pr={5}> Prsody </Text>
                            <Text fontSize="xl" color="brand.900" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.300" fontFamily="Produkt" letterSpacing="2px" pr={5}> Avnody </Text>
                            <Text fontSize="xl" color="brand.300" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.400" fontFamily="Produkt" letterSpacing="2px" pr={5}> Lvvody </Text>
                            <Text fontSize="xl" color="brand.400" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.500" fontFamily="Produkt" letterSpacing="2px" pr={5}> Alxody </Text>
                            <Text fontSize="xl" color="brand.500" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.600" fontFamily="Produkt" letterSpacing="2px" pr={5}> Wknody </Text>
                            <Text fontSize="xl" color="brand.600" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.700" fontFamily="Produkt" letterSpacing="2px" pr={5}> Mllody </Text>
                            <Text fontSize="xl" color="brand.700" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" letterSpacing="2px" pr={5}> Jmmody </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.900" fontFamily="Produkt" letterSpacing="2px" pr={5}> Dvvody </Text>
                            <Text fontSize="xl" color="brand.900" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.300" fontFamily="Produkt" letterSpacing="2px" pr={5}> Gldody </Text>
                            <Text fontSize="xl" color="brand.300" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.400" fontFamily="Produkt" letterSpacing="2px" pr={5}> Srvody </Text>
                            <Text fontSize="xl" color="brand.400" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.500" fontFamily="Produkt" letterSpacing="2px" pr={5}> Evnody </Text>
                            <Text fontSize="xl" color="brand.500" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.600" fontFamily="Produkt" letterSpacing="2px" pr={5}> Dmmody </Text>
                            <Text fontSize="xl" color="brand.600" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.700" fontFamily="Produkt" letterSpacing="2px" pr={5}> Srrody </Text>
                            <Text fontSize="xl" color="brand.700" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" letterSpacing="2px" pr={5}> Nrrody </Text>
                            <Text fontSize="xl" color="brand.800" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.900" fontFamily="Produkt" letterSpacing="2px" pr={5}> Lggody </Text>
                            <Text fontSize="xl" color="brand.900" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.300" fontFamily="Produkt" letterSpacing="2px" pr={5}> Tllody </Text>
                            <Text fontSize="xl" color="brand.300" fontFamily="Produkt" pr={5}> | </Text>
                            <Text fontSize="xl" color="brand.400" fontFamily="Produkt" letterSpacing="2px" pr={5}> Chkody </Text>
                            <Text fontSize="xl" color="brand.400" fontFamily="Produkt" pr={5}> | </Text>
                        </HStack>
                    </HStack>
                </marquee>
            </Flex>
      </Flex>
    )
  }

  export default HeavensGateName;
