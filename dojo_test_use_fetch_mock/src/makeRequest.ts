export async function makeRequest(){
    const response = await fetch("http://not-exist/get");
    if(!response.ok){
        throw new Error('fetch error');
    }
    const json = await response.json();
    return json;
}