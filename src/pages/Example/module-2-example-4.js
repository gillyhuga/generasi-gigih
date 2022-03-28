const Char = ({char}) => <li>{char}</li>

const BasicLoop = () => {
    const chars = ['a','b','c']
    const charList = chars.map(e => <Char char={e} />)

    return <ul>{charList}</ul>
}

export default BasicLoop;