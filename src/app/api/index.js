import Link from "next/link";
import Image from "next/image";
import { Flex,Box,Text,Button } from "@chakra-ui/react";
import { baseUrl,fetchApi } from "./utils/fetchApi";
import Property from "./components/property";

const Banner = async({purpose,title1,title2,dec1,dec2,buttonText,linkName,imageurl}) =>
{
    <Flex flexWrap="wrap" justifyContent="center"  alignItems="center" m="10">
       <Image src ={imageurl} width ={500} height ={300}  alt="banner" />
       <Box p="5">
        <Text color="grey.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text fontSize="3x" fontWeight="medium">{title1}<br>{title2}</br></Text>
        <Text  fontSize="lg" paddingTop="3" paddingBottom="3" fontWeight="medium" color="gray.700">{dec1}<br>
        {dec2}</br></Text>
        <Button fontSize="xl">
            <Link href={linkName}>{buttonText}</Link>
        </Button>
       </Box>
    </Flex>
}

export default function Home({propertyForSale,propertyForRent})
{
    console.log(propertyForSale,propertyForRent);
    return (
        <Box>
            
            <Banner 
            purpose="RENT A HOME"
            title1="Rental Homes for"
            title2="Everyone"
            dec1="Explore Appartments, Villas ,Homes"
            dec2="and more"
            buttonText="Explore Renting"
            linkName= "/search?purpose=for-rent"
            imageurl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4' />
            <Flex  flexWrap="wrap">
                {propertyForRent.map((property)=> <Property  property={property} key ={property.id} />)}

            </Flex>
           <Banner 
            purpose="BUY A HOME"
            title1="Find,Buy & Own your "
            title2="Dream Home"
            dec1="Explore Appartments, Villas ,Homes"
            dec2="and more"
            buttonText="Explore Buying"
            linkName= "/search?purpose=for-rent"
            imageurl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008' />
             <Flex  flexWrap="wrap">
                {propertyForSale.map((property)=> <Property  property={property} key ={property.id} />)}

            </Flex>
        </Box>
    )
}


export async function getStaticProps()
{
    const propertyForSale = await fetchApi('${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitPerPage=6')
    const propertyForRent = await fetchApi('${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitPerPage=6')

    return {
        props:{
        propertyForSale: propertyForSale?.hits,
        propertyForRent: propertyForRent?.hits,


    }
}
}