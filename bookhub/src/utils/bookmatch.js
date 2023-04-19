import { getBook } from "../firebaseAPI/firebaseAPI";

//Main algorithms for fetching books based on preferences

//Function for default landing page
/**
 * @param cb : callback function to use
 * @returns array of 5 most popular attributes predefined
 */
function default_fetch(cb) {
    const attributes = [
        { key: "Fantasy", type: "subject" },
        { key: "Fiction", type: "subject" },
        { key: "Science", type: "subject" },
        { key: "Adventure", type: "subject" },
        { key: "Romance", type: "subject" },
    ]

    let data = [];
    let i = 0;

    for (const attr of attributes) {
        data.push(getFunct(attr.key, attr.type));
    };

    Promise.all(data).then((val) => {
        let sub = [];
        val.map(a => sub.push(a.json()))
        console.log(sub)
        Promise.all(sub).then((val) => {
            let final = []
            for (let i = 0; i < attributes.length; i++) {
                let obj = {
                    data: val[i].items,
                    attr: attributes[i].key
                }
                final.push(obj)
            }
            cb(final);
        })
    });

}

//helper for attribute
async function getFunct(attr, identifier) {
    let ans;
    switch (identifier) {
        case "name":
            return await getBook(attr, "any", "any");
        case "author":
            return await getBook("any", attr, "any");
        case "subject":
            return await getBook("any", "any", attr);
        default:
            return await getBook("any", "any", "any");
    }
}

export { default_fetch };