/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.getElementById('app')
appNode.className = "app container-fluid"

window.fetch(`${baseUrl}/api/avo`)
    .then(res => res.json())
    .then(resJson => {
        const AllItem = [];
        resJson.data.forEach(item => {

            //creacion de la imagen
            const image = document.createElement('img');
            image.src = `${baseUrl}${item.image}`
            image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
            // creacion del titulo
            const title = document.createElement('h2');
            title.textContent = item.name;
            title.className = "text-2xl"

            //creacion de precio
            const price = document.createElement('span');
            price.textContent = item.price;
            price.className = "text-gray-600"

            const description = document.createElement('div');
            description.className = "text-center md:text-left";
            description.append(title, price)

            const container = document.createElement('div')

            const card = document.createElement('div');
            card.className = "shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-900 w-64 relative card-item";

            card.append(image, description)
            AllItem.push(card)

        })
        appNode.append(...AllItem)
    })