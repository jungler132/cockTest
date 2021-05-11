import { strings } from "../../localization";

const sendRequest = async(contentType) => {
    try {
        const response = await fetch(strings.urlRequest + contentType, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        return await response.json();
    } catch (error) {
        console.log('Something went wrong! ', error);
    }
};

export default sendRequest;