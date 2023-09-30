import React, { useState } from "react";
import { styled } from "frontity";
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
  Image,
  Select,
  Checkbox,
  SimpleGrid
} from '@chakra-ui/react';
import { 
    useForm,
    useFormState
} from "react-hook-form";
import emailjs from "emailjs-com";
import { ErrorMessage } from "@hookform/error-message";
import { BiErrorCircle } from "react-icons/bi";
import unicorngif from "../../assets/unicorngif.gif";

function ApplicationForm({ packageSelection }) {
    const [hasWebsite, setHasWebsite] = useState(false);
    const { 
        register, 
        reset, 
        handleSubmit, 
        control 
    } = useForm();
    const { errors, isSubmitting, isSubmitSuccessful,  } = useFormState({
        control
    });

    const onFormSubmit = async (data) => {
        emailjs
        .send("service_i9ykern", "sales_application", data, "X8whqhOBk-FyR2fc8")
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
        <Box
            _hover={{
            textDecor: 'none',
            }}
            role="group"
            bg="brand.800"
            borderRadius="30px"
            boxShadow="lg"
            _groupHover={{
                boxShadow: 'xl',
            }}
            maxWidth="1200px"
        >
            <Flex direction="column" height="100%">

            <Flex direction="column" alignItems="center" justifyContent="center" minHeight="140px" p={5} bg="brand.200" borderRadius="30px 30px 0px 0px">
                <AnimatedText>
                    <Heading size="2xl"  fontFamily="Amalta" fontWeight="500" textAlign="center">Work With Us</Heading>
                </AnimatedText>
            </Flex>
            
                <Box
                p="6"
                bg="bg.surface"
                transition="all 0.2s"
                height="100%"
                >
                    <Stack
                        spacing={{
                        base: '8',
                        lg: '16',
                        }}
                        justify="space-between"
                        height="100%"
                    >
                            
                        <Stack spacing="3" height="100%">
                            
                            {!isSubmitSuccessful &&
                            <form onSubmit={handleSubmit(onFormSubmit)}> 

                                <SimpleGrid columns={{base: 1, md: 3}} spacing={5}>
                                    <FormControl id="from_name" mt={3}>
                                        <FormLabel htmlFor="from_name" color="brand.200" fontSize="md">Name:</FormLabel>
                                        <Input name="from_name" color="brand.200" fontSize="md" size="sm" borderRadius="md" focusBorderColor='brand.500' style={{ border: "2px solid #333333"}} {...register("from_name", { required: "This is required."})} />
                                        <ErrorMessage errors={errors} name="from_name" render={({ message }) => <div style={{color: "red", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                                    </FormControl>

                                    <FormControl id="reply_to" mt={3}>
                                        <FormLabel htmlFor="reply_to" color="brand.200" fontSize="md">Email:</FormLabel>
                                        <Input name="reply_to" color="brand.200" fontSize="md" size="sm" borderRadius="md" focusBorderColor='brand.500' style={{ border: "2px solid #333333"}} {...register("reply_to", { required: "This is required."})} />
                                        <ErrorMessage errors={errors} name="reply_to" render={({ message }) => <div style={{color: "red", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                                    </FormControl>

                                    <FormControl id="instagram_handle" mt={3}>
                                        <FormLabel htmlFor="instagram_handle" color="brand.200" fontSize="md">Instagram Handle:</FormLabel>
                                        <Input name="instagram_handle" color="brand.200" fontSize="md" size="sm" borderRadius="md" focusBorderColor='brand.500' style={{ border: "2px solid #333333"}} {...register("instagram_handle", { required: "This is required."})} />
                                        <ErrorMessage errors={errors} name="instagram_handle" render={({ message }) => <div style={{color: "red", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                                    </FormControl>
                                </SimpleGrid>

                                <FormControl id="have_website">
                                    <Checkbox size='md' mt={3} colorScheme='blue' borderColor="brand.200" {...register("have_website")} onChange={e => {
                                        if (e.target.checked) {
                                            setHasWebsite(true);
                                        }
                                        else {
                                            setHasWebsite(false);
                                        }
                                    }} >
                                        <FormLabel htmlFor="have_website" color="brand.200" fontSize="md" mt="2">Do you currently have a website? (Check for yes 🤠) </FormLabel>
                                    </Checkbox>

                                    <ErrorMessage errors={errors} name="have_website" render={({ message }) => <div style={{color: "red", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                                </FormControl>

                                {hasWebsite === true &&
                                    <>
                                    <FormControl id="website_url" mt={3}>
                                        <FormLabel htmlFor="website_url" color="brand.200" fontSize="md">Current website URL:</FormLabel>
                                        <Input name="website_url" color="brand.200" fontSize="md" size="sm" borderRadius="md" focusBorderColor='brand.500' style={{ border: "2px solid #333333"}} {...register("website_url")} />
                                        <ErrorMessage errors={errors} name="website_url" render={({ message }) => <div style={{color: "red", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                                    </FormControl>

                                    <FormControl id="paint_points" mt={3}>
                                        <FormLabel htmlFor="pain_points" color="brand.200" fontSize="md">What has been your biggest pain point with managing your website?</FormLabel>
                                        <Textarea name="pain_points" color="brand.200" fontSize="md" size="sm" borderRadius="md" focusBorderColor='brand.500' style={{ border: "2px solid #333333"}} {...register("pain_points")} />
                                        <ErrorMessage errors={errors} name="pain_points" render={({ message }) => <div style={{color: "red", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                                    </FormControl>
                                    </>
                                }

                                <FormControl id="about_business" mt={3}>
                                    <FormLabel htmlFor="about_business" color="brand.200" fontSize="md">Tell me a little bit about your business. What you do, what you offer, and where you are falling short and hope to improve.</FormLabel>
                                    <Textarea name="about_business" color="brand.200" fontSize="md" size="sm" borderRadius="md" focusBorderColor='brand.500' style={{ border: "2px solid #333333"}} {...register("about_business", { required: "This is required."})} />
                                    <ErrorMessage errors={errors} name="about_business" render={({ message }) => <div style={{color: "red", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                                </FormControl>

                                <FormControl id="website_vision" mt={3}>
                                    <FormLabel htmlFor="website_vision" color="brand.200" fontSize="md">What is your vision for your dream website? What does it feel and look like? What do you hope this dream website motivates people to do? (example: buy a service or product, sign up for your email list, etc.)</FormLabel>
                                    <Textarea name="website_vision" color="brand.200" fontSize="md" size="sm" borderRadius="md" focusBorderColor='brand.500' style={{ border: "2px solid #333333"}} {...register("website_vision", { required: "This is required."})} />
                                    <ErrorMessage errors={errors} name="website_vision" render={({ message }) => <div style={{color: "red", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                                </FormControl>

                                <FormControl id="package" mt={3}>
                                    <FormLabel htmlFor="package" color="brand.200" fontSize="md">What package do you feel is best for you at this time?</FormLabel>
                                    <Select name="package" defaultValue={packageSelection} size="sm" fontSize="md" borderRadius="md" style={{ border: "2px solid #333333"}} {...register("package", { required: "This is required."})}>
                                        <option value='The Simple'>The Simple</option>
                                        <option value='The Makeover'>The Makeover</option>
                                        <option value='The Fairy Godmother'>The Fairy Godmother</option>
                                    </Select>
                                    <ErrorMessage errors={errors} name="package" render={({ message }) => <div style={{color: "red", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                                </FormControl>
                                
                                <Flex width="100%" justifyContent="flex-start">
                                    <Button 
                                        type="submit"
                                        variant="brand.400"
                                        mt={8}
                                        disabled={isSubmitSuccessful}
                                        border="2px solid" 
                                        borderColor="brand.200" 
                                        size="lg" 
                                        fontWeight="600" 
                                        letterSpacing="1px"
                                        // width="100%"
                                    >
                                            <Text>
                                                Let's Do This!
                                            </Text>
                                    </Button>
                                </Flex>
                            </form> 
                            }

                            {isSubmitSuccessful && 
                                <Flex direction="column" alignItems="center" justifyContent="center">
                                    <Heading size="xl" mt={5} fontFamily="Amalta" fontWeight="500">Thank You!</Heading>
                                    <Heading size="md" mt={2} fontFamily="Produkt">We can't wait to take your business's image & results to the next level</Heading>
                                    <Image src={unicorngif} borderRadius="110px" border="2px solid #333333" m={10} />
                                </Flex>
                            }

                        </Stack>
                    
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
  }

  export default ApplicationForm;
  
  const ErrorBox = styled.div`
    display: flex;
    flex-direction: row;
    color: red;
`
const AnimatedText = styled.div`
  -webkit-animation: colorchange 10s infinite alternate;
  -moz-animation: colorchange 10s infinite alternate;
  animation: colorchange 10s infinite alternate;

  @keyframes colorchange {
  0% {
    color: #D76A03 
  }
  
  10% {
    color: #EC9F05;
  }
  
  25% {
    color: #91B7C7;
  }
  
  50% {
    color: #9DB4AB;
  }
  
  
  75% {
    color: #ABC4A1;
  }

  100% {
    color: #BBDB9B;
  }
`
