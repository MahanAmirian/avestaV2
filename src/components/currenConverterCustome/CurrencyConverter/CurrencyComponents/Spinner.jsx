import spinner from './Images/spinner.gif'


const image = {
    "marginBottom": "",
    "width": "60px"
}
export function Spinner() {
    return (
        <div className='text-center -mt-2'>
            <img src={spinner} alt="" style={image} />
        </div>
    )
}

