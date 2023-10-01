import React, { useRef } from "react";
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
import unicorngif from "../../assets/unicorngif.gif";

function Contact() {
    const contactSection = useRef();
    const { register, watch, setValue, setError, clearErrors, reset, handleSubmit, control } = useForm();
    const { errors, isSubmitSuccessful } = useFormState({
        control,
    });

    const onFormSubmit = async (data) => {
        emailjs
        .send("service_i9ykern", "contact_form", data, "X8whqhOBk-FyR2fc8")
        .then(
            (result) => {
            // console.log(result.text);
            },
            (error) => {
            console.log(error.text);
            }
        );
        reset();
    }

    return (
        <Flex id="contact-section" ref={contactSection} direction="column" align="center" bg="brand.600" pt={20} pb={20}>
            {!isSubmitSuccessful &&
                <Stack
                    spacing={14}
                    pl={10}
                    pr={10}
                    minWidth={{base: "80%", md: "700px"}} 
                    maxWidth="800px"
                >
                    <Heading size="2xl" color="brand.800" fontFamily="Amalta" fontWeight="500" width="100%" textAlign="center">Contact</Heading>
                    <form onSubmit={handleSubmit(onFormSubmit)}> 
                        <FormControl id="from_name">
                            <FormLabel htmlFor="from_name" color="brand.800" fontWeight="600" fontSize="lg">Name:</FormLabel>
                            <Input name="from_name" backgroundColor="brand.500" color="brand.200" size="lg" fontSize="lg" focusBorderColor='brand.500' style={{ border: "2px solid #FEFAF1"}} {...register("from_name", { required: "This is required."})} />
                            <ErrorMessage errors={errors} name="from_name" render={({ message }) => <div style={{color: "#D76A03", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle /> {message} </div>}/>
                        </FormControl>
                        <FormControl id="reply_to" mt={5}>
                            <FormLabel htmlFor="reply_to" color="brand.800" fontWeight="600" fontSize="lg">Email:</FormLabel>
                            <Input name="reply_to" backgroundColor="brand.500" color="brand.200" size="lg" fontSize="lg" focusBorderColor='brand.500' style={{ border: "2px solid #FEFAF1"}} {...register("reply_to", { required: "This is required."})} />
                            <ErrorMessage errors={errors} name="reply_to" render={({ message }) => <div style={{color: "#D76A03", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle /> {message} </div>}/>
                        </FormControl>
                        <FormControl id="message" mt={5}>
                            <FormLabel htmlFor="message" color="brand.800" fontWeight="600" fontSize="lg">Message:</FormLabel>
                            <Textarea name="message" backgroundColor="brand.500" color="brand.200" size="lg" fontSize="lg" focusBorderColor='brand.500' style={{ border: "2px solid #FEFAF1"}} {...register("message")} />
                            <ErrorMessage errors={errors} name="message" render={({ message }) => <div style={{color: "#D76A03", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle /> {message} </div>}/>
                        </FormControl>
                        <Button 
                            type="submit"
                            variant="brand.700"
                            mt={8}
                            size="lg"
                        >
                            <Text>
                                Submit
                            </Text>
                        </Button>
                    </form> 
                </Stack>
            }
            {isSubmitSuccessful &&
                <Flex direction="column" justify="center" alignItems="center" minWidth="50%" ml="15%" mr="15%" mb={20} mt={20} height="450px">
                    <Heading size="xl" mt={5} fontFamily="Amalta" color="brand.800" fontWeight="500">Thank You!</Heading>
                    <Heading size="md" mt={2} fontFamily="Produkt" color="brand.800">We will respond to you within 24 hours.</Heading>
                    <Image src={unicorngif} borderRadius="110px" border="2px solid #333333" m={10} />
                </Flex>
            }
      </Flex>
    )
  }

  export default Contact;
