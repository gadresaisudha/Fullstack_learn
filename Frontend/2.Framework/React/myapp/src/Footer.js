const Footer = ({listlength}) => {
    const today = new Date();

    return (

        <footer>
            <div>{listlength} List {listlength===1?"item": "items"}</div>
            {/*<p>Copyright &copy; {today.getFullYear()}</p>*/}
        </footer>
    )
}

export default Footer
