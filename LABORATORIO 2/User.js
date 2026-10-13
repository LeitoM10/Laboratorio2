const btnVer = async () => {
    try {
        const req = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        const res = await req.json();

        console.log(res);

        

        document.getElementById("userStreet").textContent =
            res.address.street;

        document.getElementById("userCity").textContent =
            res.address.city;

        document.getElementById("userZipcode").textContent =
            res.address.zipcode;

        document.getElementById("userCompany").textContent =
            res.company.name;

    } catch (error) {
        console.error("Error:", error);
    }
}