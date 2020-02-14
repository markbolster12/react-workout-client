export const headers = new Headers({
        "Content-Type": "application/json",
        "accept": "application/json"
    });

export const svc_headers = new Headers({
    "Content-Type": "application/json",
    "accept": "application/json",
    "Access-Control-Expose-Headers": "content-type"
});

const myStorage = window.localStorage;
if(myStorage.getItem("header"))
{
    svc_headers.set("Authorization", myStorage.getItem("header"));
}