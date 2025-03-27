const Content = ({data})=>{


    return (
        <>
        <ul>
            {data.map(
                d=>(
                    <li key={d.id}>{JSON.stringify(d)}</li>
                )
            )}
        </ul>
        </>


    )
}
export default Content;
