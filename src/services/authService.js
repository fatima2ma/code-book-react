export async function login(form){
    const response = await fetch(`${process.env.REACT_APP_HOST}/login`,{
        method: 'POST',
        headers: {'content-Type': 'Application/json'},
        body: JSON.stringify(form),
    });
    if(!response.ok) throw {message: response.statusText, status: response.status};
    const data = await response.json();
    if(data.accessToken){
        sessionStorage.setItem('token', JSON.stringify(data.accessToken));
        sessionStorage.setItem('cbid', JSON.stringify(data.user.id));
    }
    return data;
}

export async function register(form){
    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, {
        method: 'POST',
        headers: {'content-Type' : 'application/json'},
        body: JSON.stringify(form),
    });
    if(!response.status) throw {message: response.statusText, status: response.status};
    const data = await response.json();
    if(data.accessToken){
        sessionStorage.setItem('token', JSON.stringify(data.accessToken));
        sessionStorage.setItem('cbid', JSON.stringify(data.user.id));            
    }
    return data;
}

export function logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('cbid');
}