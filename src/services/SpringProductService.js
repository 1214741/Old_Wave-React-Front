import axios from "axios";

const apiUrlSpring = 'https://oldwave-spring-api.herokuapp.com/api'

//http://20.228.205.221/api/product/?page=1&size=50
export const getProductsByName = async (name, page) => {
    const resp = await axios.get(`${apiUrlSite}/product?name=${name}&page=${page}&size=20`);
    return resp;
}

//http://20.228.205.221/api/product/{id}/detail/
export const getProductDesc = async (code) => {
    const resp = await axios.get(`${apiUrlSite}/product/${code}/detail`);
    return resp;
}


