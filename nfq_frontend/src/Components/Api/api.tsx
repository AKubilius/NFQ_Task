import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7019/",
});

const getRequest= async (url: string, postData: any) => {
  const authorizationToken = `Bearer ${sessionStorage.getItem("token")}`;
  const { data } = await axios.get(`${url}${postData}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
  return(data)
}

async function makePostRequest(url: string, postData: any) {
  try {
    const { data } = await axios.post<any>(url, postData, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return data;
  } catch (error) {
    await handleError(error);
  }
}

async function makePutRequest(url: string, postData: any) {
  try {
    const { data } = await axios.put<any>(url, postData, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return data;
  } catch (error) {
    await handleError(error);
  }
}



async function handleError(error: any) {
  if (axios.isAxiosError(error)) {
    console.log("error message: ", error.message);
    return error.message;
  } else {
    console.log("unexpected error: ", error);
    return "An unexpected error occurred";
  }
}

export const logout = () => {
  sessionStorage.clear();
  window.location.href = '/login';
};


export { api, makePostRequest,getRequest,makePutRequest};