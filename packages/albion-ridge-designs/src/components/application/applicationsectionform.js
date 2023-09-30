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
  SimpleGrid,
  HStack
} from '@chakra-ui/react';
import { 
    useForm,
    useFormState
} from "react-hook-form";
import emailjs from "emailjs-com";
import { ErrorMessage } from "@hookform/error-message";
import { BiErrorCircle } from "react-icons/bi";
import unicorngif from "../../assets/unicorngif.gif";

function ApplicationSectionForm() {
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
            role="group"
            maxWidth="800px"
            mt={{base: 10, md: "0px"}} 
            mb={{base: 10, md: "0px"}} 
        >
            <Flex direction="column" height="100%">

                <Flex direction="column" alignItems="center" justifyContent="center" mb={10}>
                    <Heading size="2xl" color="brand.800" width="fit=content" fontFamily="Amalta" fontWeight="500" textAlign="center">Work With Us</Heading>
                </Flex>
            
                <Box borderRadius="lg" flex="1">
                    <Stack>
                        
                        {!isSubmitSuccessful &&
                        <form onSubmit={handleSubmit(onFormSubmit)}> 

                            <SimpleGrid columns={{base: 1, md: 3}} spacing={5}>
                                <FormControl id="from_name" mt={3}>
                                    <FormLabel htmlFor="from_name" color="brand.800" fontWeight="600" fontSize="md">Name:</FormLabel>
                                    <Input name="from_name" backgroundColor="brand.800" color="brand.200" fontSize="md" size="sm" borderRadius="md" focusBorderColor='brand.500' style={{ border: "2px solid #333333"}} {...register("from_name", { required: "This is required."})} />
                                    <ErrorMessage errors={errors} name="from_name" render={({ message }) => <div style={{color: "#BBDB9B", fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                                </FormControl>

                                <FormControl id="reply_to" mt={3}>
                                    <FormLabel htmlFor="reply_to" color="brand.800" fontWeight="600" fontSize="md">Email:</FormLabel>
                                    <Input name="reply_to" backgroundColor="brand.800" color="brand.200" fontSize="md" size="sm" borderRadius="md" focusBorderColor='brand.500' style={{ border: "2px solid #333333"}} {...register("reply_to", { required: "This is required."})} />
                                    <ErrorMessage errors={errors} name="reply_to" render={({ message }) => <div style={{color: "#BBDB9B", fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                                </FormControl>

                                <FormControl id="instagram_handle" mt={3}>
                                    <FormLabel htmlFor="instagram_handle" color="brand.800" fontWeight="600" fontSize="md">Instagram Handle:</FormLabel>
                                    <Input name="instagram_handle" backgroundColor="brand.800" color="brand.200" fontSize="md" size="sm" borderRadius="md" focusBorderColor='brand.500' style={{ border: "2px solid #333333"}} {...register("instagram_handle", { required: "This is required."})} />
                                    <ErrorMessage errors={errors} name="instagram_handle" render={({ message }) => <div style={{color: "#BBDB9B", fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                                </FormControl>
                            </SimpleGrid>

                            <FormControl id="have_website" mt={3}>
                                <HStack>
                                    <Checkbox size='md' colorScheme='blue' borderRadius="5px" backgroundColor="brand.800" borderColor="brand.200" {...register("have_website")} onChange={e => {
                                        if (e.target.checked) {
                                            setHasWebsite(true);
                                        }
                                        else {
                                            setHasWebsite(false);
                                        }
                                    }} >
                                    </Checkbox>
                                    <FormLabel htmlFor="have_website" color="brand.800" fontWeight="600" fontSize="md" mt="2">Do you currently have a website? (Check for yes 🤠) </FormLabel>
                                </HStack>

                                <ErrorMessage errors={errors} name="have_website" render={({ message }) => <div style={{color: "#BBDB9B", fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                            </FormControl>

                            {hasWebsite === true &&
                                <>
                                <FormControl id="website_url" mt={3}>
                                    <FormLabel htmlFor="website_url" color="brand.800" fontWeight="600" fontSize="md">Current website URL:</FormLabel>
                                    <Input name="website_url" backgroundColor="brand.800" color="brand.200" fontSize="md" size="sm" borderRadius="md" focusBorderColor='brand.500' style={{ border: "2px solid #333333"}} {...register("website_url")} />
                                    <ErrorMessage errors={errors} name="website_url" render={({ message }) => <div style={{color: "#BBDB9B", fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                                </FormControl>

                                <FormControl id="paint_points" mt={3}>
                                    <FormLabel htmlFor="pain_points" color="brand.800" fontWeight="600" fontSize="md">What has been your biggest pain point with managing your website?</FormLabel>
                                    <Textarea name="pain_points" backgroundColor="brand.800" color="brand.200" fontSize="md" size="sm" borderRadius="md" focusBorderColor='brand.500' style={{ border: "2px solid #333333"}} {...register("pain_points")} />
                                    <ErrorMessage errors={errors} name="pain_points" render={({ message }) => <div style={{color: "#BBDB9B", fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                                </FormControl>
                                </>
                            }

                            <FormControl id="about_business" mt={3}>
                                <FormLabel htmlFor="about_business" color="brand.800" fontWeight="600" fontSize="md">Tell me a little bit about your business. What you do, what you offer, and where you are falling short and hope to improve.</FormLabel>
                                <Textarea name="about_business" backgroundColor="brand.800" color="brand.200" fontSize="md" size="sm" borderRadius="md" focusBorderColor='brand.500' style={{ border: "2px solid #333333"}} {...register("about_business", { required: "This is required."})} />
                                <ErrorMessage errors={errors} name="about_business" render={({ message }) => <div style={{color: "#BBDB9B", fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                            </FormControl>

                            <FormControl id="website_vision" mt={3}>
                                <FormLabel htmlFor="website_vision" color="brand.800" fontWeight="600" fontSize="md">What is your vision for your dream website? What does it feel and look like? What do you hope this dream website motivates people to do? (example: buy a service or product, sign up for your email list, etc.)</FormLabel>
                                <Textarea name="website_vision" backgroundColor="brand.800" color="brand.200" fontSize="md" size="sm" borderRadius="md" focusBorderColor='brand.500' style={{ border: "2px solid #333333"}} {...register("website_vision", { required: "This is required."})} />
                                <ErrorMessage errors={errors} name="website_vision" render={({ message }) => <div style={{color: "#BBDB9B", fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                            </FormControl>

                            <FormControl id="package" mt={3}>
                                <FormLabel htmlFor="package" color="brand.800" fontWeight="600" fontSize="md">What package do you feel is best for you at this time?</FormLabel>
                                <Select name="package" backgroundColor="brand.800" size="sm" fontSize="md" borderRadius="md" style={{ border: "2px solid #333333"}} {...register("package", { required: "This is required."})}>
                                    <option value='The Simple'>The Simple</option>
                                    <option value='The Makeover'>The Makeover</option>
                                    <option value='The Fairy Godmother'>The Fairy Godmother</option>
                                </Select>
                                <ErrorMessage errors={errors} name="package" render={({ message }) => <div style={{color: "#BBDB9B", fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}><BiErrorCircle style={{marginRight: "5px"}} /> {message} </div>}/>
                            </FormControl>
                            
                            <Flex width="100%" justifyContent="flex-start">
                                <Button 
                                    type="submit"
                                    variant="brand.300"
                                    mt={8}
                                    disabled={isSubmitSuccessful}
                                    border="2px solid" 
                                    borderColor="brand.200" 
                                    size="lg" 
                                    fontWeight="600" 
                                    letterSpacing="1px"
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
                </Box>
            </Flex>
        </Box>
    )
  }

  export default ApplicationSectionForm;
  
  const ErrorBox = styled.div`
    display: flex;
    flex-direction: row;
    color: red;
`

const CheckboxStyle=styled.div`
    span {
        background-color: white;
    }
`
