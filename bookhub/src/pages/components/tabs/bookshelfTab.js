export default function Bookshelf(props){
// use props.auth to check if user has logged in/ recently made account

    return (
        <div>
            {props.auth? <h1>IS AUTH</h1>:<h1>NOT AUTHENTICATED</h1>}
            <h1>
                Bookshelf content here
            </h1>
        </div>
    )
}