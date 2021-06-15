//team
import { useSelector } from 'react-redux'

const Team = () => {
    const { team } = useSelector(state => state.hero)
    console.log(team);
    return (
        <div>
            <p className='py-4 text-center text-white'>You still haven`t a team, start adding a HERO</p>
        </div>
    )
}

export default Team
