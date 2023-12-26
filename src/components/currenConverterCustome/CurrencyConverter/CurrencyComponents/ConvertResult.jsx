import {Spinner} from './Spinner'
function ConvertResult({ Loading, result, rate }) {
    return (
        <div className='flex justify-center items-center'>
            {Loading ? (
            <Spinner/>
            ) : (
                result &&
                rate && (
                    <>
                        <h1 className="result text-gray-400">{result}</h1>
                        <h4 className="rate text-gray-400 ">{rate}</h4>
                    </>
                )
            )}
        </div>
    )
}

export default ConvertResult
