import EditPublicationForm from "@/components/EditPublicationForm";
import { getApiURL } from "@/components/getApiURL";

const getPublicationById = async(id) => {
    const url = getApiURL() + `/publications/${id}`;
    try {
        const res = await fetch(url, {cache:"no-store"});
        if (!res.ok) {
            throw new Error("Failed to fetch publication")
        }
        return res.json();
    } catch (error) {
        throw new Error("Server Error")
    }
}

export default async function EditPublication({params}) {
    const {id} = params;    
    const {publication} = await getPublicationById(id);
    const {title, description, datePublished, url} = publication;
    return (
        
        <EditPublicationForm id={id} title={title} description={description} datePublished={datePublished} url={url}/>
        
    )
}