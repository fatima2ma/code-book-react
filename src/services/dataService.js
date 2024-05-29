function sessionInfo(){
    const token = JSON.parse(sessionStorage.getItem('token'));
    const id    = JSON.parse(sessionStorage.getItem('cbid'));
    return {token, id};
}

export async function getUser(){
    const {token, id} = sessionInfo();
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${id}`, {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
    });
    if(!response.ok) throw {message: response.statusText, status: response.status};
    const data = await response.json();
    return data;
}

export async function getOrders(){
    const {token, id} = sessionInfo();
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${id}`, {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`} 
        });
        if(!response.ok) throw {message: response.statusText, status: response.status};
        const data = await response.json();
        return data;
}

export async function createOrder(cartList, total, user, form){
    const {token, id} = sessionInfo();
    const requestDeatails = {
        cartList: cartList,
        total: total,
        quantity: cartList.length,
        user:{
            name: user.name,
            email: user.email,
            id: user.id
        },
        card:{
            card_number: form.cardnumber,
            date: `${form.month}/${form.year}`,
            card_code: form.code
        }
    };
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        body: JSON.stringify(requestDeatails)
    });
    if(!response.ok) throw {message: response.statusText, status: response.status};
    const data = await response.json();
    return data;
}